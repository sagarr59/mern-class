import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Cards from "./components/Cards";
import Carousel from "./components/Carousel";

function App() {
  const [mode, setMode] = useState("light");
  const [text, setButtonText] = useState("Enable Dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setButtonText("Enable light");
      showAlert("success", "your dark mode has been enabled");
    } else {
      setMode("light");
      setButtonText("Enable dark");
      showAlert("success", "your light mode has been enabled");
    }
  };
  return (
    <>
      <Navbar mode={mode} text={text} toggleMode={toggleMode} />
      <Alert alert={alert} showAlert={showAlert} />
      <Carousel />
      <Cards />
    </>
  );
}

export default App;
