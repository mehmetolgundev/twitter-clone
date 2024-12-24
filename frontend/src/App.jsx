import React,{useContext} from "react";
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AuthProvider, useAuth} from "./Components/Authentication/AuthProvider";
import Login from "./Components/Authentication/Login";
import Home from "./Components/Home";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import "./styles/style.css";
export default function App() {

  
  const ProtectedRoute=({children})=>{
    const {isLoggedIn} = useAuth();
    return isLoggedIn?children:<Navigate to="/login"/>
  }

  const LoginRoute=()=>{
    const {isLoggedIn} = useAuth();
    return isLoggedIn?<Navigate to="/home"/>:<Login/>
  }
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<LoginRoute/>}/>
      <Route path="/home" element={
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
      }/>
      <Route path="*" element={<Navigate to="/"/>}/>
        <Route path="/" element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
        }/>
      
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}