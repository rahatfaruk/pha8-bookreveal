import { useEffect, useState } from "react"
import Book from "./Book"
import useLocalStorage from "../useLocalStorage"

export default function BooksTabs({sortBy}) {
  const [readList, setReadList] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [activeTab, setActiveTab] = useState('read')
  const {lsSetItem, lsGetItem} = useLocalStorage()
  const activeTabClass = `border-x border-t border-gray-600 -bottom-[1px]`

  // update readlist & wishlist from ls data
  useEffect(() => {
    const lsWishlist = lsGetItem('wishlist')
    const lsReadList = lsGetItem('readlist')
    
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
        {activeTab==='read' && (
          readList.length < 1 ? 
          <li className="border p-8 rounded-md text-3xl">List is empty!</li> :
          readList.map(book => <Book key={book.bookId} {...book} />)
        )}
        
        {activeTab==='wishlist' && (
          wishlist.length < 1 ? 
          <li className="border p-8 rounded-b-md text-3xl">List is empty!</li> :
          wishlist.map(book => <Book key={book.bookId} {...book} />)
        )}
      </ul>
    </div>
  );
}