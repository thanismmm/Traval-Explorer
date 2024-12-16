const Gallery = () => {
  const images = [
    {
      image: "/galle.jpg",
    },
    {
      image: "/bridge.jpg",
    },
    {
      image: "/sigiriya.jpg",
    },
    {
      image: "/ambulawa.jpg",
    },
    {
      image: "/lotustower.jpg",
    },
  ];
  return (
    <div>
      <div
        className="relative bg-cover h-96 bg-center"
        style={{ backgroundImage: "url('/beach.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h4 className="text-4xl md:text-6xl text-white font-bold mb-4 px-3">
            Gallery
          </h4>
        </div>
      </div>
      <div className="p-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.map((img, index) => (
            <div
              key={index}
              className=" rounded-md shadow-lg overflow-hidden cursor-pointer"
            >
              <img
                src={img.image}
                alt=""
                className="w-full object-cover md:h-48 transform transition hover:scale-105 duration-300 "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
