import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Routing from "./Routing/Routing";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "./context/GlobalContext";
import Registration from "./Layout/Registration/Registration";
import { Navigate, Route, Router, Routes, useNavigate, BrowserRouter, Outlet } from "react-router-dom";
import Unauth from "./Layout/Unauth/Unauth";
import Protected from "./Routing/Protected";
import AppContext from "./context/AppContext";



function App() {
  const context = useContext(AppContext)
  const [userData, setCount] = useState(null);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const isAuth = window.localStorage.getItem('token')

  // const checkUserToken = () => {
  //   if (isAuth == null || isAuth === 'undefined') {
  //     setIsLoggedIn(false);
  //   } else {
  //     setIsLoggedIn(true);
  //   }

  // }
  // useEffect(() => {
  //   checkUserToken();
  // }, [isLoggedIn]);

  return (
    <GlobalContext dataUser={userData}>
      {/* <BrowserRouter> */}
        <div className="App">
          <Routing /> 

        </div>
      {/* </BrowserRouter> */}
    </GlobalContext>

  );



}

export default App;
