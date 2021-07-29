import React from "react";

function ErrorMessage({ positionX, positionY, characterName }) {
  const messagePosition = {
    position: "absolute",
    left: `${positionX}px`,
    top: `${positionY}px`,
    backgroundColor: "red",
  };

  return <div style={messagePosition}>That's not {characterName}</div>;
}

export default ErrorMessage;
