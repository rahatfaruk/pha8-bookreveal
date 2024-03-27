import { useEffect, useState } from "react";
import ShapeBarChart from "./ShapeBarChart";

function PagesToRead() {
  const [readList, setReadList] = useState([])

  // update readlist from ls
  useEffect(() => {
    const readListLS = JSON.parse(localStorage.getItem('bookvibe:read-list')) || []

    const modifiedReadList = readListLS.map(({bookId, bookName, totalPages}) => {
      return {bookName, totalPages, bookId}
    })
    setReadList(modifiedReadList);
  }, [])

  return (  
    <section className="px-4 mt-8 mb-4">
      <div className="max-w-screen-xl mx-auto">
        <header className="py-4 bg-gray-200 rounded-md">
          <h2 className="text-3xl md:text-4xl text-center">Pages To Read</h2>
        </header>

        <div className="py-8 my-8 border rounded-md">
          <ShapeBarChart data={readList} />
        </div>
      </div>
    </section>
  );
}

export default PagesToRead;