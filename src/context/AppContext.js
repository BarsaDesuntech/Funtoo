
import React, { Children } from 'react'
import { createContext } from 'react'

const AppContext = createContext({
   token :"",
   getToken: (data) => {},
   
   cartData : [],
   getNumber : (data) => {},

   totalCartQuantity: 0,
	setTotalCartQuantity: (data) => {},
   
   userData : [],
   getUserData : (data) => {},

   LoginData : [],
   getLoginData : (data) => {},

   showField : '',
   getValue : (data) => {},

   google_location : '',
   getLocation : (data) => {}

})


export default AppContext
