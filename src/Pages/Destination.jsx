const Destination = () => {
  const listDestination = [
    {
      image: "/galle.jpg",
      title: "Galle, Sri Lanka",
      description:
        "Discover Galle Fort, its historic charm, vibrant culture, and stunning ocean views.",
    },
    {
      image: "/bridge.jpg",
      title: "Nine Arch Bridge, Ella",
      description:
        "Experience Ella’s iconic Nine Arch Bridge surrounded by lush greenery and scenic beauty.",
    },
    {
      image: "/sigiriya.jpg",
      title: "Sigiriya, Sri Lanka",
      description:
        "Explore Sigiriya, the majestic Lion Rock, and its breathtaking natural surroundings.",
    },
    {
      image: "/ambulawa.jpg",
      title: "Ambulawa, Sri Lanka",
      description:
        "Visit Ambulawa for serene temples, unique biodiversity, and stunning panoramic views.",
    },
    {
      image: "/lotustower.jpg",
      title: "Colombo, Lotus Tower",
      description:
        "Marvel at Colombo’s Lotus Tower, a modern architectural wonder and vibrant landmark.",
    },
  ];
  return (
    <div className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto ">
        <h2 className="font-bold text-3xl items-center mb-12 text-center">
          Destinations Of Srilankan Place
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {listDestination.map((city, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-lg overflow-hidden cursor-pointer"
            >
              <img
                src={city.image}
                className="w-full object-cover md:h-48 transform transition hover:scale-105 duration-300 "
                alt={city.title}
              />
              <div className="p-4">
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

export default Destination;
