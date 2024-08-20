import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import Cards from './components/Cards'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home'

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log('API Key:', apiKey);

  const [mode, setMode] = useState('light')
  const [text, setButtonText] = useState('Enable Dark')
  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setButtonText('Enable light')
      showAlert('success', 'your dark mode has been enabled')
    }
    else {
      setMode('light')
      setButtonText('Enable dark')
      showAlert('success', 'your light mode has been enabled')
    }
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} text={text} toggleMode={toggleMode} />
        <Alert alert={alert} showAlert={showAlert} />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/blogs' element={<Cards apiKey={apiKey} />} />

        </Routes>
      </Router>
    </>
  )
}

export default App