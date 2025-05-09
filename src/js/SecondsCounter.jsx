// src/js/SecondsCounter.jsx
import React from "react";

const SecondsCounter = ({ seconds }) => {
  const padded = seconds.toString().padStart(6, "0").split("");

  return (
    <div style={{
      display: "flex",
      background: "#000",
      color: "#fff",
      padding: "20px",
      justifyContent: "center",
      alignItems: "center",
      gap: "15px"
    }}>
      {padded.map((num, index) => (
        <div
          key={index}
          style={{
            background: "#000",
            border: "2px solid white",
            borderRadius: "10px",
            width: "40px",
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "40px",
            position: "relative"
          }}
        >
          {num}
          {index === 0 && (
            <i
              className="fas fa-clock"
              style={{
                position: "absolute",
                left: "-50px",
                fontSize: "40px"
              }}
            ></i>
          )}
        </div>
      ))}
    </div>
  );
};

export default SecondsCounter;
