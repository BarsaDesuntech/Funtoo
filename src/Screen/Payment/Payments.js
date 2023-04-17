import React from 'react'
import './Payments.css'
import { useNavigate } from 'react-router-dom';
import PaymentHeader from './PaymentHeader'
import HeaderAll from '../../Layout/HeaderAll';
export default function ManageOrder() {


  const navigate = useNavigate();
  const lgn = () => {
      navigate('/Home')
  }

  return (      <>
  {/* <PaymentHeader /> */}
  <HeaderAll 
  all={true}
  title="Payment"
  />
  <div style={{backgroundColor:'#eee',marginTop:'5%',marginLeft:'4%',marginRight:'4%'}}>
<div>
<text style={{
    display:'flex',
     alignItems:'center',justifyContent:'center',paddingTop:'4%',color:'red',
     fontSize:20,fontFamily:'cursive'
     }}> OOPS !!! </text>
</div><br></br>
<div>
  <text style={{fontFamily:'monospace',fontWeight:'bold', fontSize:17,paddingTop:'4%'}}> No records found !!</text>
</div><br></br>
<div style={{paddingBottom:'8%',paddingTop:'4%'}}>
  <button onClick={lgn} className='shopping' >
    <text style={{fontSize:20}}> START SHOPPING </text>
  </button>
</div>
     </div>  
     </>     
  )
}

