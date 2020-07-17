import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./music-player.css";
import image from "../../public/image.png";

export default function MusicPlayer() {
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [seeking, setSeeking] = useState(false);
  const [url, setUrl] = useState(
    "https://soundcloud.com/barnesblvd/last-summer-full-album"
  );

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleSeekMouseDown = e => {
    setSeeking(true);
  };

  const handleSeekChange = e => {
    setPlayed(parseFloat(e.target.value));
    console.log(played);
  };

  const handleSeekMouseUp = e => {
    setSeeking(false);

    // ReactPlayer.seekTo(parseFloat(e.target.value));
  };
  const handlePlay = () => {
    console.log("onPlay");
    setPlaying(true);
  };
  const handlePause = () => {
    console.log("onPause");
    setPlaying(false);
  };

  const ref = player => {
    this.player = player;
  };

  const handleProgress = state => {
    console.log("onProgress", state);
    // We only want to update time slider if we are not currently seeking
    if (!seeking) {
      setPlayed(state.played);
    }
  };

  const handleDuration = duration => {
    console.log("onDuration", duration);
    setDuration(duration);
  };
  return (
    <>
      <div className="player-container">
        <div className="player-wrapper">
          <ReactPlayer
            ref={ref}
            className="react-player"
            style={{ display: "none" }}
            url={url}
            volume={1}
            playing={playing}
            onReady={() => console.log("onReady")}
            onStart={() => console.log("onStart")}
            onPlay={handlePlay}
            onPause={handlePause}
            onBuffer={() => console.log("onBuffer")}
            onSeek={e => console.log("onSeek", e)}
            onError={e => console.log("onError", e)}
            onProgress={handleProgress}
            onDuration={handleDuration}
          />
          <div className="album-art">
            <img src={image} alt={image} />
          </div>
          <div className="player">
            lofi chill list
            <input
              type="range"
              min={0}
              max={0.999999}
              step="any"
              value={played}
              onMouseDown={handleSeekMouseDown}
              onChange={handleSeekChange}
              onMouseUp={handleSeekMouseUp}
            />
            <div>
              <button>prev</button>
              <button onClick={handlePlayPause}>
                {playing ? "pause" : "play"}
              </button>
              <button>next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
