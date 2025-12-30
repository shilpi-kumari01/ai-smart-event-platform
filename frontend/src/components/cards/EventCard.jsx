import Button from "../common/Button";
import placeholder from "../../assets/images/placeholder.svg";

const EventCard = ({ title, description, image, link }) => {
  const imgSrc = image || placeholder;

  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-sky-500 transition">
      <img
        src={imgSrc}
        alt={title}
        className="h-44 w-full object-cover img-cover"
      />

      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>

        <p className="text-sm text-gray-400 line-clamp-2">{description}</p>

        <Button label="Explore Services" />
      </div>
    </div>
  );
};

export default EventCard;
