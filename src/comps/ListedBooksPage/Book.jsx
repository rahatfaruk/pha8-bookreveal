import { FileBarGraph, GeoAlt, People } from "react-bootstrap-icons";
import Tags from "../Tags";

function Book() {
  return (  
    <li className="p-4 mb-4 border rounded-md flex flex-col md:flex-row gap-4 md:gap-6">
      <figure className="bg-gray-100 rounded-md p-4 mb-4">
        <img src="/img/dating-playbook.png" className="max-w-full mx-auto w-32" alt="" />
      </figure>
      <article>
        <h3 className="text-xl font-semibold mb-1">The Catcher in the Rye</h3>
        <p>By : Awlad Hossain</p>
        <div className="flex flex-col md:flex-row gap-2 md:gap-12 my-3">
          <div className="flex gap-2 items-center">
            <h4>Tags:</h4>
            <Tags tags={ ['romance', 'fiction'] } isSmall={true} />
          </div>
          <p className="flex items-center gap-2 text-gray-600"> 
            <GeoAlt /> Year of Publishing: 1924 
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <p className="flex items-center gap-2 text-gray-600"> 
            <People /> Publisher: Scribner
          </p>
          <p className="flex items-center gap-2 text-gray-600"> 
            <FileBarGraph /> Page 192 
          </p>
        </div>

        <div className="pt-3 mt-3 border-t flex flex-wrap gap-4">
          <button className="px-3 py-1 rounded-2xl text-blue-800 bg-blue-200 hover:opacity-85">Category: Classic</button>
          <button className="px-3 py-1 rounded-2xl text-orange-800 bg-orange-200 hover:opacity-85">Rating: 4.5</button>
          <button className="px-3 py-1 rounded-2xl text-white bg-green-600 hover:opacity-85">View Details</button>
        </div>
      </article>
    </li>
  );
}

export default Book;