function Tags({tags, isSmall}) {
  return (  
    <ul className={`flex gap-4 mb-2 ${isSmall ? "text-sm" : ''}`}>
      {tags?.map(tag => 
        <li key={tag} className="text-green-500 bg-green-100 px-1.5 rounded-sm">#{tag}</li>
      )}
    </ul>
  );
}

export default Tags;