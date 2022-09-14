import {Routes, Route } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import '../components/App.scss'
import Header from "../components/Generic/Header";
import Footer from "../components/Generic/Footer";
import Login from '../pages/login/Login'
import Redirection from "../pages/NotFound/Redirection";
import Home from "../pages/homePage/Home"

import SignUp from "../pages/SignUp/SignUp";
import {useSelector} from "react-redux"
import Patron from "../pages/Patron/Patron";
import Tractorist from "../pages/tractorist/tractorist";
import Secretaire from "../pages/secretaire/secretaire";

function App() {
  const isLogged = useSelector((state) => state.login.isConnected)
  const isBoss = useSelector((state) => state.login.role) === 'patron'
  const isTractorist = useSelector((state) => state.login.role) === 'tractoriste'
  const isSecretaire = useSelector((state) => state.login.role) === 'secretaire'

  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/patron" element={ isBoss && isLogged ? (<Patron />) : <Login />} />
          <Route path="/tractoriste" element={ isTractorist && isLogged ? (<Tractorist />) : <Login />} />
          <Route path="/secretaire" element={ isSecretaire && isLogged ? (<Secretaire />) : <Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Redirection />} />
        </Routes>
        <Footer />  
        <ToastContainer />
      </div>
  );
}

export default App;