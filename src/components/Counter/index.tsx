import React, { useState, useEffect } from "react";
import { Props } from "../../models/DefaultProps";

interface CounterProps extends Props {
  seconds: number;
}

export const Counter: React.FC<CounterProps> = (props) => {
  const [time, setTime] = useState(props.seconds);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval: any;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="stopwatch">
      <div className="numbers">
        <span>{("0" + (Math.floor(time / 3600) % 60)).slice(-2)}:</span>
        <span>{("0" + (Math.floor(time / 60) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor(time % 60)).slice(-2)}</span>
      </div>

      <div className="buttons">
        {!running ? (
          <button onClick={() => setRunning(true)}>Start</button>
        ) : (
          <button onClick={() => setRunning(false)}>Stop</button>
        )}
      </div>
    </div>
  );
};
