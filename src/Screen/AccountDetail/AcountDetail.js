import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { UpdateProfile } from '../../services/CustomerService';
import Header from '../Cart/CartHeader'
// import Header from '../Billing/BillingsHeader'

function AccountDetail(props) {
    let data = localStorage.getItem("loginData")
  
    const navigate =  useNavigate();
    const context = useContext(AppContext)
    const [userdata,setUserdata] = useState(JSON.parse(data))
    const [name ,setName] = useState(userdata?.name)
    const [email ,setEmail] = useState(userdata?.email)
    const [ gstin,setGstin] = useState(userdata.gstin)
    const [ CompanyName,setCompanyName] = useState(userdata?.company_name)
    const [ BillingAddress,setBillingAddress] = useState(userdata?.billing_address)
    console.log( userdata,"data-...........");
    const lgn = () => {
        navigate('/Billing')
    }

    const writeUserData = async (value) => {
        try {
            await localStorage.setItem(
                // FUNTOO_DEVICE_STORAGE_KEY,
                "loginData",
                JSON.stringify(value)
            );
        } catch (e) {
            throw new Error("failed to write data in storage");
        }
    };
const onSubmit = () =>{
    let obj = {
        id: userdata.id,
        name:name,
        email: email,
        mobile: userdata.mobile,
        cust_code: userdata.cust_code,
        gstin: gstin != '' ? gstin : null,
        billing_address: BillingAddress != '' ? BillingAddress : null,
        company_name: CompanyName!= '' ? CompanyName: null 
    };
    UpdateProfile(obj)
    .then((response) => {
        
        if (response.is_success) {
            writeUserData(response.data)
            lgn()
            console.log('..............response.data2...........',response.data)
            
        }
    })
}

  return (
    <>
      <Header title={"Account Detail"} />
      <div style={{padding:8}}>
          <h1>Welcome !  {userdata.name}</h1>
      </div>
      <div style={styles.container}>
        <form>
            <div style={styles.formControl}>
            <label style={styles.row}>Billing Name:</label>
                <input style={{ 
                    height:"47px",
                    backgroundColor:"#f9f9f9",
                    borderColor:"#e5e5e5",
                    borderWidth: 1,
		            borderRadius: 4,}}
                    type="text"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
            
            </div>
           
            <div style={styles.formControl}>
            <label style={styles.row}>GSTIN:</label>
                <input style={{ 
                    height:"47px",
                    backgroundColor:"#f9f9f9",
                    borderColor:"#e5e5e5",
                    borderWidth: 1,
		            borderRadius: 4,}}
                    type="text"
                    onChange={(e)=>setGstin(e.target.value)}
                    value={gstin}
                />
            
            </div>
            
            <div style={styles.formControl}>
            <label style={styles.row}>Email ID:</label>
                <input style={{ 
                    height:"47px",
                    backgroundColor:"#f9f9f9",
                    borderColor:"#e5e5e5",
                    borderWidth: 1,
		            borderRadius: 4,}}
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
            
            </div>
           
            <div style={styles.formControl}>
            <label style={styles.row}>Company Name:</label>
                <input style={{ 
                    height:"47px",
                    backgroundColor:"#f9f9f9",
                    borderColor:"#e5e5e5",
                    borderWidth: 1,
		            borderRadius: 4,}}
                    type="text"
                    value={CompanyName}
                    onChange={(e)=>setCompanyName(e.target.value)}
                />
            
            </div>
            
            <div style={styles.formControl}>
            <label style={styles.row} >Billing Address:</label>
                <input style={{ 
                    height:"120px",
                    backgroundColor:"#f9f9f9",
                    borderColor:"#e5e5e5",
                    borderWidth: 1,
		            borderRadius: 4,}}
                    type="textarea"
                    rows={4}
                    value={BillingAddress}
                    onChange={(e)=>setBillingAddress(e.target.value)}
                />
            
            </div>
            
        </form>
        <div style={{paddingBottom:'8%',paddingTop:'4%'}}>
        <button onClick={()=>onSubmit()} style={styles.buttonColor} >
          <text style={{fontSize:20}}> Submit </text>
        </button>
      </div>
      </div>
    </>
  )
}

export default AccountDetail


const styles = {
    container: {
        width: "60%",
        margin: "auto",
        justifyContent:"center"
        
    },
    formControl : {
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px",
    paddingTop: '5px',
    paddingBottom: '10px',
   
    },
    row : {
        textAlign: 'start',
        paddingBottom: '10px',
        fontSize: 20,
    },
    buttonColor:{
        backgroundColor: "rgb(99, 195, 165)",
        borderWidth: 0,
        height: "50px",
        width: "400px",
        color: "white",
        borderRadius: "7px",
    }
}
