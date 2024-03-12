import React from "react";
import './skills.css';
import web from './web.png'
import sf from './sf.jpeg';
const Skills = ()=>{
    return(
        <section id="skills">
            <span className="skiltitle">What I do</span>
            <span className="skildesc">I specialize in website development using user-friendly platforms like HTML, CSS, and ReactJS. 
             With a Bachelor of Computer Science degree, I have a strong technical foundation.
               Currently, I'm pursuing a Master's degree in Computer Science through a distance learning program at Anna University.
                <br/></span>
            <div className="skilbars">
                <div className="skilbar">
                    <img src={sf} alt="sf" className="skilbarimg"/>
                        <div className="skilbtxt">
                            <h2>SAP SuccessFactor</h2>
                            <p>7 Years of experience in SAPSuccessFactor</p>
                        </div>
                    </div>
                </div>
            <div className="skilbars">
                <div className="skilbar">
                    <img src={web} alt="web" className="skilbarimg"/>
                        <div className="skilbtxt">
                            <h2>Website Designing</h2>
                            <p>1 Year experience as a Website Designer</p>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Skills;