<>
<LeftPanel style={{width:'10%'}}></LeftPanel>
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" , width:"90vw", height:"100vh"}}>

      <div className="  " style={{ display: "flex", flexDirection: "column",justifyContent:'space-between', position: "relative", maxWidth:"50%" , overflow:'hidden'}}>
        <div style={{ position: "fixed", zIndex: 10 }}>
          <TopBanner />
        </div>
        <div className="container-fluid r-panel px-5" style={{ position: "relative", zIndex: 1, marginTop: "40px" }}>
          <div className="d-flex justify-content-between gap-3 w-100 mb-3" style={{ paddingLeft: "100px", position: "relative" }}>
            <div className="bdr-hldr bdr-primary w-40">
                <TabHeader />
                <div className="tab-content" id="myTabContent">
                  {chat && <Chat chat={chat} sendChat={sendChat} loading={loading} />}
                  <Summary />
                </div>
              </div>
            
            <div className="bdr-hldr bdr-primary w-30 agnt-resp">
              <h2>Agent Responses</h2>
            {/* <AISuggestion
                suggestion={suggestion}
                sendChat={sendChat}
                reGenerate={getSuggestion}
                loading={loading}
              /> *
            {/* </div> */}
            <div style={{ display: "flex", flexDirection: "column" , justifyContent:'space-between'}}>
              <SentimentChart NoofSegments={5} stntiment={stntiment} />
              <IntentCharts NoofSegments={5} value={700} />
            </div>
          </div>
        </div>

        <div>
          <CustomerDetails />
        </div>

      </div>

      * Module 2

      <div className="bdr-hldr bdr-primary w-33 agnt-resp " style={{height:"100vh",borderColor:"#006786", width:"30%", display:'flex',flexDirection:'column',justifyContent:'space-between'}} >
        <h2><img style={{ height: "35px" }} src={soundwave} alt="" /><span style={{ marginLeft: "8px" }}>AI Suggested Responses </span></h2>
        <AISuggestion
          suggestion={suggestion}
          sendChat={sendChat}
          reGenerate={getSuggestion}
          loading={loading}
        />
      </div>
      
      

       {/* Module 3 */}

       <div className="bdr-hldr bdr-primary w-33 " style={{height:"86% ",borderColor:"#006786", width:'30%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <TabHeader />
        <div className="tab-content" id="myTabContent">
          {chat && <Chat chat={chat} sendChat={sendChat} loading={loading} />}
          <Summary />
        </div>
      </div> 
      
</div>

    </div>
    </>