import React, { useRef, useState } from "react";
import GameStatus from "../assets/GameStatus";

function GameControl({ status, startGame, stopGame }) {
  const URL_TIMER = "http://localhost:4000/timer";
  const [time, setTime] = useState();
  const eventSource = useRef(null);

  function start() {
    startGame();
    eventSource.current = new EventSource(URL_TIMER);
    eventSource.current.onmessage = function (event) {
      setTime(event.data);
    };
  }

  function stop() {
    stopGame();
    eventSource.current.close();
  }

  function finish() {
    return "TODO:";
  }

  function getControls() {
    if (status === GameStatus.INACTIVE) {
      return (
        <div>
          <button onClick={start}>Start</button>
          <p>00:00:00</p>
        </div>
      );
    } else if (status === GameStatus.ACTIVE) {
      return (
        <div>
          <button onClick={stop}>Stop</button>
          <p>{time}</p>
        </div>
      );
    } else if (status === GameStatus.FINISHED) {
      return (
        <div>
          <button onClick={start}>Replay</button>
          <div>You finished the game in {finish()}</div>
        </div>
      );
    }
  }

  return <div>{getControls()}</div>;
}

export default GameControl;
