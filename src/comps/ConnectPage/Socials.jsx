import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";

function Socials() {
  return (  
    <div className="bg-gray-200 p-8 my-8 text-center rounded-md flex gap-4 justify-center">
      <a href="#" className="inline-block py-2 px-2 rounded-full text-2xl bg-green-100 text-blue-900"> 
        <Facebook /> 
      </a>
      <a href="#" className="inline-block py-2 px-2 rounded-full text-2xl bg-green-100 text-sky-700"> 
        <Twitter /> 
      </a>
      <a href="#" className="inline-block py-2 px-2 rounded-full text-2xl bg-green-100 text-red-900"> 
        <Instagram /> 
      </a>
    </div>
  );
}

export default Socials;