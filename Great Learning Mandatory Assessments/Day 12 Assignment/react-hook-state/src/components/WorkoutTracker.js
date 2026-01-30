import React from "react";
import useTimer from "../hooks/useTimer";

export default function WorkoutTracker() {
  const seconds = useTimer();

  return (
    <div>
      <h3>Workout Timer: {seconds}s</h3>
    </div>
  );
}
