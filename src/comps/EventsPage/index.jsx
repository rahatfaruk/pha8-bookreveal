import PageTitle from "../PageTitle";
import Event from "./Event";

const events = [
  {
    id: 1,
    title: "Book Fair",
    description: "Join us for an interactive session where we discuss the latest trends in literature, share book recommendations, and engage in lively conversations about our favorite reads.",
    img: "/img/taking-book.jpg",
    date: "2024-04-15",
    time: "18:00",
    location: "Batighar, Banglamotor, Dhaka"
  },
  {
    id: 2,
    title: "Library Meetup",
    description: "Come together with fellow book lovers at the library for a casual meetup. Share your recent discoveries, exchange book suggestions, and enjoy a cozy atmosphere surrounded by books.",
    img: "/img/library-meetup.jpg",
    date: "2024-04-20",
    time: "15:30",
    location: "Nil library, Agrabad, Chattogram"
  },
  {
    id: 3,
    title: "Computer Class",
    description: "Learn new skills and enhance your computer knowledge in this hands-on class. Whether you're a beginner or looking to expand your expertise, this session offers something for everyone.",
    img: "/img/computer-class.jpg",
    date: "2024-04-25",
    time: "10:00",
    location: "Dhaka college, Dhaka"
  }
];

function EventsPage() {
  return (  
    <section className="px-4">
      <div className="max-w-screen-xl mx-auto my-8">
        <PageTitle title={"Upcoming Events"} />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {events.map(event => <Event key={event.id} {...event} />)}
        </div>
      </div>
    </section>
  );
}

export default EventsPage;
