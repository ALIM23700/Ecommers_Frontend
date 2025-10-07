
import { Link, useNavigate } from "react-router-dom";
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
    <div className="mb-[-200px] sm:mb-0">
      <div
        className="min-h-screen bg-contain bg-no-repeat sm:bg-cover text-white"
        style={{ backgroundImage: `url(${alim})` }}
      >
        <div className="relative top-24 left-12 sm:top-48 sm:left-48">
          <h1 className="sm:text-4xl">Welcome to Alim e-store</h1>
          <p className="sm:text-2xl mt-5">Feel free to shopping here</p>
          <button
            onClick={handleGetStarted}
            className="bg-blue-500 mt-5 hover:bg-blue-600 transition-colors duration-300 px-6 py-3 rounded-lg font-semibold shadow-lg"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
