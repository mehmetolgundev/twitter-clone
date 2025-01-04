import React,{useContext} from "react";
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AuthProvider, useAuth} from "./Components/Authentication/AuthProvider";
import Welcome from "./Components/Welcome";
import Home from "./Components/Home";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import "./styles/style.css";
export default function App() {

  
  const ProtectedRoute=({children})=>{
    const {isLoggedIn} = useAuth();
    return isLoggedIn?children:<Welcome/>
  }

  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
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