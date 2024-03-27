import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Books from "./Books";

function HomePage() {
  const books = useLoaderData()
  return (  
    <div>
      <Banner />
      <Books books={books} />
    </div>
  );
}

export default HomePage;
