import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Form from "./Components/Form";
import React, { useState } from "react";
import StudentForm from "./Components/StudentForm";

function App() {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
    <>
      <Navbar
        mode={mode}
        toggleMode={toggleMode}
        title="TextUtils"
        text={{
          hometext: "Home_Page",
          abouttext: "About_Us",
          contacttext: "Contact_Us",
        }}
      />
      <Textform title="TextForm area to analyze:" />
      <About />
      <Form />
      <StudentForm />
    </>
  );
}

export default App;
