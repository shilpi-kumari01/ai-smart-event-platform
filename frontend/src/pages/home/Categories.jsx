import weddingImg from "../../assets/images/wedding.svg";
import collegeImg from "../../assets/images/college-fest.svg";
import techImg from "../../assets/images/tech-conference.svg";
import corporateImg from "../../assets/images/corporate.svg";
import workshopImg from "../../assets/images/workshop.svg";

const categories = [
  { title: "Wedding", img: weddingImg },
  { title: "College Fest", img: collegeImg },
  { title: "Tech Conference", img: techImg },
  { title: "Corporate Meeting", img: corporateImg },
  { title: "Workshop & Seminar", img: workshopImg },
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Event Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-center cursor-pointer flex flex-col items-center"
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="h-28 w-full object-cover rounded-md mb-3"
              />
              <h3 className="font-semibold">{cat.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
