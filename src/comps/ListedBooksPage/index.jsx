import { useEffect, useState } from "react";
import Book from "./Book";

function ListedBooks() {

  return (  
    <section className="px-4 mt-8 mb-4" >
      <div className="max-w-screen-xl mx-auto">
        <header className="py-4 bg-gray-200 rounded-md">
          <h2 className="text-3xl md:text-4xl text-center">Books</h2>
        </header>

        <form className="flex justify-center py-6">
          <button className="px-3 py-1 mx-auto rounded-md text-white bg-green-600 hover:opacity-85">Sort By</button>
        </form>

        <BooksTabs />
      </div>
    </section>
  );
}
export default ListedBooks;


function BooksTabs() {
  // let wishlistLS = JSON.parse(localStorage.getItem('bookvibe:wishlist')) || []
  // const readListLS = JSON.parse(localStorage.getItem('bookvibe:read-list')) || []
  // console.log(wishlistLS, readListLS);
  const [readList, setReadList] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [activeTab, setActiveTab] = useState('read')
  const activeClass = `border-x border-t border-gray-600 -bottom-[1px]`

  useEffect(() => {
    setWishlist( JSON.parse(localStorage.getItem('bookvibe:wishlist')) || [] )
    setReadList( JSON.parse(localStorage.getItem('bookvibe:read-list')) || [] )
  }, [])

  return (  
    <div>
      <div className="border-b mb-4">
        <button 
          className={`${activeTab==='read'? activeClass : ''} px-3 py-1 mx-auto rounded-t-md  hover:opacity-85 relative bg-white`}
          onClick={() => setActiveTab('read')}
        >Read Books</button>
        <button 
          className={`${activeTab==='wishlist'? activeClass : ''} px-3 py-1 mx-auto rounded-t-md hover:opacity-85 relative bg-white`}
          onClick={() => setActiveTab('wishlist')}
        >Wishlist Books</button>
      </div>

      <ul>
        {activeTab==='read' && readList.map(book => <Book key={book.bookId} {...book} />)}
        {activeTab==='wishlist' && wishlist.map(book => <Book key={book.bookId} {...book} />)}
      </ul>
    </div>
  );
}

