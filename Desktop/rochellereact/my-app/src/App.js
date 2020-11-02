import React from 'react'; //got this part from Youtube clip
import './App.css';
// eslint-disable-next-line
import footer from './footer';
// eslint-disable-next-line
import './footer.css';


function App() {
  return (
<div>
<div className="topNav">
<div className="logo">
  <p>imagine logo is here</p>
  <div className="logoText">
      <p>line 1</p>
      <p>line 2</p>
  </div>
</div>
<div className="navLinks">
  <p>link 1</p>
  <p>link 2</p>
  <p>link 3</p>
</div>
<div className="sign">
  <p>this is where the sign in is</p>
</div>
</div>
<div className="firstPage">
<div className="header">
  <p>HEADERSPACE</p>
</div>
<div className="stuff">
  <p>main stuff</p>
</div>
<div className="greyStuff">
  <p>photo?</p>
</div>



{/*My part SECTION4*/}

<div className="enrol">
    <div className="pic"></div>
    <div className="text">
        <h>What are you waiting for? </h>
        <h2>Start teaching Digital Technologies today</h2>
        <p>If you need more information, we are happy to answer any questions you may have.</p>
    </div>

    <div className="button1">ENQUIRE NOW</div>
        <div className="button2">SIGN UP</div>
</div>

)



{/*FOOTER SECTION*/}
<div className="footer">
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
</div>

</div>
  </div>
);
}


export default App;