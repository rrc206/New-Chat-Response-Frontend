import React from "react";
import "../App.css";
import soundwave from "../assets/images/soundwave.svg";
import send from "../assets/images/send.svg";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SwipeUpAltIcon from "@mui/icons-material/SwipeUpAlt";
import FindReplaceIcon from "@mui/icons-material/FindReplace";
import SwipeDownAltIcon from "@mui/icons-material/SwipeDownAlt";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import Female from "../assets/images/Female.svg"
import refresh from "../assets/images/refresh.png";

const AISuggestion = ({ suggestion, sendChat, reGenerate, loading }) => {
  return (
    <>
      {/* <div className="ai-title">
        <img src={soundwave} alt="" />
        <h3 className="mb-0">AI Suggested Responses</h3>
      </div> */}
      {loading ? (
        <div className="chat-hldr">
          <h5>Please Wait...</h5>
        </div>
      ) : (
        <>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              height: "5vh",
            }}
          >
            {/* <div style={{ height: "27px", width: "100px", border: "1px solid red", borderRadius: "15px", marginLeft: "10px", padding: "3px", overflow:'hidden' }}>
          <SwipeUpAltIcon style={{ marginTop: "", color: "#EE6B6B" }} /><span style={{ fontSize: "auto", color: "#EE6B6B" }}>She/Her</span>
        </div>
        <div style={{ height: "27px", width: "100px", background: "orange", border: "1px solid orange", borderRadius: "15px", marginLeft: "20px", padding: "3px" }}>
          <SwipeDownAltIcon style={{ marginTop: "", color: "white" }} /><span style={{ fontSize: "auto", color: "white" }}>He/Him</span>
        </div>
        <div style={{ height: "27px", width: "125px", border: "1px solid blue", borderRadius: "15px", marginLeft: "20px", padding: "3px" }}>
          <FindReplaceIcon style={{ marginTop: "", color: "blue" }} /><span style={{ fontSize: "auto", color: "blue" }}>They/Them</span>
        </div> */}
            {/* <img src={male}></img> */}

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "70%",
                left: "100",
                fontSize: '10px',
                marginBottom:"10px"
                // fontWeight:'200px'
              }}
            >
              <div
                className="genders"
                style={{
                  border: "1px solid #EE6B6B",
                  color: "#EE6B6B",
                  borderRadius: "5px",
                  paddingLeft: "5%",
                  paddingRight: "5%",
                  marginRight: "5%",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                {" "}
                She/Her
              </div>
              <div
                className="genders"
                style={{
                  border: "1px solid orange",
                  color: "orange",
                  borderRadius: "5px",
                  paddingLeft: "5%",
                  paddingRight: "5%",
                  marginRight: "5%",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                {" "}
                He/Him
              </div>
              <div
                className="genders"
                style={{
                  border: "1px solid blue",
                  color: "blue",
                  borderRadius: "5px",
                  paddingLeft: "5%",
                  paddingRight: "5%",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                {" "}
                They/Them
              </div>
            </div>
            <img src={refresh} style={{ height: "70%" }}></img>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
              height: "65vh",
              border: "3px solid #009AFF",
              borderRadius: "10px",
              padding: "2%"
            }}
          >
            {/* <div
            style={{ fontSize: "17px", color: "#009AFF", fontStyle: "italic" }}
          >
            <b></b>
          </div> */}



            {suggestion &&
              suggestion?.map((val, i) => {
                return (
                  <div className="respo-hldr" key={i}>
                    <div
                      className="respo-chat"
                      onClick={() => sendChat(val?.response, "admin", "John Doe")}
                      style={{ cursor: "pointer" }}
                    >
                      <p>{val?.response}</p>
                    </div>
                  </div>
                );
              })}

            <div style={{ alignSelf: "end" }}>
              <ThumbUpIcon style={{ fontSize: '25px' }}></ThumbUpIcon>
              <ThumbDownIcon style={{ fontSize: '25px' }}></ThumbDownIcon>
            </div>

          </div>
        </>
      )}




      <br></br>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* <div style={{ display: "flex", flexDirection: "column", borderColor: "#009AFF", borderStyle: "solid", borderRadius: "10px", height: "10vw",width:"27vw", marginTop: "10px" }}>
          <div style={{ fontSize: "17px", paddingLeft: "5px", color: "#009AFF",fontStyle:"italic", overflow:'inherit'}}><b>Positive response</b>
          <div>
            <ThumbUpIcon style={{ marginLeft: "300px", marginTop: "70px", position:'absolute', bottom:'0' }} />
            <ThumbDownIcon style={{ marginLeft: "327px", marginTop: "-21px" , position:'absolute', bottom:'0' }} />
          </div>
          </div>
          <div id="Positive"></div>
        </div> */}
        {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "35vh",
            border: "3px solid #009AFF",
            borderRadius: "10px",
            padding: "2%"
          }}
        >
          <div
            style={{ fontSize: "17px", color: "#009AFF", fontStyle: "italic" }}
          >
            <b></b>
          </div>
          <div style={{ alignSelf: "end" }}>
            <ThumbUpIcon style={{fontSize:'25px'}}></ThumbUpIcon>
            <ThumbDownIcon style={{fontSize:'25px'}}></ThumbDownIcon>
          </div>
        </div> */}
        <br></br>
        {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "35vh",
            border: "3px solid #64BDFD",
            borderRadius: "10px",
            padding: "2%",
          }}
        >
          <div
            style={{ fontSize: "17px", color: "#64BDFD", fontStyle: "italic" }}
          >
            <b>Negative Response</b>
          </div>
          <div style={{ alignSelf: "end" }}>
            <ThumbUpIcon style={{fontSize:'25px'}}></ThumbUpIcon>
            <ThumbDownIcon style={{fontSize:'25px'}}></ThumbDownIcon>
          </div>
        </div> */}
        {/* <br></br>
        <div style={{ display: "flex", flexDirection: "column", borderColor: "#64BDFD", borderStyle: "solid", borderRadius: "10px", height: "10vw",width:"27vw", marginTop: "10px" }}>
          <div style={{ fontSize: "17px", paddingLeft: "5px", color: "#64BDFD",fontStyle:"italic" }}><b>Neutral response</b></div>
          <div style={{}}>
            <ThumbUpIcon style={{ marginLeft: "300px", marginTop: "71px" }} />
            <ThumbDownIcon style={{ marginLeft: "327px", marginTop: "-22px" }} />
          </div>
          <div id="Neutral"></div>
        </div> */}
        <br></br>
        {/* <br></br> */}

        <div style={{ height: "30vh", paddingTop: "5%", fontSize: "13px", display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: "17px" }}>
            <LocalOfferIcon
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "50%",
                border: "3px solid black",
                fontSize: "15px",
              }}
            />
            <b style={{ marginLeft: "11px" }}>Products and Offers</b>
          </span>

          <br></br>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <ViewHeadlineIcon />
              <div>
                <b style={{}}>Atlas travel premium Insurance</b>
              </div>
            </div>
            <div
              style={{
                marginLeft: "50px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <AttachMoneyIcon />
              <span style={{ marginLeft: "4px" }}>234.00</span>
            </div>
            <button
              style={{
                width: "100px",
                height: "20px",
                marginLeft: "31px",
                backgroundColor: "#3ACEBE",
                border: "1px white solid",
                color: "white",
                borderRadius: "6px",
              }}
            >
              Suggest
            </button>
          </div>


          {/* <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:'1%'}}>
        <div style={{width:'33%'}}><ViewHeadlineIcon />Atlas travel premium Insurance</div>
        <div style={{width:'33%'}}>Hi</div>
        <div style={{width:'33%'}}>Hi</div>
        </div> */}
          {/* <br></br> */}

          {/* <span style={{}}>
            <ViewHeadlineIcon />
            <b style={{ marginLeft: "8px" }}>
              Atlas travel Insurance
              <span style={{ marginLeft: "41px" }}>
                <AttachMoneyIcon />
                <span style={{ marginLeft: "4px" }}>160.00</span>
              </span>
            </b>

            <button
              style={{
                width: "30%",
                marginLeft: "31px",
                backgroundColor: "#3ACEBE",
                border: "1px white solid",
                color: "white",
                borderRadius: "6px",
              }}
            >
              Suggest
            </button>
          </span> */}
          <div
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <ViewHeadlineIcon />
              <div>
                <b style={{}}>Atlas travel Insurance</b>
              </div>
            </div>
            <div
              style={{
                marginLeft: "50px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <AttachMoneyIcon />
              <span style={{ marginLeft: "4px" }}>160.00</span>
            </div>
            <button
              style={{
                width: "100px",
                height: "20px",
                marginLeft: "31px",
                backgroundColor: "#3ACEBE",
                border: "1px white solid",
                color: "white",
                borderRadius: "6px",
              }}
            >
              Suggest
            </button>
          </div>
        </div>
      </div>

      {/* <button
        className="chat-end-btn"
        onClick={() => {
          reGenerate();
        }}
      >
        <img src={send} alt="End Call" /> Regenerate
      </button> */}
      {/* <div className="msg-box-container">
        <div className="ai-title">
          <img src={soundwave} alt="" />
          <h3 className="mb-0">AI Suggested Policys</h3>
        </div>
        <div>
          <table className="table table-borderless ai-suggest w-100">
            <tbody>
              <tr>
                <td>
                  <img src={award} alt="" />
                </td>
                <td>32.6%</td>
                <td>₹ 1,234.00</td>
                <td>
                  <button>Suggest</button>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={award} alt="" />
                </td>
                <td>32.6%</td>
                <td>₹ 1,234.00</td>
                <td>
                  <button>Suggest</button>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={award} alt="" />
                </td>
                <td>32.6%</td>
                <td>₹ 1,234.00</td>
                <td>
                  <button>Suggest</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
    </>
  );
};

export default AISuggestion;
