
import { Link } from "react-router-dom";
import AnimatedTextBar from "./AnimatedTextBar";
import logo from "../../../public/images/address-logo-dark.webp"

const Navbar = () => {

    return (

        <nav>
            <AnimatedTextBar />
            <div>
                <img
                    src={logo}
                    alt="Address Clothing logo"
                    title="Address Clothing Company"
                />
            </div>
            {/* <div className="flex justify-between items-center container">
                    <Link to="/" className="font-bold text-xl">MyApp</Link>
                    <ul className="flex space-x-6">
                        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                        <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
                        <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
                    </ul>
                </div> */}
        </nav>

    );
};

export default Navbar;
