import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Home from "./components/Home";
import Cards from "./components/Cards";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs"; // Import the new component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogState from "./context/blogs/BlogState";
import Footer from "./components/Footer";
import Form from "./components/Reduce";
import CartItems from "./components/CartItems";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log("API Key:", apiKey);

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
      <BlogState apiKey={apiKey}>
        <Router>
          <Navbar mode={mode} text={text} toggleMode={toggleMode} />
          <Alert alert={alert} showAlert={showAlert} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Cards apiKey={apiKey} />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} /> {/* Add new route */}
            <Route path="/reduce" element={<Form />} />
            <Route path="/cartitems" element={<CartItems />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </Router>
      </BlogState>
    </>
  );
}

export default App;
