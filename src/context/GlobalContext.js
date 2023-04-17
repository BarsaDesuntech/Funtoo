import React from "react";
import AppContext from "./AppContext";

export default class State extends React.Component {
  constructor(props) {
    super(props);



    this.getNumber = (data) => {
      this.setState(() => ({
        cartData: data,
      }));
      console.log("propsdataNumber-->", data);
    }
    this.getToken = (data) => {
      this.setState(() => ({
        token: data,
      }));

      console.log("propsdatatoken-->", data);
    };


    this.setTotalCartQuantity = (data) => { 
      this.setState(() => ({ 
        totalCartQuantity: data, 
      }));
    }
    
    this.getUserData = (...data) => {
      this.setState(() => ({
        userData: data,
      }));

      console.log("propsdataUser-->", data);
    };

    this.getLoginData = (...data) => {
      this.setState(() => ({
        LoginData: data,
      }));

     
    };
    this.getLocation = (...data) => {
      this.setState(() => ({
        google_location: data,
      }));

     
    };

    
    this.getValue = (data) => {
      this.setState(() => ({
        showField: data,
      }));

    };

    this.state = {
      cartData: [],
      getNumber: this.getNumber,

      token: "",
      getToken: this.getToken,

      userData:localStorage.getItem("id"),
      getUserData: this.getUserData,


      totalCartQuantity: props.cartQuantity,
      setTotalCartQuantity: this.setTotalCartQuantity,

      LoginData:[],
      getLoginData:this.getLoginData,

      showField:'',
      getValue:this.getValue,

      google_location:'',
      getLocation:this.getLocation,
    };
  }

  render = () => {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  };
}