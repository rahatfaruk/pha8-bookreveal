import HeroUserImg from '../assets/user.png';


function Hero() {
  return (  
    <section className='bg-indigo-50'>
      <div className="max-w-screen-xl mx-auto px-4 pt-8 md:pt-16 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* left */}
        <div className="space-y-4 max-w-lg text-center md:text-left">
          <h2 className="text-3xl md:text-5xl md:leading-tight">One Step Closer To Your Dream Job</h2>
          <p className="md:text-lg text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <button className="px-4 py-2 rounded-md text-white bg-gradient-to-br from-indigo-400 to-purple-600 hover:opacity-85">Get Started</button>
        </div>
        {/* right */}
        <div className='max-w-lg'>
          <img src={HeroUserImg} alt="" className='w-full' />
        </div>
      </div>
    </section>
  );
}

export default Hero;