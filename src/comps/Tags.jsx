function Tags({tags, isSmall}) {
  return (  
    <div className={`flex gap-3 flex-wrap ${isSmall ? "text-sm" : ''}`}>
      {tags?.map(tag => 
        <span key={tag} className="inline-block text-green-500 bg-green-100 px-1.5 rounded-sm">#{tag}</span>
      )}
    </div>
  );
}

export default Tags;