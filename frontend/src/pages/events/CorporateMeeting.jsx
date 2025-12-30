import EventCategory from "./EventCategory";

const CorporateMeeting = () => {
  const events = [
    { title: "Board Meeting", location: "Gurgaon", price: 12000 },
    { title: "Annual Conference", location: "Bangalore", price: 35000 },
    { title: "Product Launch", location: "Mumbai", price: 40000 },
  ];

  return (
    <EventCategory
      title="Corporate Meetings"
      description="Professional setups for meetings and business events."
      events={events}
    />
  );
};

export default CorporateMeeting;
