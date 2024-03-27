import { useEffect, useState } from "react"
import Book from "./Book"

export default function BooksTabs({sortBy}) {
  const [readList, setReadList] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [activeTab, setActiveTab] = useState('read')
  const activeTabClass = `border-x border-t border-gray-600 -bottom-[1px]`

  // update readlist & wishlist from ls data
  useEffect(() => {
    const lsWishlist = JSON.parse(localStorage.getItem('bookvibe:wishlist')) || []
    const lsReadList = JSON.parse(localStorage.getItem('bookvibe:read-list')) || []
    
    if (sortBy) {
      // sort read-list (descending) based on total-pages  
      lsReadList.sort((a, b) => {
        if (sortBy === 'pages') {
          return b.totalPages - a.totalPages
        } else if (sortBy === 'published-year') {
          return b.yearOfPublishing - a.yearOfPublishing
        } else if (sortBy === 'rating') {
          return b.rating - a.rating
        }
      })
    }

    setWishlist( lsWishlist )
    setReadList( lsReadList )
  }, [sortBy])

  return (  
    <div>
      <div className="border-b mb-4">
        <button 
          className={`${activeTab==='read'? activeTabClass : ''} px-3 py-1 mx-auto rounded-t-md  hover:opacity-85 relative bg-white`}
          onClick={() => setActiveTab('read')}
        >Read Books</button>
        <button 
          className={`${activeTab==='wishlist'? activeTabClass : ''} px-3 py-1 mx-auto rounded-t-md hover:opacity-85 relative bg-white`}
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