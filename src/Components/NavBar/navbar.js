import React, { useState } from "react";
import './navbar.css';
import { Link } from "react-scroll";
import burgermenu from './burgermenu.png';


const Navbar = () => {
   const [showMenu, setshowMenu] = useState(false);

return(
    <nav className="navbar">
        <img src="./LogoU.png" alt="logo" className="logo" /> {/* For logo  */}
        <div className="desktopmenu"> {/* For Navbar menus */}
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-150} duration={500}
                     className="desktopmenulistItem">Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500}
                    className="desktopmenulistItem">Skills</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500}
                    className="desktopmenulistItem">Portfolio</Link>
        <Link activeClass="active" to="contactpg" spy={true} smooth={true} offset={-100} duration={500}
                    className="desktopmenulistItem">Contact Me</Link>
        </div>
        <button className="desktopmenubtn">
           Contact Me</button>

{/* For burger icon menu  */}

           <img src={burgermenu} alt="mobmenu" className="mobmenu" onClick={()=>setshowMenu(!showMenu)}/> 

     <div className="burgermenu" style={{display: showMenu?'flex':'none'}}> {/* For Navbar burger menus */}
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-150} duration={500}
                     className="listItem" onClick={()=>setshowMenu(false)}>Home</Link>

        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500}
                    className="listItem" onClick={()=>setshowMenu(false)}>Skills</Link>

        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500}
                    className="listItem" onClick={()=>setshowMenu(false)}>Portfolio</Link>

        <Link activeClass="active" to="contactpg" spy={true} smooth={true} offset={-100} duration={500}
                    className="listItem" onClick={()=>setshowMenu(false)}>Contact Me</Link>
       
        </div>

    </nav>

)};

export default Navbar;