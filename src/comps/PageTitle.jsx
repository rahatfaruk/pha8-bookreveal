function PageTitle({title}) {
  return (  
    <header className="py-4 bg-gray-200 rounded-md">
      <h2 className="text-3xl md:text-4xl text-center">{title}</h2>
    </header>
  );
}

export default PageTitle;