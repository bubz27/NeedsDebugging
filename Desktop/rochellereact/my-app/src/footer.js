import React from 'react';
import "./footer.css"; 


const footer = () => {
    return(
<div className="mainFooter">
        <div className="container">
            <div className="row">

            {/*column1*/}
            <div className="col">
                <h4>COMPANY</h4>
                <ul className="list-unstyled">
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Partners</li>
                </ul>
            </div>

            {/*column2*/}
            <div className="col">
                <h4>COURSES</h4>
                <ul classname="list-unstyled">
                    <li>Register</li>
                    <li>Login</li>
                    <li>Projects</li>
                    <li>Teachers</li>
                    <li>Parents</li>
                    <li>Resources</li>
                </ul>
            </div>

            {/*column3*/}
            <div className="col">
                <h4>SUPPORT</h4>
                <ul className="list-unstyled">
                    <li>FAQs</li>
                    <li>Helpdesk</li>
                    <li>Contact Us</li>   
                </ul>
            </div>

            {/*column4*/}
            <div className="col">
                <h4>LEGAL</h4>
                <ul className="list-unstyled">
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            {/*column5*/}
            <div className="col">
                <h4>LevelUp Works</h4>
                <p>LevelUp Works is an Auckland-based enterprise dedicated to developing 
                    game-based learning software to help teachers in response to the New Zealand 
                    Digital Technologies & Hangarau Matahiko.</p>
                    <br /> <link>alan@levelupworks.com</link>
                    <br /> <p>(021) 668 185</p>
            </div>
        </div>
        </div>
</div>


    )
}




export default footer;

