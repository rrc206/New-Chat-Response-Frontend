import React from "react";
import IntentCharts from "../components/IntentCharts";
import SentimentChart from "../components/SentimentChart";
import Chat from "../components/Chat";
import AISuggestion from "../components/AISuggestion";
import TopBanner from "../components/TopBanner";
import Timer from "../components/Timer";
import CustomerDetails from "../components/CustomerDetails";
import CustomerHistory from "../components/CustomerHistory";
import TabHeader from "../components/TabHeader";
import Summary from "../components/Summary";

import { post, get } from "../helper/apiHelper";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import soundwave from "../assets/images/soundwave.svg";
import LeftPanel from "../components/LeftPanel";

function Home() {
  const [loading, setLoading] = React.useState(false);
  const [chat, setChat] = React.useState(null);
  const [suggestion, setSuggestion] = React.useState(null);
  const [stntiment, setStntiment] = React.useState(null);

  const fetchAllChat = async () => {
    setLoading(true);
    const response = await get("/get-chat");
    setChat(response);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchAllChat();
  }, []);

  const sendChat = async (text, role, name) => {
    setLoading(true);
    const response = await post("/chat", {
      name: name,
      text: text,
      role: role,
    });
    if (response) {
      fetchAllChat();
    }
    setLoading(false);
  };

  React.useEffect(() => {
    getSuggestion(chat);
  }, [chat]);

  const getSuggestion = async () => {
    setLoading(true);
    let last_chat;
    if (chat) {
      const getAlluserChat = chat?.filter((val) => val?.role === "user");
      if (getAlluserChat?.length > 0)
        console.log(
          "------getAlluserChat",
          getAlluserChat[getAlluserChat?.length - 1]
        );
      last_chat = getAlluserChat[getAlluserChat?.length - 1];
      const response1 = await post("/suggestions", {
        message: last_chat?.text,
      });
      const response2 = await post("/suggestions", {
        message: last_chat?.text,
      });
      const response = [response1, response2];
      setSuggestion(response);
      // ----------------------Sentiment-----------------------------------
      const getSentiment = await post("/get-sentiment", {
        message: last_chat?.text,
      });
      console.log("getSentiment---------", getSentiment);
      setStntiment(getSentiment?.response);
      // -------------------------------------------------------------
    }
    setLoading(false);
  };

  return (
    <div 
      style={{
        display: "flex",
        // flexDirection: "row",
        // width: "100%",
        // height: "100%",
        // justifyContent: "start",
        
      }}
    >
      
      <div style={{ width: "8%", height: "100%" , overflow:'hidden'}}  >
        <LeftPanel></LeftPanel>
      </div>

      <div  style={{ width: "100%", display: "flex", flexDirection: "row" , overflow:'hidden', flex:'1'}}>

        <div className="bdr-hldr bdr-primary agnt-resp"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30vw",
            //justifyContent:'space-between'
            // padding:'1%',
            border:'none',
            overflow:'hidden',
            height:'auto'

          }}
        >
          <div style={{ height: '15vh' }}>
            <TopBanner></TopBanner>
          </div>
           <br></br> 
          <div
            style={{ display: "flex", flexDirection: "column", maxHeight: "60vh",maxWidth:"100%" }}
          >
            {/* <div style={{height:'auto', width:'auto'}}> */}
            <SentimentChart NoofSegments={5} stntiment={stntiment} />
            {/* </div> */}
            <br></br>
            <IntentCharts NoofSegments={5} value={700} />
          </div>
           <br></br> 
          <div style={{height:'40vh'}}>
            <CustomerDetails></CustomerDetails>
          </div>
        </div>
        {/* </div> */}

        {/* <div className="bdr-hldr bdr-primary " style={{ display: "flex", flexDirection: "column", width: "30vw", height: "100vh ", borderColor: "#006786" ,marginLeft:"1%"}} >
          <h2><img style={{ height: "35px" }} src={soundwave} alt="" /><span style={{ marginLeft: "8px" }}>AI Suggested Responses </span></h2>
          <AISuggestion
            suggestion={suggestion}
            sendChat={sendChat}
            reGenerate={getSuggestion}
            loading={loading}
          />
        </div> */}
        <div
          className="bdr-hldr bdr-primary agnt-resp"
          style={{ height: "auto", width: "33%", borderColor: "#006786", display: 'flex', flexDirection: 'column', marginLeft: "1%", overflow:'hidden',marginTop:"20px"}}
        >
          <h2><img style={{ height: "35px" }} src={soundwave} alt="" /><span style={{ marginLeft: "8px" }}>AI Suggested Responses </span></h2>

          <AISuggestion
            suggestion={suggestion}
            sendChat={sendChat}
            reGenerate={getSuggestion}
            loading={loading}
          />


        </div>

        <br></br>

        <div className="bdr-hldr bdr-primary" style={{ display: "flex", flexDirection: "column", width: "33%", height: "auto ", borderColor: "#006786", marginLeft: "1%", overflow:"hidden", marginTop:"20px" }}>
          <TabHeader />
          <div className="tab-content" id="myTabContent">
            {chat && <Chat chat={chat} sendChat={sendChat} loading={loading} />}
            <Summary />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
