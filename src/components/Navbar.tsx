import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-black text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">MyApp</Link>
                <ul className="flex space-x-6">
                    <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                    <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
