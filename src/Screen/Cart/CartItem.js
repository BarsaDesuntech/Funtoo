import React, { useContext, useState } from 'react'
import AppContext from '../../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
//import CartPage from './CartPage';
import Header from './CartHeader';
import context from 'react-bootstrap/esm/AccordionContext';
import Gamedetails from '../GameDetails/Gamedetails';
import CartPage from './CartPage';
import SubTotal from './SubTotal';
import './cardBody.css'

export default function CartItem(props) {
  const [count, setCount] = useState(1);
  const [num, setNum] = useState('')
  const conText = useContext(AppContext)


  const countPlus = (count) => {
    setCount((prevState) => prevState + 1)
  }
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      {count == 0 ? <div></div> :
        <div>
          <div className=" p-4 bd-highlight" style={{
            backgroundColor: "white",
            marginTop: 10,
            display: 'flex',
            flexDirection: 'row',
            // justifyContent:'space-between',
            alignItems: 'center'
          }}>
            <div className="">
              <img className='img-fluid img-thumbnail' style={{width:"150px",height:"100px", resize:'block'}} src={props.image}></img>
            </div>
            <div className="">
              <div>
                <text>{props.title}</text>
                <div style={{paddingLeft:20}}>
                  <div
                    // style={{ display: 'flex', border: '1px solid #BBC4C2', borderRadius: 5 }}
                    style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
                  >
                    <button
                      style={{ backgroundColor: '#BBC4C2', borderWidth: 0, borderRadius: 1 }}
                      onClick={() => setCount(count - 1)}
                    //onClick={()=>conText.setCount(conText.count+1)}
                    ><FontAwesomeIcon icon={faMinus} /></button>
                    <text
                      style={{ marginRight: 20, marginLeft: 20 }}
                    > {count} </text>
                    <button
                      style={{ backgroundColor: '#BBC4C2', borderWidth: 0, }}
                      //onClick={() => setCount(count + 1)}
                      onClick={() => countPlus(count)}
                    >
                      <FontAwesomeIcon icon={faPlus} /></button>
                  </div>
                </div>
              </div>
            </div>

            <div className="resText" style={{position:'absolute', right:40, resize:'block'}}>

              <text>
              ₹{props.price}
              </text>

            </div>
          </div>
        </div>
      }
    </div>
  )
}
