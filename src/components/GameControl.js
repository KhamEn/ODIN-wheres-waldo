import React, { useRef, useState } from "react";
import Timer from "easytimer.js";
import GameStatus from "../assets/GameStatus";

function GameControl({ status, startGame, stopGame }) {
  const [time, setTime] = useState();
  const timer = useRef(new Timer());
  const interval = useRef(null);

  function startTimer() {
    timer.current.start();
    startGame();
    interval.current = setInterval(() => {
      setTime(timer.current.getTimeValues().toString());
    });
  }

  function stopTimer() {
    timer.current.stop();
    clearInterval(interval.current);
    stopGame();
  }

  function finishTimer() {
    timer.current.pause();
    clearInterval(interval.current);

    return timer.current.getTimeValues().toString();
  }

  function getControls() {
    if (status === GameStatus.INACTIVE) {
      return (
        <div>
          <button onClick={startTimer}>Start</button>
        </div>
      );
    } else if (status === GameStatus.ACTIVE) {
      return (
        <div>
          <button onClick={stopTimer}>Stop</button>
          <p>{time}</p>
        </div>
      );
    } else if (status === GameStatus.FINISHED) {
      return <div>You finished the game in {finishTimer()}</div>;
    }
  }

  return <div>{getControls()}</div>;
}

export default GameControl;
