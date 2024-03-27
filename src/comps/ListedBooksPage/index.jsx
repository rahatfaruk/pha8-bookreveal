import { useState } from "react";
import BooksTabs from "./BooksTabs";

function ListedBooks() {
  const [sortBy, setSortBy] = useState('')

  const handleSortBy = e => {
    const sortQuery = (e.target.value);
    setSortBy(sortQuery)
  } 

  return (  
    <section className="px-4 mt-8 mb-4" >
      <div className="max-w-screen-xl mx-auto">
        <header className="py-4 bg-gray-200 rounded-md">
          <h2 className="text-3xl md:text-4xl text-center">Books</h2>
        </header>

        <form className="flex justify-center py-6">
          <select className="px-3 py-1 mx-auto rounded-md text-white bg-green-600 hover:opacity-85" value={sortBy} onChange={handleSortBy}>
            <option value="" disabled>Sort By</option>
            <option value="rating">Rating</option>
            <option value="pages">Number of pages</option>
            <option value="published-year">Publisher year</option>
          </select>
        </form>

        <BooksTabs sortBy={sortBy} />
      </div>
    </section>
  );
}
export default ListedBooks;

