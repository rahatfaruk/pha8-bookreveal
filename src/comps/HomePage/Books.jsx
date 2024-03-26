import { Star } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Tags from "../Tags";

function Books() {
  return (  
    <section className="px-4">
      <div className="max-w-screen-xl mx-auto py-8">
        <h2 className="text-4xl mb-6 text-center">Books</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Book />
          <Book />
          <Book />
          <Book />
        </div>
      </div>
    </section>
  );
}
export default Books;


function Book({id}) {
  return (  
    <Link to={`/book-details/${id}`} className="block border rounded-md p-4 shadow hover:cursor-pointer hover:shadow-lg">
      <figure className="bg-gray-100 rounded-md p-4 mb-4">
        <img src="/img/dating-playbook.png" className="max-w-full mx-auto h-40" alt="" />
      </figure>
      <Tags tags={ ['romance', 'fiction'] } isSmall={true} />
      <h3 className="text-xl font-semibold mb-1">The Catcher in the Rye</h3>
      <p>By : Awlad Hossain</p>
      <div className="flex gap-6 justify-between border-t border-dashed pt-2 mt-2">
        <p>Fiction</p>
        <p className="flex items-center gap-2">5.00 <Star /></p>
      </div>
    </Link>
  );
}

export { Book };