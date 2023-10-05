import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { CustomSegmentLabelPosition } from "react-d3-speedometer";

const sections = [
  {
    text: "Very Negative",
  },
  {
    text: "Negative",
  },
  {
    text: "Neutral",
  },
  {
    text: "Positive",
  },
  {
    text: "Very Positive",
  },
];

const customSegmentLabels = sections?.map((section) => {
  return {
    text: section?.text,
    position: CustomSegmentLabelPosition.Inside,
    color: "white",
    fontSize: "8px",
  };  
});
const Chart = ({ NoofSegments, value }) => {
  return (
    <>
    <h3><b>Customer Intent</b></h3>
    
      <div className="">
        <center>
          <ReactSpeedometer
            width={300}
            height={150}
            needleHeightRatio={0.7}
            // fluidWidth={true}
            value={value}
            customSegmentStops={[0, 333, 666, 1000]}
            segmentColors={["#86CF6E", "#FF9E1C", "#E14848"]}
            currentValueText=" "
            customSegmentLabels={[
              {
                text: "Complaint",
                position: "INSIDE",
                color: "#FFFFFF",
                fontSize: "15px",
              },
              {
                text: "Query",
                position: "INSIDE",
                color: "#FFFFFF",
                fontSize: "15px",
              },
              {
                text: "Purchase",
                position: "INSIDE",
                color: "#FFFFFF",
                fontSize: "15px",
              },
            ]}
            ringWidth={70}
            needleTransitionDuration={3333}
            needleTransition="easeElastic"
            needleColor={"#000000"}
            textColor={"#d8dee9"}
            customSegmentStyles={[
              {
                fill: "#000000", // Needle color
                stroke: "#000000", // Needle border color
                strokeWidth: 50,   // Adjust the needle width here
              },
            ]}
          /> 
        </center>
      </div>
    </>
  );
};
export default Chart;

// ---------------------------------------------------
// START: Stories
// ------------------------------
