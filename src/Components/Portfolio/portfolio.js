import React from "react";
import './portfolio.css';
import emp from './emp.png';
import chat from './chat.png';
import budget from './budget.png';
import { Button } from "react-scroll";

const Works = () =>{
    return(
       
        <section id="works">
            <div className="wbox">
                <span className="wtitle">My Portfolio</span>
                <br/> <span className="wdesc">Crafted with precision, my portfolio showcases expertise in website development using HTML, CSS, and ReactJS. 
                   With a Bachelor's in Computer Science and a pursuit of a Master's degree via distance learning, I bring a robust technical background to every project.</span>
               <div className="wimgs">
    {/* Emp Mngmt App using CRUD */}   <img src={emp} alt="emp" className="wrkimg" /> 
    {/* Chat App in React & Firebase App */}   <img src={chat} alt="" className="wrkimg" />
    {/* Budget Management App */}   <img src={budget} alt="" className="wrkimg" />
            <Button className="wbtn">see more</Button>
                </div>
            </div>
        </section>
    );
}

export default Works;