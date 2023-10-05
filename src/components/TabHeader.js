import React, { useState } from "react";

import CallEndIcon from "@mui/icons-material/CallEnd";

export default function TabHeader() {
  const [activeTab, setActiveTab] = useState("liveTranscription");

  const [tabContents, setTabContents] = useState({
    liveTranscription: "",

    summary: "",
  });

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleContentChange = (event) => {
    const { name, value } = event.target;

    const currentTime = new Date().toLocaleString();

    setTabContents((prevContents) => ({
      ...prevContents,

      [name]: value,

      timestamp: value ? currentTime : "",
    }));
  };

  return (
    <div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              activeTab === "liveTranscription" ? "active" : ""
            }`}
            id="home-tab"
            onClick={() => handleTabClick("liveTranscription")}
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected={activeTab === "liveTranscription"}
          >
            Live Transcription
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "summary" ? "active" : ""}`}
            id="profile-tab"
            onClick={() => handleTabClick("summary")}
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected={activeTab === "summary"}
          >
            Summary
          </button>
        </li>
      </ul>

      <div className="tab-content">
        {tabContents.timestamp && (
          <div style={{ textAlign: "center" }}>{tabContents.timestamp}</div>
        )}

        {activeTab === "liveTranscription" && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {/* <div
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                flexGrow: "0",
                flexShrink: "0",
                flexBasis: "65px",
              }}
            >
              <img
                style={{ width: "60px", borderRadius: "50%" }}
                src="https://smart-suggest.azurewebsites.net/static/media/profile-img1.f9a024ef75f12e51f164.jpg"
                alt="profile"
              />

              <p
                style={{ margin: "4px", textAlign: "center", fontSize: "11px" }}
              >
                <b>Lisa Smith</b>
              </p>
            </div> */}

            <div>
              {/* <input
                style={{
                  minHeight: "59px",
                  resize: "vertical",
                  fontSize: "18px",
                  padding: "10px",
                  marginLeft: "10px",
                  width: "18vw",
                  borderRadius: "10px",
                  borderStyle: "solid",
                  borderColor: "#016488",
                }}
                type="text"
                name="liveTranscription"
                id="query"
                value={tabContents.liveTranscription}
                onChange={handleContentChange}
                placeholder="Enter Your query"
              /> */}

              <button
                style={{
                  backgroundColor: "red",
                  borderRadius: "10px",
                  width: "85px",
                  position: "absolute",
                  top: "117%",
                  left: "86%",
                  transform: "translateX(-50%)",
                  height: "40px",
                }}
              >
                <span style={{ color: "white" }}>
                  <CallEndIcon />
                </span>
                <b
                  style={{
                    fontSize: "13px",
                    color: "white",
                    marginLeft: "6px",
                  }}
                >
                  End
                </b>
              </button>
            </div>
          </div>
        )}

        {activeTab === "summary" && (
          <div className="tab-pane fade show active">
            <input
              type="text"
              style={{
                minHeight: "59px",
                resize: "vertical",
                fontSize: "18px",
                padding: "10px",
                width: "25vw",
                borderRadius: "10px",
                borderStyle: "solid",
                borderColor: "#016488",
              }}
              name="summary"
              value={tabContents.summary}
              onChange={handleContentChange}
              placeholder=""
            />
          </div>
        )}
      </div>
    </div>
  );
}
