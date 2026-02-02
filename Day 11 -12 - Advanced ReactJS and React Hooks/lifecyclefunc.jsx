import React, { useEffect } from "react";

function Example() {
  useEffect(() => {
    console.log("Mounted");

    return () => {
      console.log("Unmounted");
    };
  }, []);

  return <h2>Hello</h2>;
}
