import React, { useContext, useState } from "react";
import './Search.css'
import CartHeader from '../Screen/Cart/CartHeader'
import Images from '../../src/Images/image3.png';
import { SearchAllType } from "../services/ServiceSearch";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";


const SearchComponent = () => {

  const conText = useContext(AppContext)
  console.log(conText)
  const [list, setList] = useState([])
  const [searchInput, setSearchInput] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const liveSearch = (e) => {
    setSearchInput(e.target.value);
    setIsSearching(true);
    SearchAllType(e.target.value).then(res => {
      console.log(res.data, ">>>>>>>>>>>>>>")
      if (res.is_success) {
        setList(res.data)
      } else {
        setList([])
      }
      setIsSearching(false)
    }).catch((error) => {
      setList([])
      setIsSearching(false)
      alert("Server Error", error.message);
    })
  }



  return (
    <div>
      <CartHeader title="Search" />
      <div style={{ marginTop: 10, width: "100%", paddingLeft: 22 }}>
        <div class="form-group has-search " style={{ marginTop: 15, width: "98%" }}>
          <span class="fa fa-search form-control-feedback"></span>
          <input type="text" class="form-control" placeholder="Search"
            onChange={(e) => liveSearch(e)} />
        </div>
      </div>
      <div>
        {
          list.length > 0 ? (
            isSearching ? (
              <text style={{
                fontSize: 18,
                color: "grey",
                alignSelf: "center",
                marginTop: 40,
              }}>Searching...</text>
            ) : (
              <>
                {list && list.map((item) => {
                  //  console.log(item,">>>>***")
                  return <div style={{ display: 'flex', flexDirection: 'column', borderBottomWidth: '1px', borderBottomColor: '#ddd', borderBottomStyle: 'solid' }}>
                    <div>
                            <Link style={{color:"black" ,textDecoration:"none"}} to={
                       {
                        pathname: `/subcatagory/${item.id}`,
                        // search: b.id
                        }
                       }
                       key={item.id}>
                      <div className=" p-4 bd-highlight" style={{
                        backgroundColor: "white",
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        // justifyContent:'space-between',
                        alignItems: 'center'
                       }}>
                     
                        <div>
                         
                          <img
                            // src={item.image}
                            src={`${item.image}`}
                            style={{ height: 40, width: 50, }}
                          />
                        </div>
                        <div style={{ marginLeft: 30, }}>
                          <div>
                            <text>{item.name}</text>
                          </div>
                        </div>
                      </div>
                      </Link>
                
                    </div>
                   
                  </div>
                })}
              </>
            )) : null}
      </div>
    </div>
  );
};

export default SearchComponent;
