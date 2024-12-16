import ClientReview from "./ClientReview";
import Destination from "./Destination";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <div
        className="relative bg-cover h-screen bg-center"
        style={{ backgroundImage: "url('/beach.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4 px-3">
            Explore the World With Us
          </h1>
          <p className="text-lg md:text-2xl text-white mb-8">
            Explore the amazing Places at exclusive deals
          </p>
          <button className="border text-white px-6 py-2 rounded-full hover:bg-blue-500 text-lg md:text-xl transform transition duration-300 hover:scale-105">
            Get Start
          </button>
        </div>
      </div>
      <Destination />
      <Services />
      <ClientReview />
    </>
  );
};

export default Home;
