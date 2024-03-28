

function Event({title, description, img, date, time, location}) {
  return (  
    <div className="border-2 p-4 space-y-2 border-gray-300 shadow-md rounded-lg">
      <figure className="mb-4">
        <img src={img} className="w-full rounded-lg" alt={title} />
      </figure>
      <h3 className="text-2xl">{title}</h3>
      <p className="text-gray-500">{description}</p>
      <p className="text-gray-500 border-t pt-2 border-dashed">Location: {location}</p>
      <p className="text-gray-500">Time: {date} at {time}</p>
    </div>
  );
}

export default Event;