import React from "react";
import Welcome from "./components/Welcome";
import MultipleChoice from "./components/MultipleChoice";

export default function App() {
  let isUnknown = localStorage.getItem("username") ? false : true;
  if (isUnknown) {
    return <Welcome />;
  } else {
    return (
        <MultipleChoice/>
    );
  }
}
