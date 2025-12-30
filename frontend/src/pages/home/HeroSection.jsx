import Button from "../../components/common/Button";
import heroBg from "../../assets/images/hero-bg.svg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <img
        src={heroBg}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />

      <div className="relative z-10 bg-transparent py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Plan Your Events Seamlessly
          </h1>

          <p className="text-lg md:text-xl mb-8 text-indigo-100">
            Discover vendors, book services, and manage events — all in one
            place.
          </p>

          <div className="flex justify-center gap-4">
            <Button text="Explore Events" />
            <Button text="Join as Vendor" variant="outline" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
