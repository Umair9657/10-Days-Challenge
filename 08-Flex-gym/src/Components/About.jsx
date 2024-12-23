import React from "react";
import { useNavigate } from "react-router-dom";
import GymImage2 from "../assets/banner.jpg";
import GymImage3 from "../assets/about1.jpg";
import GymImage4 from "../assets/abou2.jpg";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="py-14 dark:bg-black bg-gray-800 text-white duration-300">
      <div className="container space-y-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          <div className="flex justify-center">
            <img
              src={GymImage2}
              alt="Banner"
              className="sm:scale-110 max-h-[400px] rounded-lg"
            />
          </div>
          <div className="sm:pl-12 space-y-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="text-primary/70 text-6xl font-bold">01</div>
              <div>
                <p className="text-primary text-xl">Flex Fitness</p>
                <h1 className="text-3xl sm:text-4xl font-bold">About Us</h1>
              </div>
            </div>
            <p className="leading-7 tracking-wide">
              Flex GYM is a state-of-the-art facility offering top-notch equipment and professional trainers. Our mission is to promote health and wellness through personalized programs and a strong sense of community.
            </p>
            <p>
              We believe in creating a supportive environment where everyone can achieve their fitness goals.
            </p>
            <p className="leading-7 tracking-wide">
              "Take the first step towards a healthier, stronger, and more confident you. Join Flex GYM today and be part of a community that motivates and inspires. Your fitness journey starts here!"
            </p>
            <button
              onClick={() => navigate('/contact')}
             className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-600">
              Contact Us
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          
          <div className="flex justify-center">
            <img
              src={GymImage3}
              alt="Banner"
              className="sm:scale-60 max-h-[250px] rounded-lg"
            />
          </div>
          
          <div className="sm:pl-12 space-y-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="text-primary/70 text-6xl font-bold">02</div>
              <div>
                <p className="text-primary text-xl">Join the Movement</p>
                <h1 className="text-3xl sm:text-4xl font-bold">Why Choose Us?</h1>
              </div>
            </div>
            <p className="leading-7 tracking-wide">
              At Flex GYM, we prioritize your fitness journey by providing a welcoming atmosphere, cutting-edge equipment, and expert guidance.
            </p>
            <p>
              Experience the difference with our tailored programs, supportive community, and a commitment to your health.
            </p>
            <p className="leading-7 tracking-wide">
              "Join us and redefine your limits. Together, we achieve more."
            </p>
          </div>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          <div className="flex justify-center">
            <img
              src={GymImage4}
              alt="Banner"
              className="sm:scale-100 max-h-[380px] rounded-lg"
            />
          </div>
          <div className="sm:pl-12 space-y-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="text-primary/70 text-6xl font-bold">03</div>
              <div>
                <p className="text-primary text-xl">Unleash Your Potential</p>
                <h1 className="text-3xl sm:text-4xl font-bold">Be Your Best Self</h1>
              </div>
            </div>
            <p className="leading-7 tracking-wide">
              "Every day is a chance to become better, stronger, and healthier. At Flex GYM, we provide the tools and support you need to conquer your goals."
            </p>
            <p>
              Push past your limits, and you'll discover a version of yourself you never thought possible.
            </p>
            <p className="leading-7 tracking-wide">
              "Step into a world of motivation and determination. Together, we'll build a future full of energy, confidence, and success."
            </p>
            <button
              onClick={() => navigate('/services')}
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-600"
            >
              Join Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
