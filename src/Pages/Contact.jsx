import { MdMail, MdMap, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <div
        className="relative bg-cover h-96 bg-center"
        style={{ backgroundImage: "url('/beach.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h4 className="text-4xl md:text-6xl text-white font-bold mb-4 px-3">
            Contact Us
          </h4>
        </div>
      </div>

      <div className="contaner mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="mb-12 font-bold">Contacy us</h4>
            <div className="flex items-center mb-4 gap-2">
              <MdMail />
              <p>thanis7168t@gmail.com</p>
            </div>
            <div className="flex items-center mb-4 gap-2">
              <MdPhone />
              <p>+94 76 307 5074 </p>
            </div>
            <div className="flex items-center mb-4 gap-2">
              <MdMap />
              <p>Ampara, Sammanthurai, Srilanka</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="mb-12 font-bold">Get in Touch</h4>

            <form>
              <div className="mb-4">
                <label htmlFor="Name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-400 p-2 rounded"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Name" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-400 p-2 rounded"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Name" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  type="text-aria"
                  className="w-full border border-gray-400 p-2 rounded"
                  placeholder="Enter the Message"
                />
              </div>
              <button className="bg-blue-500 px-4 py-2 rounded text-white font-bold transform transition hover:bg-blue-400 duration-300">
                Sent Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
