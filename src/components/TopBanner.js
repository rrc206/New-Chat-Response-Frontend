import React from "react";
import { FaBell } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
  

export default function TopBanner() {
  return (
    <div className=" justify-content-between ">
      <div className="" style={{backgroundColor:"white",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
        <div style={{fontSize:'36px'}}><b>ServiceSage</b>
           
        </div> 
        <div style={{fontSize:'24px'}}>
             Welcome Back, <strong>James Lobo</strong>
           </div>
        {/* <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",paddingLeft:"710px"}}>
          <button style={{ height: "20px", backgroundColor: "white", borderColor: "white", borderWidth: "0px", marginRight: "20px" }}>
          <FaBell style={{ fontSize: "30px", marginTop: "20px" }} />
          </button>
          <button style={{ height: "20px", backgroundColor: "white", borderColor: "white", borderWidth: "0px" }}>
          <FaUser style={{ fontSize: "30px", marginTop: "20px" }} />
          </button>
        </div> */}
      </div>
    </div>
  );
}
