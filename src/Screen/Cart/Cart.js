import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Data from '../SubCatagory/SubCat.json'
import Subcat from '../SubCatagory/SubCat.json'
import { Link } from 'react-router-dom'
import NumericInput from 'react-numeric-input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import CartHeader from './CartHeader'
import Card from 'react-bootstrap/Card';
import Header from '../../Layout/Header';
import HeaderAll from '../../Layout/HeaderAll';


export default function Cart() {
  const [count, setCount] = useState(1);
  const value = useParams();
  console.log("Value in subtrtrcat", value);
  let product = Data.Games.find((data) => data.id === value.cart)
  console.log(product);
  return (
    <div >
      {/* <CartHeader title="Cart" /> */}
      <div style={{border:"2px solid red"}}>
      <HeaderAll title="Cart" />
      </div>
      <div style={{ marginTop: '2%', marginRight: '2%', marginLeft: '2%' }}>
        <div>
          {/* <div style={{
              alignItems: 'center', justifyContent: 'center', display: 'flex',
              flex: 1,marginLeft:'1%',
              padding: 10,marginRight:12,
          }}>
              <span style={{
                  width: "20%",
                  justifyContent: "center",
              }}>
                  <text style={{
                      display: 'flex',
                      marginLeft: '1%', marginBottom: 15,fontStyle:'italic'
                  }}>* 18% GST will be applicable</text>
                  </span>
              <span style={{
                  justifyContent: "center",
                  flex: 1,
                  paddingLeft: 10,
                  marginLeft: 80
              }}>
                  <text style={{
                      display: "flex", marginBottom: 15, marginLeft: "-25%"
                  }}></text></span>
          <span style={{

              justifyContent: "flex-end",
                  alignItems: "center", 
          }}>
               
                  
              </span>
              </div> */}



          <div className="d-flex bd-highlight" style={{ backgroundColor: "#ddd" }}>
            <div className="p-2 flex-fill bd-highlight">

              <span style={{
                width: "5%",
                justifyContent: "center",
              }}>
                <img style={{
                  display: 'flex',
                  marginLeft: '1%', marginBottom: 15, height: 80
                }} src={product.image}></img>
              </span>
            </div>


            <div className="p-2 flex-fill bd-highlight">
              <div style={{ display: 'flex' }}>
                <text style={{
                  marginBottom: 9, fontSize: 17, marginTop: 0
                }}>{product.title}</text><br></br></div>
              <div style={{ marginTop: 1, marginLeft: '0%' }}>
                <div style={{ display: 'flex', border: '1px solid #BBC4C2', width: 101, borderRadius: 5 }}>
                  <button style={{ backgroundColor: '#BBC4C2', borderWidth: 0, borderRadius: 1, marginLeft: 0 }}
                    onClick={() => setCount(count - 1)}><FontAwesomeIcon icon={faMinus} /></button>
                  <text style={{ marginRight: 20, marginLeft: 17 }}> {count} </text>
                  <button style={{ backgroundColor: '#BBC4C2', borderWidth: 0, borderRadius: 3 }}
                    onClick={() => setCount(count + 1)}><FontAwesomeIcon icon={faPlus} /></button>
                </div>
              </div>

            </div>





            <div className="p-2 flex-fill bd-highlight">
              <div style={{ marginTop: 25, marginRight: 0 }}>

                <text >{count}* $ {product.price}</text>
              </div>
            </div>
          </div>



          <div className="d-flex bd-highlight" style={{ backgroundColor: "#ddd", marginTop: '3%' }}>
            <div className="p-2 flex-fill bd-highlight">
              <text style={{
                display: 'flex',
                marginLeft: '1%', marginBottom: 5, alignSelf: "center"
              }}> Sub Total: </text>
            </div>


            <div className="p-2 flex-fill bd-highlight">
              <div style={{ display: 'flex' }}>
                <text style={{
                  marginBottom: 15, fontSize: 17, marginTop: -5
                }}></text><br></br></div>
              <div style={{ marginTop: 10, marginLeft: '1%' }}>
                {/* <div style={{display:'flex',border:'1px solid #BBC4C2',width:101,borderRadius:5 }}>
                  <button style={{backgroundColor:'#BBC4C2',borderWidth:0,borderRadius:1,marginLeft:0}}
                  onClick={() => setCount(count - 1)}><FontAwesomeIcon icon={faMinus}  /></button>
                  <text style={{marginRight:20,marginLeft:18}}> {count} </text>
                  <button style={{backgroundColor:'#BBC4C2',borderWidth:0,borderRadius:3}}
                   onClick={() => setCount(count + 1)}><FontAwesomeIcon icon={faPlus}  /></button>
                  </div> */}
              </div>
            </div>


            <div className="p-2 flex-fill bd-highlight">
              <div >

                <text style={{ marginRight: -30, fontWeight: 'bold' }}>  $ {count * product.price}  </text>
              </div>
            </div>
          </div>
          <Card body style={{ justifyContent: "flex-start", borderWidth: 0, fontStyle: 'italic' }}>
            <text style={{
              display: 'flex',
              marginLeft: '1%', marginBottom: 15, fontStyle: 'italic'
            }}>* 18% GST will be applicable</text>
          </Card>
        </div>

        <div style={{ marginTop: '2%' }}>
          <Link to={`/EventDetails/${product.title}/${count * product.price}`}>
            <button style={{
              width: '40%', height: 35, borderWidth: 0, borderRadius: 5,
              backgroundColor: 'rgb(99, 195, 165)'
            }}>
              <text style={{ fontSize: 18, color: 'white' }}> NEXT </text>
            </button>
          </Link>
        </div>

      </div>

    </div>
  )
}




