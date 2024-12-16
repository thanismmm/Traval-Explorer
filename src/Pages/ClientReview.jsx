const ClientReview = () => {
  const clientFeedback = [
    {
      img: "/user.jpg",
      name: "Alice Johnson",
      city: "New York, USA",
      review:
        "Amazing service! Everything was well-organized and hassle-free. Highly recommend this travel agency.",
    },
    {
      img: "/user.jpg",
      name: "Rajesh Kumar",
      city: "Mumbai, India",
      review:
        "Fantastic experience! Great support and attention to detail. Will book again for my next trip.",
    },
    {
      img: "/user.jpg",
      name: "Sofia Martinez",
      city: "Barcelona, Spain",
      review:
        "The tour package exceeded my expectations. Beautiful destinations and excellent customer service!",
    },
    {
      img: "/user.jpg",
      name: "Liam Smith",
      city: "Sydney, Australia",
      review:
        "A seamless travel experience with great accommodations and itinerary planning. Highly satisfied!",
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto flex flex-col items-center justify-center">
        <h2 className="font-bold text-3xl items-center mb-12 text-center">
          Explorer Review
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {clientFeedback.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105 duration-300 w-72"
            >
              <img
                src={person.img}
                className="w-full object-contain h-32 md:h-32 transform transition hover:scale-105 duration-300 "
                alt={person.name}
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-2">{person.name}</h3>
                <p className="text-gray-700 mb-2">{person.city}</p>
                <p className="text-gray-500 italic">`{person.review}`</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
