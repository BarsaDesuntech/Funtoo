import React, { useContext, useEffect, useState } from "react";
import './Search.css'
import CartHeader from '../../Screen/Cart/CartHeader'
// import Images from '../../src/Images/image3.png';
// import { SearchAllType } from "../services/ServiceSearch";
import { Link, useNavigate } from "react-router-dom";
import Autocomplete from "react-google-autocomplete";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import AppContext from "../../context/AppContext";



const GoogleLocationComponent = () => {
  const navigate = useNavigate()
const context = useContext(AppContext)
  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState("");
  const [isSearching, setIsSearching] = useState(false);

const handelNav = (place) =>{
  context.getLocation(place)
  navigate('/detailevent')
}
  return (
    <div>
      <CartHeader title="Google Location" />
      <div style={{ marginTop: 10, width: "100%", paddingLeft: 22 }}>
        <div class="form-group has-search " style={{ marginTop: 15, width: "98%" }}>
          <div> 
            <Autocomplete
            apiKey={"AIzaSyC2Fs7x6pczpiXikw0sLRapWHNbl1Ys3k0"}
            onPlaceSelected={(place) =>  handelNav(place)}
            debounce={700}
            options={{
              types: ["(regions)"],
              componentRestrictions: { country: "in" },
            }}
            class="w-100 p-1 border"
          />
          </div> 
        </div>
      </div>
      <div>
      
      </div>
    </div>
  );
};

export default GoogleLocationComponent;
