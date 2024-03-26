import { Star } from "react-bootstrap-icons";
import Tags from "../Tags";

function BookDetails() {
  return (  
    <section className="px-4">
      <div className="max-w-screen-xl mx-auto py-8 flex flex-col md:flex-row gap-8">
        <figure className="flex-[1] bg-gray-100 rounded-md p-6 lg:p-12 mb-4">
          <img src="/img/why-hate-money-lg.png" className="max-w-full mx-auto" alt="" />
        </figure>

        <article className="flex-[2]">
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">The Catcher in the Rye</h3>
          <p className="border-b text-gray-600 text-lg pb-2 mb-2">By : Awlad Hossain</p>
          <p className="border-b text-gray-600 text-lg pb-2 mb-2">Fiction</p>
          <p className="text-gray-600 mb-4"><span className="text-black font-semibold">Review:</span> A powerful and timely novel that addresses issues of race, identity, and social justice through the eyes of a teenage girl who witnesses a police shooting.</p>

          <div className="flex gap-2 border-b pb-2 mb-2">
            <span className="text-black font-semibold">Tags:</span>
            <Tags tags={ ['romance', 'philosophy'] } />
          </div>

          <table className="mb-5">
            <tbody>
              <tr>
                <td className="text-gray-600 pr-8 py-0.5">Number of Pages:</td>
                <td>281</td>
              </tr>
              <tr>
                <td className="text-gray-600 pr-8 py-0.5">Year of Publishing:</td>
                <td>2010</td>
              </tr>
              <tr>
                <td className="text-gray-600 pr-8 py-0.5">Publisher:</td>
                <td>J.B Lippincott & Co.</td>
              </tr>
            </tbody>
          </table>

          <div>
            <button className="px-4 py-2 mr-4 rounded-md text-white bg-green-600 hover:opacity-85">Read</button>
            <button className="px-4 py-2 rounded-md text-white bg-cyan-600 hover:opacity-85">Wishlist</button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default BookDetails;