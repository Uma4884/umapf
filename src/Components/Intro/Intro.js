import React from "react";
import './intro.css';
import bg from './bg.png';
import hire from './hire.png';
import { Link } from "react-scroll";

const Intro =() => {
    return(
        <section id="intro" >
            <div className="introcontent">
                <span className="hel"> Hello, </span> <br />
                <span className="i">I'm <span className="name"> Umamaheswari Tamilselvan </span><br /> Frontend Developer!</span>
               <br />
                <p> I'm a skilled and passionate website developer with experience in <br />creating
                    visually appealing and user- friendly websites. </p>
                    <Link>
                    <button className="hirebtn">
                    <img src= {hire} alt="Hire" className="hire"/>
                    </button>
                    </Link>
            </div>
            <img src={bg} alt="ProfilePic" className="bg" />
        </section>
    );
}

export default Intro; 