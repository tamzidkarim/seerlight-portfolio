import React from "react";
import "./toggleButton.css";

export default function App() {
  return (
    <>
      <input className="checkbox" id="checkbox" type="checkbox" />
      <div className="toggle">
        <div className="celestial" />
        <div className="scenery" />
      </div>
    </>
  );
}
