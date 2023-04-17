import React, { useContext, useEffect } from "react";
import CartHeader from "../../Screen/Cart/CartHeader";
import { faArrowRight, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { WishlistCategory } from "../../services/WishlistCategoryService";
import { useState } from "react";
import Loader from "../Loader";
import AppContext from "../../context/AppContext";
import HeaderAll from "../../Layout/HeaderAll";

const WishList = () => {
  const context = useContext(AppContext) 
  const [wishListData, setWishListData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [id,setId] =useState(context.userData)
  
  useEffect(() => {
    setIsLoading(true)
    WishlistCategory(id)
      .then((response) => {
        console.log(response)
        setWishListData(response.data)
        setIsLoading(false)
      })
      .catch((err) => {
        alert("Warning", "Network error");
      })

  }, [])


  return (
    <>
 {   isLoading == true ? <div style={{height:'100vh', alignItems:'center', justifyContent:'center', display:'flex'}}><Loader/></div> : <div>
      {/* <CartHeader title="Wishlist" /> */}
    <HeaderAll
    all={true}
     title="Wishlist"/>

      {wishListData.map((item) => {
        return(
          <Link style={{ width: '100%',textDecoration:"none",color:"black" }}  to={
            {
            pathname:`/WishListCategory`,
            search: item.id
            
          }
          }>
        <div className="container-fluid mt-2">
         
          <div className="row p-2" style={{ borderBottomWidth: '1px', borderBottomColor: '#ddd', borderBottomStyle: 'solid' }} >
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <text>{item.name}</text>
              <div>
                <text className="badge bg-info" style={{ borderRadius: 50, marginRight: 10 }}>{item.total}</text>
                <FontAwesomeIcon icon={faArrowRight} size='10px' style={{
                  color: '#ddd'
                }} />
              </div>
            </div>
          </div>
          </div>
        </Link>
        )
      })}
    </div>
    }
    </>
  )
}

export default WishList;