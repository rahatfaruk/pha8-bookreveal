function Newsletter() {
  return (  
    <div className="bg-gray-200 p-8 my-8 text-center rounded-md">
      <h2 className="text-2xl md:text-3xl">Newsletter</h2>
      <p className="text-gray-500">Get notification for upcoming events and more! </p>

      <form className="flex justify-center mt-4">
        <input type="email" className="px-2 py-1" placeholder="example@mail.com" />
        <button type="submit" className="px-3 py-1 text-white bg-green-600 hover:opacity-85">Join</button>
      </form>
    </div>
  );
}

export default Newsletter;