import { useParams } from "react-router-dom";
import {toast} from 'react-toastify';

import Tags from "../Tags";
import TableRow from "./TableRow";
import { useContext } from "react";
import { BooksContext } from "../../App";

function BookDetails() {
  const books = useContext(BooksContext)
  const {id} = useParams()
  
  const selectedBook = books.find(book => book.bookId === parseInt(id))
  const { image, tags, bookName, author, category, review, rating, totalPages, yearOfPublishing, publisher } = selectedBook

  const handleAddingReadList = () => {
    const readListLS = JSON.parse(localStorage.getItem('bookvibe:read-list')) || []
    const existBookOnReadList = readListLS.find(book => book.bookId === parseInt(id))

    let wishlistLS = JSON.parse(localStorage.getItem('bookvibe:wishlist')) || []
    const existBookOnWishlist = wishlistLS.find(book => book.bookId === parseInt(id))
    
    // show alert if alredy exist on read-list
    if (existBookOnReadList) {
      toast.error('Cannot add! Already been added on read-list!!') 
    } 
    // add to read-list & save
    else { 
      // delete book from wishlist if already exist && save  
      if (existBookOnWishlist) {
        wishlistLS = wishlistLS.filter(book => book.bookId !== parseInt(id))
        localStorage.setItem('bookvibe:wishlist', JSON.stringify(wishlistLS))
      }
      readListLS.push(selectedBook)
      localStorage.setItem('bookvibe:read-list', JSON.stringify(readListLS))
      toast.success('Added to "read list"')
    }

  }

  const handleAddingWishlist = () => {
    const wishlistLS = JSON.parse(localStorage.getItem('bookvibe:wishlist')) || []
    const existBookOnWishlist = wishlistLS.find(book => book.bookId === parseInt(id))
    
    const readListLS = JSON.parse(localStorage.getItem('bookvibe:read-list')) || []
    const existBookOnReadList = readListLS.find(book => book.bookId === parseInt(id))

    // show alert if already exist on wishlist
    if (existBookOnWishlist) {
      toast.error('Cannot add! Already been added on wishlist!!') 
    } 
    // show alert if read-list contains the book
    else if (existBookOnReadList) {
      toast.error('Cannot add! Already Read the book!!') 
    }
    // add the book to wishlist
    else {
      wishlistLS.push(selectedBook)
      localStorage.setItem('bookvibe:wishlist', JSON.stringify(wishlistLS))
      toast.success('Added to wishlist')
    }
  }

  return (  
    <section className="px-4">
      <div className="max-w-screen-xl mx-auto py-8 flex flex-col md:flex-row gap-8">
        <figure className="flex-[1] bg-gray-100 rounded-md p-6 lg:p-12 mb-4">
          <img src={image} className="w-full mx-auto" alt={bookName} />
        </figure>

        <article className="flex-[3]">
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">{bookName}</h3>
          <p className="border-b text-gray-600 text-lg pb-2 mb-2">By : {author}</p>
          <p className="border-b text-gray-600 text-lg pb-2 mb-2">{category}</p>
          <p className="text-gray-600 mb-4"><span className="text-black font-semibold">Review:</span> {review}</p>

          <div className="flex gap-2 border-b pb-4 mb-3">
            <span className="text-black font-semibold">Tags:</span>
            <Tags tags={tags} />
          </div>

          <table className="mb-5">
            <tbody>
              <TableRow title={"Number of Pages"} info={totalPages} />
              <TableRow title={"Year of Publishing"} info={yearOfPublishing} />
              <TableRow title={"Publisher"} info={publisher} />
              <TableRow title={"Rating"} info={rating} />
            </tbody>
          </table>

          <div>
            <button className="px-4 py-2 mr-4 rounded-md text-white bg-green-600 hover:opacity-85" onClick={handleAddingReadList}>Read</button>
            <button className="px-4 py-2 rounded-md text-white bg-cyan-600 hover:opacity-85" onClick={handleAddingWishlist}>Wishlist</button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default BookDetails;