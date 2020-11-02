//basic setup of a JSX file using a functional compenent.

import React from 'react'; //importing from the Reach library.
import './firstPage.css'; //importing the css file.

function firstPage() { //declaring function compenent.
    return (            //returning stuff to screen.
     /*parent div*/   
     <div>            
<div className="square">
    <p>firstPage</p>

</div>
        </div>
    );                  //ending return brackets.
}                       //end of function.

export default firstPage; //exporting main component