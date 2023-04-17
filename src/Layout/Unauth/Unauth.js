import React, { useEffect } from 'react'
import './Unauth.css'
import { useNavigate } from 'react-router-dom'

const Unauth = () => {
    const navigate = useNavigate()

        const navv = () => {
            navigate('/')
        }
    

    
    return (
        <div className='locked'>
            <h3 >This Page is Locked. You Have to Log in First.</h3>
            <br></br>
            <button onClick={navv()} id='asAa'> Click To Login </button>
        </div>
    )
}

export default Unauth