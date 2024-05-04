import React from "react";
import "./Toaster.css";

const Toaster = ({ setViewToaster,toasterMessage }) => {
  return (
    <div id="toaster">
      {/* <h1 className='toaster-msg l'>
            Thank you for Contacting Me ❤️
        </h1> */}
      <h1 className="toaster-msg l">
       {toasterMessage}
      </h1>
      <button className="toaster-btn" onClick={()=>{setViewToaster(false)}}>X</button>
    </div>
  );
};

export default Toaster;
