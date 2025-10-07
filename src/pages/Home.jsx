import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import alim from "../assets/alimvai.jpg";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (user) {
      navigate("/product");
    } else {
      alert("Please login to access the page");
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-contain sm:bg-cover bg-center relative"
      style={{ backgroundImage: `url(${alim})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-8 lg:px-16 py-32 sm:py-48 items-start">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug">
          Welcome to Alim e-store
        </h1>
        <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-white">
          Feel free to shop here
        </p>
        <button
          onClick={handleGetStarted}
          className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold shadow-lg transition-colors duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
