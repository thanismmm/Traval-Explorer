import {
  FaPlane,
  FaHotel,
  FaMapMarkedAlt,
  FaSuitcaseRolling,
  FaConciergeBell,
} from "react-icons/fa";

const Services = () => {
  const travelServices = [
    {
      icon: FaPlane,
      title: "Flight Booking",
      description:
        "Book domestic and international flights easily with competitive fares and flexible scheduling options.",
    },
    {
      icon: FaHotel,
      title: "Hotel Reservations",
      description:
        "Find and book comfortable accommodations at top-rated hotels worldwide with exclusive deals.",
    },
    {
      icon: FaMapMarkedAlt,
      title: "Tour Packages",
      description:
        "Explore curated tour packages for popular destinations offering unforgettable travel experiences and memories.",
    },
    {
      icon: FaSuitcaseRolling,
      title: "Travel Planning",
      description:
        "Get expert assistance with personalized itineraries and hassle-free travel arrangements tailored for you.",
    },
    {
      icon: FaConciergeBell,
      title: "Customer Support",
      description:
        "Enjoy 24/7 customer support to resolve travel queries, cancellations, and special assistance requests.",
    },
  ];

  return (
    <div className="py-12 bg-gray-200">
      <div className="container px-4 mx-auto flex flex-col items-center">
        <h2 className="font-bold text-3xl mb-12 text-center">Our Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {travelServices.map((city, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105 duration-300 w-72"
            >
              <div className=" flex items-center justify-center py-5">
                <city.icon className="text-4xl" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-2">{city.title}</h3>
                <p className="text-gray-600">{city.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
