import EventCategory from "./EventCategory";

const WorkshopSeminar = () => {
  const events = [
    { title: "Coding Workshop", location: "Chennai", price: 10000 },
    { title: "Skill Seminar", location: "Kolkata", price: 8000 },
    { title: "Career Guidance", location: "Delhi", price: 9000 },
  ];

  return (
    <EventCategory
      title="Workshops & Seminars"
      description="Organize learning-focused workshops and seminars."
      events={events}
    />
  );
};

export default WorkshopSeminar;
