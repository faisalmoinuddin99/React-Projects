import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About Me"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container">
        <div className="container my-3">
          <TextForm heading="Enter the text to analyze below" mode={mode} />
        </div>
      </div>
    </>
  );
}

export default App;
