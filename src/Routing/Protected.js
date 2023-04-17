import React, { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Routing from './Routing';


const Protected = () => {
    const navigate = useNavigate()
    const hndelNav = () => {
        navigate('/')
    }




    const isAuth = window.localStorage.getItem('token')
    return isAuth ?
    <Outlet /> 
    :
        <div className='locked'>
            <h4 >WE'RE SORRY, YOUR REQUEST IS UNAUTHORIZED</h4><br></br>
            <h3 style={{fontSize:"15px"}}>You Have to Log in First</h3>
            <br></br>
            <button onClick={hndelNav} id='asAa'> Login </button>
        </div>
   

};

export default Protected;