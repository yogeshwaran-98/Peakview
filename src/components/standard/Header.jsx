import { useEffect } from "react";

const Header = ({ title }) => {
  useEffect(() => {
    gsap.fromTo(
      ".title", // Targeting the title class
      { opacity: 0, y: -50 }, // Start from invisible and moved up
      {
        opacity: 1, // End with full opacity
        y: 0, // End at the normal position
        duration: 1, // Animation duration
        ease: "power4.out", // Ease for smooth animation
      }
    );
  }, []);
  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700 w-screen">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="title text-2xl font-semibold text-gray-100">{title}</h1>
      </div>
    </header>
  );
};
export default Header;
