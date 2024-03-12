import React from "react";
import './contact.css';
import lnk from './lnk.png';
import mail from './mail.png';

const Contact =() => {
    return( 
        <section className="contactpg">
            <div className="cnt">
                <h1 className="cnttitle">Contact</h1>
                <span className="cntdesc"> Form to reach me! </span>
                <form className="cntform">
                    <input type="text" className="cname" placeholder="Enter your name" />
                    <input type="eMail" className="cemail" placeholder="Share your email" />
                    <textarea className="cmsg" name="cmsg" rows={5} placeholder="Drop your message" />
                    <button type="submit" value="send" className="cntbtn">Submit</button>
                    <div className="Links">
                        <img src={lnk} alt="linkedin" className="imglink" />
                        <img src={mail} alt="email" className="imglink" />
                        
                    </div>
                </form>
            </div>
        </section>
);
}

export default Contact;