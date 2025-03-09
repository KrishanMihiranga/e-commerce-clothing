import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div className="flex flex-col items-center justify-center min-h-[85vh] text-center">
            <h1 className="text-[20rem] font-bold text-red-500">404</h1>
            <p className="text-2xl !mt-2">Oops! Page Not Found</p>

            <Link to="/" className="!mt-4 !px-6 !py-3 bg-[#000] text-white rounded-lg">
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
