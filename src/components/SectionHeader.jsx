import {FaChevronRight} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const NavigationHeader = ({ title }) => {
    const navigate = useNavigate();
    return (
        <nav className="flex items-center px-3 py-4 lg:p-3 bg-gray-800 w-full z-10 top-0 text-gray-100 fixed z-50">
            <p className="flex items-center">
                <a href="#" onClick={() => navigate('/')}>
                    <span className="text-2xl lg:text-xl mr-2">Home</span>
                </a>
                <FaChevronRight className="text-3xl text-white px-2"></FaChevronRight>
            </p>
            <span
                className=" lg:visible text-xl font-thin text-recursive">{title}</span>
        </nav>
    )
}

export default NavigationHeader;