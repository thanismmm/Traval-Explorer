const About = () => {
  return (
    <div>
      <div
        className="relative bg-cover h-96 bg-center"
        style={{ backgroundImage: "url('/beach.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h4 className="text-4xl md:text-6xl text-white font-bold mb-4 px-3">
            About Us
          </h4>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-6 gap-5 items-center">
          <div
            className="bg-cover h-96 bg-center rounded"
            style={{ backgroundImage: "url('/beach.jpg')" }}
          ></div>

          <div className="shadow-lg h-full p-3 flex flex-col justify-center">
            <div>
              <h4 className="font-bold mb-4">Our Vision</h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae perferendis sequi error, ullam beatae saepe atque
                officia soluta deleniti eius. Ad, alias?
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4"> Our Mision</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae perferendis sequi error, ullam beatae saepe atque
                officia soluta deleniti eius. Ad, alias?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
