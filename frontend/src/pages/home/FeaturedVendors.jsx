import VendorCard from "../../components/cards/VendorCard";

const vendors = [
  {
    name: "Royal Decorators",
    service: "Wedding Decoration",
    rating: 4.8,
  },
  {
    name: "TechSpark Events",
    service: "Tech Conferences",
    rating: 4.6,
  },
  {
    name: "Elite Caterers",
    service: "Food & Catering",
    rating: 4.9,
  },
];

const FeaturedVendors = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Vendors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vendors.map((vendor, index) => (
            <VendorCard key={index} vendor={vendor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVendors;
