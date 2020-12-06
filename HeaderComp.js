import React, { useState } from "react";
import AddEntry from "./AddEntry";

const container = {
  display: "flex",
  backgroundColor: "coral",
  height: "60px",
  color: "white",
  alignItems: "center",
  justifyContent: "space-between",
  paddingRight: "40px",
  paddingLeft: "40px",
};
const containerWrapper = {
  fontSize: "25px",
  textTransform: "uppercase",
  fontWeight: "bold",
};
const containerButton = {
  width: "40px",
  height: "40px",
  outline: "none",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  background: "lightgreen",
  color: "black",
  fontWeight: "bold",
  fontSize: "30px",
};

export const HeaderComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const clickEffect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={container}>
      <div style={containerWrapper}>Our Todo-Task App</div>
      <button onClick={clickEffect} style={containerButton}>
        +
      </button>
      <AddEntry isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
