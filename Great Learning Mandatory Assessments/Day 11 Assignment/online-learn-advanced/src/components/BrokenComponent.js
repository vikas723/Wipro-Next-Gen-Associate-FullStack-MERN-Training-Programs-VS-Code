import React from "react";

export default function BrokenComponent() {
  throw new Error("Crash!");
}
