import "../App.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navIndtoSo = () => {
    navigate("/api/v1/indent-to-so");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white">

      {/* Heading */}
      <h1 className="text-5xl font-extrabold mb-6 text-center">
        Transform Data !!
      </h1>

      {/* Card Section */}
      <div className="card bg-white p-8 rounded-xl shadow-xl w-full max-w-lg mx-auto flex flex-col items-center justify-center gap-4">
        {/* Button Section */}

        {/* Indent to Sales Order */}
        <button
          onClick={navIndtoSo}
          className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 focus:outline-none transition-colors duration-300"
        >
          Indent to Sales Order
        </button>

        {/* Indnet to Transfer Order */}
        {/* <button
          onClick={navIndtoSo}
          className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 focus:outline-none transition-colors duration-300"
        >
          Indnet to Transfer Order
        </button> */}
      </div>
    </div>
  );
};

export default Home;
