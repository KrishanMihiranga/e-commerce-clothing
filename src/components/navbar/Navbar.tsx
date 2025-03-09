
import { Link, useLocation } from "react-router-dom";
import AnimatedTextBar from "./AnimatedTextBar";
import logo from "../../../public/images/address-logo-dark.webp"
import '../../styles/navBar.css'
import { useEffect, useState } from "react";
const Navbar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    return (

        <nav >
            <AnimatedTextBar />
            <div className="flex items-center justify-between container-layout primary-text">
                <img
                    src={logo}
                    alt="Address Clothing logo"
                    title="Address Clothing Company"
                    className="w-[15rem]"
                />
                <ul className="flex gap-[1.9rem]">
                    <li>
                        <Link
                            to="/"
                            className={`hover:text-gray-500 ${activeLink === "/" ? "selected-nav" : ""}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/collections/mens"
                            className={`hover:text-gray-500 ${activeLink === "/collections/mens" ? "selected-nav" : ""}`}
                        >
                            Men
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/collections/women"
                            className={`hover:text-gray-500 ${activeLink === "/collections/women" ? "selected-nav" : ""}`}
                        >
                            Women
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/collections/accessories"
                            className={`hover:text-gray-500 ${activeLink === "/collections/accessories" ? "selected-nav" : ""}`}
                        >
                            Accessories
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/collections/gift-cards"
                            className={`hover:text-gray-500 ${activeLink === "/collections/gift-cards" ? "selected-nav" : ""}`}
                        >
                            Gift cards
                        </Link>
                    </li>
                </ul>

                <div className="flex gap-5">
                    <div className="relative border !px-[3rem] !py-[.7rem] text-center rounded-3xl">
                        <span className="absolute -top-[.8rem] right-0 bg-black rounded-full w-[2rem] h-[2rem] text-white text-sm flex flex-col items-center justify-center">0</span>
                        Bag
                    </div>
                    <div className="border text-center !px-[3rem] !py-[.7rem] rounded-3xl bg-black text-white">Login</div>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
