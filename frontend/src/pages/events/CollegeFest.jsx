import EventCategory from "./EventCategory";

const CollegeFest = () => {
  const events = [
    { title: "Cultural Fest", location: "Delhi", price: 15000 },
    { title: "DJ Night", location: "Mumbai", price: 20000 },
    { title: "Annual Day", location: "Bangalore", price: 18000 },
  ];

  return (
    <EventCategory
      title="College Fest Events"
      description="Plan energetic and memorable college festivals effortlessly."
      events={events}
    />
  );
};

export default CollegeFest;
