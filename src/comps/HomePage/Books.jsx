import { Star } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Tags from "../Tags";

function Books({books}) {
  return (  
    <section className="px-4">
      <div className="max-w-screen-xl mx-auto py-8">
        <h2 className="text-4xl mb-6 text-center">Books</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map(book => <Book key={book.bookId} {...book} />)}
        </div>
      </div>
    </section>
  );
}
export default Books;


function Book({bookId, image, tags, bookName, author, category, rating}) {
  return (  
    <Link to={`/book-details/${bookId}`} className="block border rounded-md p-4 shadow hover:cursor-pointer hover:shadow-lg">
      <figure className="bg-gray-100 rounded-md p-4 mb-4">
        <img src={image} className="max-w-full mx-auto h-40" alt="" />
      </figure>
      <Tags tags={ tags } isSmall={true} />
      <h3 className="text-xl font-semibold mb-1">{bookName}</h3>
      <p>By : {author}</p>
      <div className="flex gap-6 justify-between border-t border-dashed pt-2 mt-2">
        <p>{category}</p>
        <p className="flex items-center gap-2">{rating} <Star /></p>
      </div>
    </Link>
  );
}

export { Book };