import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p className="text-sm">2024 Flex Gym Website. All rights reserved.</p>
      <div className="mt-2">
        <span className="mr-2">Follow us on:</span>
        <a 
          href="https://www.linkedin.com/in/umair-ansari1" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline mx-2"
        >
          Linkdin
        </a>
        <a 
          href="https://www.instagram.com/umair_ansari_17/profilecard/?igsh=MTdyN282ejJjNGxoeg==" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-pink-500 hover:underline mx-2"
        >
          Instagram
        </a>
        <a 
          href="https://www.facebook.com/share/18DjDcJwhv/?mibextid=qi2Omg" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-400 hover:underline mx-2"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
