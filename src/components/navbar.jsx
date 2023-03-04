import {FaUser, FaFileAlt, FaInfoCircle} from 'react-icons/fa';
import React from "react";
import {useNavigate} from "react-router";

const Navbar = () => {
    let navigate = useNavigate()
    const goToPortfolio = () => {
        navigate("/home")
    }
    const goToProjects = () => {
        navigate("/projects")
    }
    const goToContact = () => {
        navigate("/contact")
    }
    return (
        <div className="fixed top-0 h-16 w-screen flex bg-gray-900 flex-row justify-center shadow-lg gap-8 xl:gap-32">
            <NavBarIcon icon={<FaUser size="28" />} text="About" destination={goToPortfolio}/>
            <NavBarIcon icon={<FaFileAlt size="28" />} text="Projects" destination={goToProjects}/>
            <NavBarIcon icon={<FaInfoCircle size="28" />} text="Contact" destination={goToContact}/>
        </div>
    );
};

const NavBarIcon = ({ icon, text, destination }) => (
    <a onClick={destination}>
        <div className="navbar-icon group">
            {icon}
            <span class="navbar-tooltip xl:group-hover:scale-100">
                {text}
            </span>
        </div>
    </a>
);
export default Navbar;