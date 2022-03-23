import { useState } from "react";
import SidePanel from "./sidePanel";


const Header = ({weatherData}) => {
    const [ isOpen, setIsOpen ] = useState();
    const toggle = () => setIsOpen(!isOpen);

    return (
        <header className="header">
            <div className="logo">
                <p>The weather</p>
            </div>
            <SidePanel open={isOpen} weatherData={weatherData}/>
            <div className="menu-btn" onClick={toggle}>
                <div className={`menu-btn__burger ${isOpen ? "open" : ""}`}></div>
            </div>
        </header>
    );
}

export default Header;