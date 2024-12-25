// Home.jsx
import { useNavigate } from "react-router-dom";
import bgImage from '../assets/bg-1.webp';

const Home = () => {
  const navigate = useNavigate(); 

  const BgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
  };

  return (
    <div style={BgStyle} className="dark:bg-black dark:text-white duration-300">
      <div className="bg-white/70 dark:bg-black/80 duration-300 h-full flex items-center justify-center">
        <div className="container text-center space-y-5 max-w-xl p-8 bg-white/90 dark:bg-gray-800/90 shadow-lg rounded-lg">
          <p className="text-primary text-2xl font-medium">
            Welcome to the Student Management System
          </p>
          <h1 className="text-5xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Manage Student Data Easily
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Effortlessly manage student data with our user-friendly system. Add, view, and update student records seamlessly.
          </p>

          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => navigate('/students')}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 shadow-md">
              Student List
            </button>
            <button 
              onClick={() => navigate('/add-student')}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 shadow-md">
              Add Student
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
