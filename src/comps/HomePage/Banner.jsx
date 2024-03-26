import { Link } from 'react-router-dom';
import BannerImg from '/img/dating-playbook-lg.png';

function Banner() {
  return (  
    <section className="px-4">
      <div className="max-w-screen-xl mx-auto py-8 my-8 flex flex-col items-center justify-around md:flex-row gap-8 bg-gray-100 rounded-md">
        <div className='max-w-md text-center md:text-left'>
          <h2 className="mb-6 md:mb-8 text-3xl md:text-5xl md:leading-tight">Books to freshen up your bookshelf</h2>
          <Link to={'/listed-books'} className="inline-block px-4 py-2 rounded-md text-white bg-green-600 hover:opacity-85">View The List</Link>
        </div>
        <figure className='max-w-80 '>
          <img src={BannerImg} alt="" className='w-full' />
        </figure>
      </div>
    </section>
  );
}
 
export default Banner 