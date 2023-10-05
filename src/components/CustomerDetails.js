import React from "react";
import profileImg1 from "../assets/images/profile-img1.jpg";
import mail from "../assets/images/mail.svg";
import phone from "../assets/images/phone.svg";
import SwipeUpAltIcon from '@mui/icons-material/SwipeUpAlt';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Female from "../assets/images/Female.svg"
import Salesforce from "../assets/images/SalesforceBlue.svg"

export default function CustomerDetails() {
  return (
    // <div className="d-flex justify-content-between cust-dtls-hldr bg-hldr">
    //   <div className="desc-hldr">
    //     <h3><b>Customer Details</b></h3>
    //     <p className="cust-name-txt">Lisa Smith</p>
    //     <p className="cust-name-email d-flex">
    //       <span><b style={{fontSize:"18px"}}>Age :</b><span style={{color:" var(--teri-color)",fontWeight:"650",marginLeft:"6px"}}>43 Years</span></span>
    //     </p>
    //     <p className="cust-name-ph d-flex">
    //     <span><b style={{fontSize:"18px"}}>Occupation :</b><span style={{color:" var(--teri-color)",fontWeight:"650",marginLeft:"6px"}}>HR</span></span>
    //     </p>
    //     <p className="cust-name-ph d-flex">
    //     <span><b style={{fontSize:"17px"}}>Company Name :</b><span style={{color:" var(--teri-color)",fontWeight:"650",marginLeft:"6px",fontSize:"24px"}}>Promopilot</span></span>
    //     </p>
    //     <p className="cust-name-ph d-flex">
    //     <span><b style={{fontSize:"17px"}}>Current Holdings :
    //     </b></span>
    //     </p>
    //     <ul style={{listStyleType:"disc"}}>
    //       <li>Checking Account</li>
    //       <li>Platinum Visa Credit Card</li>
    //     </ul>
    //   </div>
    //   <div className="img-hldr">
    //     <img src={profileImg1} alt="Customer image" />
    //     <div style={{height:"27px",width:"100px",border:"1px solid red",borderRadius:"15px",marginLeft:"7px",marginTop:"10px",padding:"3px"}}>
    //       <SwipeUpAltIcon style={{marginTop:"-5px",color:"#EE6B6B"}}/>
    //       <span style={{fontSize:"15px",color:"#EE6B6B"}}>She/Her</span>

    //       <span>
    //         <button style={{padding:"6px",paddingTop:"10px",paddingBottom:"10px" , marginLeft:"-22px",width:"153px",backgroundColor:"white",border:"1px solid #CCCCCC",color:"black",borderRadius:"8px",marginTop:"190px",fontSize:"14px"}}>
    //       <img style={{height:"25px",width:"41px",border:"none"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAgCAYAAACGhPFEAAAABHNCSVQICAgIfAhkiAAABA5JREFUWEfVWE1SGkEUfg3oNt4guBAqK/EE4gnEEwgHEOQEwROAeIDACcQTCCcQVilxIZ4g7p2Zzvd1DwLjkJlBSEhXUVTPvPf6e/+vR0nUun46FSVlUTorWgogf8VvKEr1xXG6Uv82iRKx7vdqqcDmuCBpucX7bMShLXF3rqS+T2VEms97knk7h4Il7Io+LxRTQ9FeT2r57meVCAfdHpch+Eds4QqWd3ZOJOMURGvyLVfU0EpF6rlhbPkBwo+grYXvQbeXUCjDJMorU5Gv4srJqsA/gm6PCXjq1oS4E5FPEFZHknKOJYVcMfmiaagJcgjecO+W5csi6JunItxL0Nuy+vBIPeiRAOhxBxqfbwviORwVqeY6030Q9INf1rYQt6pL9aBFYIug22O9hWhnkJQ6kYuD/v8Fmklaze0HQfeh1vF2W1ufBUA/XaLsNGOAHoHmMAYdSUjLFZf+z2KVdGeg2X7TbwRcjgTD2IpVGvUdsgYVSdUgsxgpNx7BwIK288L9rHLoF+RoAz8Ue+/SDEeie+KpIkDUsPdBA5SonuHjcyHIFDJcl80zFwZImyGrBSVbeIf5BPK4NPhEv0IW9jhLeRPwsDqgvZt3mF3UaZgeFnSwC2p9ZQArIRP/KRCHo+xQmMIh2uuI6xUlnX7ABFgBiIa4bgl7TIDyDPos9kfYcxbpGv4U8wUytAZIGgWhqOUa+yz230E3sLLR4FwBLwwl6msQuJKwLsg26oHZg8XJ6KqSZMyBo/cDebC7A5COjVUFS9JCDqydhkcIyBwsUMp4hlY8RPYrGKmPfd8ANe9gAAtuAEXhnYwFSpl2HJ5fIwh4pDZBNwx8KnbIgnhuCxYDnXEfZmtjjVvfkjgQbqYMJIlvYRz8Tg9L07oePYYwQvhQ4Slo4z0TLxxl9/yQMk0E62MlM4nYHv8yxIsLQ4sCYDPAlPGzQ7+RrRmTVIDPLd38c6UQSpqx/yIeLgwm1s1CTKtXnx9KgneWnB28I99UJj3Bs238L64KQa+/C9LiDkDGu0SE4Fr2COFazWc3BRq3FOO9bAJE0aRKn8lFvmeTYtu7oAk/VJlazoQLQMfugtGW2BTFHGAL2nZCJsWXTZ25ulzEsEqVOdnNy7DN5eaxhObAm/e/WpxPWFHs0qhWKdRxxG8YoNnskfQGvj71Bmg4xSTiwu6IDQj4S+Mpuqe7W37/ZhITefh3j+bPrGQyWQw3KFsYctjBVlbEDFWBjusPZHP3vph4DdnyL0zzUla9pXPwquUbdorEhxwuJzNMatmgQvFAk+sm8U19hFgNDjtJDLqUNj7oZMBHmACLn7XoMtTJQFOKrTL8hSQrYlXjpuLttjYFOH5Mh6nMb34ZDO8ex01MaPwFmsBaYiFEyG8yqasQxR9r3gAAAABJRU5ErkJggg=="></img>
    //       <span style={{marginLeft:"4px"}}>View More</span><span style={{marginLeft:"4px"}}><ArrowCircleRightIcon/></span></button>
    //       </span>
          
    //      </div>
    //   </div>
    // </div>

    <div style={{lineHeight:'3'}}>
      <div style={{fontSize:'18px'}}>
        <b>Customer Details</b>
      </div>
      {/* <br></br> */}
      <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between',lineHeight:'2'}}>
        <div>
          <div style={{fontSize:'22px', color:'#007F7F', width:'90%'}}><strong>Shane Smith</strong></div>
          {/* <br></br> */}
          <div style={{ fontSize:'14px', justifyContent:'space-between',lineHeight:'1.5'}}>
            Age :<span style={{ color:'#007F7F'}}> 43 Years</span>
            <br></br>
            Occupation :<span style={{ color:'#007F7F'}}> HR</span>
            <br></br>
            Company Name :<span style={{ color:'#007F7F'}}> PromoPilot</span>
          </div>
        
        <div style={{ fontSize:'14px',justifyContent:'space-between',lineHeight:'1.5'}}>
          <strong>Current Holdings</strong>
          <ul style={{ fontSize:'12px'}}>
            <li>{">"} Checking Account</li>
            <li>{">"} Platinum Visa Credit Card</li>
          </ul>
        </div>
        </div>

        <div style={{display:'flex', flexDirection:'column',  width:'30%'}}>
        <img src={profileImg1} alt="Customer image" style={{width:'80%',height:'50%'}}/>
        <img src={Female} alt="gender-female" style={{height:'15%' , alignSelf:'center',paddingTop:'5px'}}></img>
        <div style={{border:'1px solid #D1D1D1', borderRadius:'5px', marginTop:'20px', display:'flex', flexDirection:'row',justifyContent:'space-evenly',placeItems:'center'}}><img src={Salesforce} alt="Salesforce"></img><span>View more<ArrowCircleRightIcon/></span></div>

        </div>
      </div>
    </div>
  );
}
