import React from "react";
import Welcome from "./components/Welcome";

export default function App() {
  let isUnknown = localStorage.getItem("username") ? false : true;
  let name = localStorage.getItem("username");
  if (isUnknown) {
    return <Welcome />;
  } else {
    return <h1> welocme {name} </h1>;
  }
}
