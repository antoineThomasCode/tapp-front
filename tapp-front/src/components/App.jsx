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
import UserProfile from "../pages/userProfil/UserProfile";
import SignUp from "../pages/SignUp/SignUp";
import {useSelector} from "react-redux"

function App() {
  const isLogged = useSelector((state) => state.login.isConnected)
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={ isLogged ? (<UserProfile />) : <Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Redirection />} />
        </Routes>
        <Footer />  
        <ToastContainer />
      </div>
  );
}

export default App;