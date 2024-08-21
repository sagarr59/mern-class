import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Home from "./components/Home";
import Cards from "./components/Cards";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log("API Key:", apiKey);

  // Set default mode to dark
  const [mode, setMode] = useState("dark");
  const [text, setButtonText] = useState("Enable Light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setButtonText("Enable Light");
      showAlert("success", "Dark mode has been enabled");
    } else {
      setMode("light");
      setButtonText("Enable Dark");
      showAlert("success", "Light mode has been enabled");
    }
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} text={text} toggleMode={toggleMode} />
        <Alert alert={alert} showAlert={showAlert} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Cards apiKey={apiKey} />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
