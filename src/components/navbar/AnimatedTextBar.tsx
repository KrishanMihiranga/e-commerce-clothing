import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const messages = [
  "Address Clothing Company",
  "Free Delivery Island Wide!",
  "Fast Exchanges.",
];
const navLinks = [
  { label: 'Homepage', href: '/' },
  { label: 'journal', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/' },
  { label: 'Store Locator', href: '/' },
]


const AnimatedTextBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);



  return (
    <div className="flex justify-between items-center bg-black overflow-hidden text-white container-layout primary-text">
      <span key={currentIndex} className="animate__animated animate__fadeInUp">
        {messages[currentIndex]}
      </span>
      <ul className="flex gap-[1.5rem]">
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <Link to={href} className="text-white hover:text-gray-300">
              {label}
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default AnimatedTextBar;
