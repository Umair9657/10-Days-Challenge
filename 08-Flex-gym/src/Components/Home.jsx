import React from 'react';
import { useNavigate } from 'react-router-dom';
import GymImage1 from "../assets/home.jpg";

const BgStyle = {
  backgroundImage: `url(${GymImage1})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

function Home() {
  const navigate = useNavigate();

  return (
    <div style={BgStyle} className="dark:bg-black dark:text-white duration-300">
      <div className="bg-white/70 dark:bg-black/80 duration-300">
        <div className="container min-h-[620px] flex items-center">
          <div className="w-full md:w-[550px] mx-auto text-center space-y-5">
            <p className="text-primary text-2xl">
              Start Your Fitness Journey
            </p>
            <h1 className="text-5xl md:text-7xl font-bold">
              Your Fitness Journey Begins!
            </h1>
            <p>
              “The body achieves what the mind believes.”
            </p>
            <button
              onClick={() => navigate('/about')}
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-600"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
