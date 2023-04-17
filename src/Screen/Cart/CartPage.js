import React, { useContext, useEffect, useState } from 'react'
import context from 'react-bootstrap/esm/AccordionContext'
import AppContext from '../../context/AppContext'
import CartHeader from './CartHeader'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import CartItem from './CartItem'
import SubTotal from './SubTotal'
import images from '../../Images/image3.png'
import Images from '../../Images/image2.png'
import "./cardBody.css";
import { height } from '@mui/system'
import { getCart } from '../../services/APIServices'
import Loader from '../Loader'
import { Button } from 'react-bootstrap'


let items = [{
  id: "1",
  name: "Surfing",
  images: images,
  price: "25000"
},
{
  id: "2",
  name: "Carousel",
  images: Images,
  price: "25000"
}
]

export default function CartPage(props) {
  const conText = useContext(AppContext);

  const [count, setCount] = useState(1);
  const [CartData, setCartData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userData] = useState(conText.userData);


  
  useEffect(() => {
    setIsLoading(true)
    getCart(userData)
      .then((response) => {
        console.log(response, "CartData")
        setCartData(response?.data)
        conText?.IncreCounter(response?.data)
        setIsLoading(false)

      })

      .catch((err) => {
        alert("Warning", "Network error---");
      })

  }, [])

  //   console.log(subTotal);

  return (
    <>

      {/* {isLoading == true ? <div style={{ height: '100vh', alignItems: 'center', justifyContent: 'center', display: 'flex' }}><Loader /></div> 
      :  */}
      <div style={{ backgroundColor: "aliceblue" }}>

        <CartHeader title="Cart" />
        <div style={{ marginTop: '2%', marginRight: '2%', marginLeft: '2%' }}>
          <div>
            {CartData?.map((item) => {
              return (
                <>
                  <Link to={
                    {
                      pathname: `/subcatagory/${item.id}`,
                      //   search: a.id

                    }}
                    style={{ width: '100%',textDecoration:"none",color:"black" }}
                  >
                    <CartItem title={item.name} image={item.image} price={item.price} />
                  </Link>
                </>
              )
            }
            )}

            <Card body style={{ display: 'flex', marginTop: 10, justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <text style={{
                  fontStyle: 'italic',
                }}>Sub Total:</text>
                <text style={{
                  fontStyle: 'italic',
                }}>50000</text>
              </div>
            </Card>
          </div>
          <div style={{ marginTop: '2%' }}>
            <Link to={{
              pathname: `/detailevent`,

            }}

            //</div> to={`/EventDetails/${product.title}/${count* product.price}`}      
            >
              <button style={{
                width: '100%', height: 35, borderWidth: 0, borderRadius: 5,
                backgroundColor: 'rgb(99, 195, 165)', marginBottom: 20
              }}>
                <text style={{ fontSize: 18, color: 'white' }}> NEXT </text>
              </button>
            </Link>
          </div>
        </div>
      </div>
     {/* }  */}

    </>
  )
}


