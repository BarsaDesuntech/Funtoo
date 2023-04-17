import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import images from '../../Images/image3.png'
import CartHeader from "../../Screen/Cart/CartHeader";
import { Link, useLocation } from 'react-router-dom';
import { Wishlist } from '../../services/WishlistCategoryService';
import Loader from '../Loader';

let items = [{
    id: "1",
    name: "Surfing",
    images: images,
    price: "25000"
},
{
    id: "2",
    name: "Carousel",
    images: images,
    price: "25000"
}
]
const WishListCategory = (props) => {
   const location = useLocation()
    const [count, setCount] = useState(1);
    const [num, setNum] = useState('')
    const [wishlist_id] = useState(location.search.split("?")[1] ?? "")
    const [wishListData, setWishListData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const conText = useContext(AppContext)

    console.log(wishlist_id);
 
    useEffect(() => {
        setIsLoading(true)
        Wishlist(wishlist_id)
          .then((response) => {
            setWishListData(response?.data)
            setIsLoading(false)
          })
          .catch((err) => {
            alert("Warning", "Network error");
          })
    
      }, [])


    return (
        <>
           { isLoading == true ? <div style={{height:'100vh', alignItems:'center', justifyContent:'center', display:'flex'}}><Loader/></div>:<div> <CartHeader title="Wishlist" />
            {wishListData.map((item) => {
               
                return <div style={{ flexDirection: 'column', }}>
                    <div>
                    <Link to={
                  {
                  pathname:`/subcatagory/${item.id}`,
                //   search: a.id
                  
                }} style={{ width: '100%',textDecoration:"none" ,color:"black"}}>
                <div className=" p-4 bd-highlight" style={{
                            backgroundColor: "white",
                            marginTop: 10,
                            display: 'flex',
                            flexDirection: 'row',
                            // justifyContent:'space-between',
                            alignItems: 'center',
                            borderBottomWidth: '1px', borderBottomColor: '#ddd', borderBottomStyle: 'solid'
                            
                        }}>
                            <div className="">
                                <img style={{height:'100px', width:'150px', resize:'block'}} src={item.image}></img>
                            </div>
                                <div >
                                    <text style={{marginLeft:15}}>{item.name}</text>
                                </div>

                            <div className="" style={{ position: 'absolute', right: 40 }}>

                                <text>
                                ₹{item.rent}
                                </text>

                            </div>
                        </div>
                        </Link>
                        
                    </div>
                </div>
            })}</div>}
        </>
    )
}
export default WishListCategory;
