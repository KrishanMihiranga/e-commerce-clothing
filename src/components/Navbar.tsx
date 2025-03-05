import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="bg-black text-white uppercase py-2 font-semibold">
                <span>Shipping world wide</span>
            </div>
            <nav className="text-white p-4 bg-blue-900">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-xl font-bold">MyApp</Link>
                    <ul className="flex space-x-6">
                        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                        <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
                        <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
