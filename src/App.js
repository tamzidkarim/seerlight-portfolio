import React, { useState } from "react";
import ToggleButton from "./components/toggleButton";
import Cloud from "./components/Cloud";
import MusicPlayer from "./components/MusicPlayer";
import "./styles.css";
import DragTheme from "./components/DragTheme";
import DayNight from "./components/DayNight";
import Stars from "./components/Stars";

export default function App() {
  const [name, setName] = useState("dark");

  return (
    <div data-mode={name} className="App">
      <Stars />
      <div
        onClick={() => {
          name === "normal" ? setName("dark") : setName("normal");
        }}
      >
        <ToggleButton />
      </div>
      <Cloud />
      <MusicPlayer />
      <DragTheme />
      <DayNight />
    </div>
  );
}
