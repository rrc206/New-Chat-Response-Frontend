import Frontimg from "../../images/Front-background.png"
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"; 
function Front(){
    const [selected,setselected] = useState(false);
return(
    <div style={{backgroundImage:`url(${Frontimg})`,fontFamily:'serif', height: '100vh', width: '100vw', backgroundPosition: 'center', backgroundSize: 'cover', color:'white', padding:'30px'}}>
     <div style={{fontSize:'25px',paddingBottom:'10px'}}>ServiceSage</div>
     <div style={{fontSize:'55px',paddingTop:'10px'}}>Welcome to ServiceSage</div>
     <div style={{fontSize:'25px',paddingBottom:'10px'}}>The next Generation Smart assistant</div>
     <form>
     <div style={{fontSize:'25px',paddingTop:'10px'}}>Please choose the use case</div>
     <div style={{fontSize:'20px',paddingBottom:'10px',fontWeight:'bold', color: 'black', width: ' 60%',display: 'flex', flexDirection: 'row', gap: '5px'}}>
        {/* <Link to='/Home'></Link */}
        {/* <button style={{backgroundColor:'white',borderRadius: '5px', width: '25%'}} >{selected ? (<Link to='/Home' style={{textDecoration: 'none'}}>Mortgage</Link>):(Insurance)}</button> */}
        <button style={{backgroundColor:'white',borderRadius: '5px', width: '25%'}} ><Link to='/Home' style={{textDecoration: 'none'}}>Insurance</Link></button>
        <button style={{backgroundColor:'white',borderRadius: '5px', width: '25%'}}>Mortgage</button>
        <button style={{backgroundColor:'white',borderRadius: '5px', width:'30%'}}>General Enquiry</button>

     </div>
     <div style={{fontSize:'25px',paddingTop:'10px'}}>Please choose the use case language</div>
     <div style={{fontSize:'20px',paddingBottom:'10px'}}><select
    style={{
      width: '350px',
      height: '40px',
      padding: '8px', // Adjust the padding as needed
      border: 'none', // Remove the default border
      borderRadius: '8px', // Apply the same border radius as the container
      outline: 'none', // Remove the outline on focus
      
    }}
    required
  >
    <option value="" onClick={() => setSelected(false)}>Select an option</option>
    <option value="option1" onClick={() => setSelected(true)}>Option 1</option>
    <option value="option2" onClick={() => setSelected(true)}>Option 2</option>
    <option value="option3" onClick={() => setSelected(true)}>Option 3</option>
  </select></div>
     </form>
     {/* <div style={{fontSize:'25px',padding:'10px'}}><button style={{backgroundColor:'white',borderRadius: '5px', width: '10%'}}>Next</button></div> */}
</div>


)
}

export default Front;