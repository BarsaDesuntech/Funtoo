import React, { useContext } from 'react'
import './Billings.css'
import { useNavigate } from 'react-router-dom';
import BillingsHeader from './BillingsHeader'
import { useState } from 'react';
import { margin } from '@mui/system';
import Footer from '../../Layout/Footer';
import AppContext from '../../context/AppContext';
import { DeleteProfile } from '../../services/CustomerService';
import HeaderAll from '../../Layout/HeaderAll';

export default function ManageOrder() {
  let data = localStorage.getItem("loginData")
  const navigate = useNavigate();
  const context = useContext(AppContext)
  const [userdata,setUserdata] = useState(JSON.parse(data))

  const onDeleteBtnPress = () => {
    let obj = {
        id: userdata.id,
    };
    DeleteProfile(obj)
        .then((response) => {
        console.log("..........response...........",response) 
        // this.gotoMobileVerification()
        navigate('/')
        })
        .catch(error => console.log(error))
        // .finally(() => this.setState({ loaderVisible: false }));
}

  return (
  <>
    <HeaderAll 
    all={true}
    title="Billing"/>
    {/* <div style={{backgroundColor:'#eee',marginTop:'5%',marginLeft:'4%',marginRight:'4%'}} style={{styles.Container}}> */}
    <div style={styles.Container}>
      {/* <div>
<text style={{
    display:'flex',
     alignItems:'center',justifyContent:'center',paddingTop:'4%',color:'red',
     fontSize:20,fontFamily:'cursive'
     }}> OOPS !!! </text>
</div> */}
      {/* <br></br> */}
      {/* <div>
  <text style={{fontFamily:'monospace',fontWeight:'bold', fontSize:17,paddingTop:'4%'}}> No records found !!</text>
</div> */}
      {/* <br></br> */}

      <div style={{ padding: 8 }}>
        <h1>Welcome ! {userdata.name}</h1>
      </div>

      <table style={styles.inputContainer}>
        <tr style={styles.row}>
          <td style={styles.cell}>Billing Name: </td>
          <td style={styles.cell}>{userdata.name}</td>
        </tr>
        <tr style={styles.row}>
          <td style={styles.cell}>GSTIN: </td>
          <td style={styles.cell}>{userdata.gstin}</td>
        </tr>
        <tr style={styles.row}>
          <td style={styles.cell}>Email: </td>
          <td style={styles.cell}>{userdata.email}</td>
        </tr>
        <tr style={styles.row}>
          <td style={styles.cell}>Billing Address: </td>
          <td style={styles.cell}>{userdata.billing_address}</td>
        </tr>

      </table>


    </div>
    <div style={{ paddingBottom: '8%', paddingTop: '4%', marginTop: "140px" }}>
      <button onClick={onDeleteBtnPress} className='shopping' >
        <text style={{ fontSize: 20 }}> Delete Account </text>
      </button>
    </div>
    <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
      <Footer />
    </div>
  </>
  )
}

const styles = {

  Container: {
    // backgroundColor:'#eee',
    marginTop: '5%',
    marginLeft: '4%',
    marginRight: '4%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  inputContainer: {
    // fontFamily: "-apple-system",
    // fontSize: "1rem",
    // fontWeight: 1.5,
    // lineHeight: 1.5,
    // color: "#292b2c",
    // backgroundColor: "#fff",
    // padding: "0 2em"
    width: "60%",
    margin: 'auto',
    alignContent: "center",
    justifyContent: "space-around",
    // border: '1px solid red',
    // marginLeft: 20,
    // margin:5
    // display:"flex"
    alignItems: 'center',
    justifyContent: 'center'
  },

  row: {
    textAlign: 'start',
  },

  cell: {
    paddingTop: '10px',
    paddingBottom: '10px',
  },

  textSpace: {
    marginLeft: 15,
    justifyContent: "space-between",
    // padding:8
  }

}