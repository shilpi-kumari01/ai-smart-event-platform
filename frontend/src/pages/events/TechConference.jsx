import EventCategory from "./EventCategory";

const TechConference = () => {
  const events = [
    { title: "AI Conference", location: "Hyderabad", price: 30000 },
    { title: "Web Dev Summit", location: "Pune", price: 25000 },
    { title: "Startup Meetup", location: "Noida", price: 20000 },
  ];

  return (
    <EventCategory
      title="Tech Conferences"
      description="Host professional and impactful technology conferences."
      events={events}
    />
  );
};

export default TechConference;
