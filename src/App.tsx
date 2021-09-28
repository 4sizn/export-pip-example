import "./styles.css";
import PipExport from "./utils/pip-export";
import React, { useRef } from "react";

export default function App() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const handleClickStart = () => {
    if (videoRef.current) {
      PipExport.start(videoRef.current)
        .then(() => {
          console.log("pip-export-running");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleClickEnd = () => {
    PipExport.end()
      .then(() => {
        console.log("pip-export-end");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <h1>PIP-exporter</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={handleClickStart}>실행</button>
      <button onClick={handleClickEnd}>종료</button>
      <video ref={videoRef}>
        <source
          id="mp4"
          src="http://media.w3.org/2010/05/sintel/trailer.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
