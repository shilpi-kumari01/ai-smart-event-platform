import EventCategory from "./EventCategory";

const Wedding = () => {
  const events = [
    { title: "Luxury Wedding", location: "Jaipur", price: 150000 },
    { title: "Beach Wedding", location: "Goa", price: 200000 },
    { title: "Destination Wedding", location: "Udaipur", price: 250000 },
  ];

  return (
    <EventCategory
      title="Wedding Events"
      description="Make your wedding unforgettable with premium services."
      events={events}
    />
  );
};

export default Wedding;
