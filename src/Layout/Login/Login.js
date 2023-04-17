// import React from 'react';
// import { useFormik } from 'formik';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Login.css'

// const ValidateForm = (formValue) => {
//     const errors = {};
//    // const reg_exp_email = /^[a-z0-9._%/+-]+@[a-z0-9.-]+\.[a-z]{2,4}$ /

//     if (!formValue.email) {
//         errors.email = "Please enter email";
//         // }else if(!reg_exp_email.test(formValue.email)){
//         //     errors.email="Invalid Email";
//     }
//     if (!formValue.password) {
//         errors.password = "Please enter Password";
//     }
//     console.log("Error:", errors);
//     return errors;
// }
// const Login = () => {


//     const navigate = useNavigate();
//     const lgn = () => {
//         navigate('/')
//     }

//     const home = () => {
//         navigate('/Home')
//     }
//     const formik1 = useFormik({
//         initialValues: {
//             email: '',
//             password: ''
//         },
//         validate: ValidateForm,
//         onSubmit: (values) => {
//             console.log("values Received ", values);

//             axios.post('https://project-node-1.herokuapp.com/postLoginData', values)
//                 .then(res => {
//                     console.log("Axios Response", res);
//                     navigate('/')

//                     window.localStorage.setItem("Token Value:", res.data.token)
//                     alert("you have successfully logged in")
//                 })
//                 .catch(err => {
//                     console.log("Axios error", err);
//                 })
//         }
//     })
//     return (
    
//     <div style={{backgroundColor:'#eee',marginTop:"3%"}}>
//         <form onSubmit={formik1.handleSubmit}>
//         {/* <div style={{marginRight:10}}>
//         <div style={{
//           alignItems: 'center', justifyContent: 'center', display: 'flex',
//           flex: 1, marginLeft: '1%', backgroundColor: '#eee',marginTop:-15,
//           padding: 10,
//         }}>
//           <span style={{
//             width: "20%",
//             justifyContent: "center",
//           }}>
//             <text style={{
//               display: 'flex',
//               marginLeft: '1%', marginBottom: 15,marginLeft: "65%"
//             }}> Username : </text>
//           </span>
//           <span style={{
//             justifyContent: "center",
//             flex: 1,
//             paddingLeft: 10,
//             marginLeft: 80,paddingTop:'2%'
//           }}>         
//             <input  style={{
//              marginBottom: 15, marginLeft: "-25%", width: "266%"
//             }} type="text" placeholder="Enter Your username" name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur}></input><br></br>
//             {formik.touched.username && formik.errors.username ? <span style={{ color: 'red' }}>{formik.errors.username}</span> : null}
            
//           </span>
//           <span style={{
//             width: "20%",
//             justifyContent: "center",
//           }}>
//             <text style={{
//               display: 'flex',
//               marginLeft: '1%', marginBottom: 15
//             }}></text>
//           </span>
//           <span style={{
//             justifyContent: "center",
//             flex: 1,
//             paddingLeft: 10,
//             marginLeft: 80
//           }}>

//           </span>
//         </div>
//       </div>    */}
// {/* // */}

// <div style={{marginRight:10}}>
//         <div style={{
//           alignItems: 'center', justifyContent: 'center', display: 'flex',
//           flex: 1, marginLeft: '1%', backgroundColor: '#eee',marginTop:-15,
//           padding: 10,
//         }}>
//           <span style={{
//             width: "20%",
//             justifyContent: "center",paddingTop:'2%'
//           }}>
//             <text style={{
//               display: 'flex',
//               marginLeft: '1%', marginBottom: 15,marginLeft: "65%"
//             }}> Email: </text>
//           </span>
//           <span style={{
//             justifyContent: "center",
//             flex: 1,
//             paddingLeft: 10,
//             marginLeft: 80,paddingTop:'2%'
//           }}>           
//             <input style={{
//              marginBottom: 15, marginLeft: "-25%", width: "266%"
//             }} type="email" placeholder="  name@example.com" name="email" value={formik1.values.email} onChange={formik1.handleChange} onBlur={formik1.handleBlur}></input> <br></br>
//             {formik1.touched.password && formik1.errors.email ? <span style={{ color: 'blue' }}>{formik1.errors.email}</span> : null}
//           </span>
//           <span style={{
//             width: "20%",
//             justifyContent: "center",
//           }}>
//             <text style={{
//               display: 'flex',
//               marginLeft: '1%', marginBottom: 15
//             }}></text>
//           </span>
//           <span style={{
//             justifyContent: "center",
//             flex: 1,
//             paddingLeft: 10,
//             marginLeft: 80
//           }}>

//           </span>
//         </div>
//       </div> 

// {/* // */}
            
// <div style={{marginRight:10}}>
//         <div style={{
//           alignItems: 'center', justifyContent: 'center', display: 'flex',
//           flex: 1, marginLeft: '1%', backgroundColor: '#eee',marginTop:-15,
//           padding: 10,
//         }}>
//           <span style={{
//             width: "20%",
//             justifyContent: "center",
//           }}>
//             <text style={{
//               display: 'flex',
//               marginLeft: '1%', marginBottom: 15,marginLeft: "65%",paddingTop:'10%'
//             }}> Password: </text>
//           </span>
//           <span style={{
//             justifyContent: "center",
//             flex: 1,
//             paddingLeft: 10,
//             marginLeft: 80,paddingTop:'2%'
//           }}>         
        
            
//             <input  style={{
//              marginBottom: 15, marginLeft: "-25%", width: "266%"
//             }} type="text" placeholder="  Enter Your Password" name="password" value={formik1.values.password} onChange={formik1.handleChange} onBlur={formik1.handleBlur}></input><br></br>
//             {formik1.touched.password && formik1.errors.password ? <span style={{ color: 'red' }}>{formik1.errors.password}</span> : null}



//           </span>
//           <span style={{
//             width: "20%",
//             justifyContent: "center",
//           }}>
//             <text style={{
//               display: 'flex',
//               marginLeft: '1%', marginBottom: 15
//             }}></text>
//           </span>
//           <span style={{
//             justifyContent: "center",
//             flex: 1,
//             paddingLeft: 10,
//             marginLeft: 80
//           }}>

//           </span>
//         </div>
//       </div>            
  
//       <div style={{marginTop:'3%'}}>
//       <button id="BT" type="submit" onClick={home}
//       style={{width:'59%',height:40,borderWidth:0,borderRadius:5,marginLeft:'4%',
//               backgroundColor:'rgb(99, 195, 165)'}}> 
//              <text style={{fontSize:21,color:'white'}}> Submit </text>
//               </button>  
//               <br></br>
//       </div>
            






        

//             {/* Email:
//             <input id="EML" type="email" placeholder="  name@example.com" name="email" value={formik1.values.email} onChange={formik1.handleChange} onBlur={formik1.handleBlur}></input> <br></br>
//             {formik1.touched.password && formik1.errors.email ? <span style={{ color: 'blue' }}>{formik1.errors.email}</span> : null}
//             <br></br>
//             Password:
//             <input id="PWD" type="text" placeholder="  Enter Your Password" name="password" value={formik1.values.password} onChange={formik1.handleChange} onBlur={formik1.handleBlur}></input><br></br>
//             {formik1.touched.password && formik1.errors.password ? <span style={{ color: 'red' }}>{formik1.errors.password}</span> : null}
//             <br></br> */}

//             {/* onBlur is used to get Focus a perticular intput Field.
//        If we use "touched" then onBlur is supplementary used.
//        Otherwise if we toched any one inputfield all the Errors will be shown. */}


//             {/* <button type="submit" id='B' onClick={home}>Submit</button> <br></br> */}
//             <div style={{marginTop:'1%'}}>
//             <text style={{fontSize:18}}>  Not an User? </text>
//             <button onClick={lgn} type="submit" id='a'> 
//             <text style={{fontSize:19}}> Sign up now</text>
//             </button>
//             </div>
           
//         </form>
//         <div style={{marginBottom:'2%'}}>
//           <br></br>
//           <br></br><br></br>
//        </div>
//     </div>
//     );
// };
// export default Login;

import React,{useContext, useEffect, useState} from 'react'
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import OtpInput from 'react-otp-input';
import AppContext from '../../context/AppContext';
import { authenticateUser } from '../../services/APIServices';
import { border } from '@mui/system';
export default function Login(props) {
  const context = useContext(AppContext)

  const [otp, setOtp] = useState('')
  const [LoginData, setLoginData] = useState([])
  const [loginWithOtpData, setLoginWithOtpData] = useState(context.token)
  // const [userData,setUserData] = useState([])
 
  let token = localStorage.setItem("token",loginWithOtpData.verificationId);
  
  const navigate = useNavigate();
   const handelLogin = (data) => {
    if (!data.name || !data.email) {
       navigate('/updateContect')
    }else{
      navigate('/Home')
    }
   }

   useEffect(()=>{
console.log("login")
   },[])

   const handelGetOtp = (otp) =>{
    console.log(otp)
    setOtp(otp)
   }

  const ValidateOtpReg = () => {
    if (otp === null && loginWithOtpData === null)
      return;
    loginWithOtpData.confirm(otp).then((result) => {
      // console.log('............result.....0', result)
      let data = {
        mobile: context.cartData.split("+91")[1],
      }  
      authenticateUser(data)
              .then((res) => {
                console.log('..........resotp.....', res.data)
                // context.getUserData(res.data)
                context.getLoginData(res.data)
                setLoginData(res.data)
                localStorage.setItem("id",res.data.id)
                localStorage.setItem("loginData",JSON.stringify(res.data))
                handelLogin(res.data)
             
              })
      
        .catch((err) => { console.log(err) })
    }).catch((err) => {
      alert("Wrong code");
    }).finally(() => { "" })
  }
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        ValidateOtpReg();
    }
}



  return (
    <>
    <div style={{alignItems:'center',justifyContent:'center',flex:1}}>
      
      <div style={{marginTop:'13%'}}>
        <text style={{fontWeight:'bold',fontSize:25}}>Verify Phone Number</text>
      </div>
      <div style={{marginTop:'4%'}}>
        <text style={{fontSize:20}}> Please enter the verification code </text><br></br>
        <text style={{fontSize:20,marginTop:'30px'}}>we send to your number</text>
      </div>
       
<Card body  style={{
          marginTop: 25,borderWidth:0}}>
<div style={{
          marginTop: 15,
          display: 'flex', alignItems: 'center', justifyContent: "center"
        }}>
          {/* <input></input> */}
          {/* <OtpInput
            inputStyle={{ width: 45,height:35}}
            value={otp}
            onChange={handleChange}
            numInputs={6}
            separator={
              <div >
                <span >-</span>
              </div>
            } /> */}
       </div>
</Card>
        <div style={{
        
          display: 'flex', alignItems: 'center', justifyContent: "center"
        }}>
          <OtpInput         
            inputStyle={{ width: 45,height:45}}           
            value={otp}
             onChange={handelGetOtp}
            numInputs={6}
            renderInput={(props) => <input {...props} onKeyPress={handleKeyPress} />}
            renderSeparator={
              <div >
                <span style={{marginLeft:10}}></span>
              </div>
            } />
       </div>
      
        <div style={{
          display: "flex", flexDirection: "row",
          flexWrap: "nowrap",
          alignItems: 'center', justifyContent: 'center',
          
        }}
        >
          {/* <input style={{ borderWidth: 0, borderBottomWidth: 2, width: 25, alignSelf: 'center' }}
          
          /> <input style={{
            marginLeft: 5, borderWidth: 0, borderBottomWidth: 2,
            width: 25, alignSelf: 'center'
          }} /><input style={{
            marginLeft: 5, borderWidth: 0, borderBottomWidth: 2,
            width: 25, alignSelf: 'center'
          }} /><input style={{
            marginLeft: 5, borderWidth: 0, borderBottomWidth: 2,
            width: 25, alignSelf: 'center'
          }} /> */}
        </div>
      <div style={{marginTop:'5%'}}>
               <Button onClick={ValidateOtpReg} 
                type="submit"
               style={{height:40,borderWidth:0,borderRadius:5,
               backgroundColor:'rgb(99, 195, 165)'}} > 
              <text style={{fontSize:18,color:'white'}} > CONFIRM </text>
               </Button>
      </div>
      </div>
      </>
  )
}

// import React, { Component } from 'react'

// export default class Login extends Component {
//   render() {
//     return (
//       <div>
        
//         <div style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>

//           <div style={{ marginTop: '10%' }}>
//             <text style={{ fontWeight: 'bold', fontSize: 25 }}>Verify Phone Number</text>
//           </div>
//           <div style={{ marginTop: '4%' }}>
//             <text style={{ fontSize: 20 }}> Please enter the verification code </text><br></br>
//             <text style={{ fontSize: 20, marginTop: '30px' }}>we send to your number</text>
//           </div>

//           <div style={{
//             display: "flex", flexDirection: "row",
//             flexWrap: "nowrap",
//             alignItems: 'center', justifyContent: 'center'
//           }}>
//             <input style={{ borderWidth: 0, borderBottomWidth: 2, width: 25, alignSelf: 'center' }}

//             /> <input style={{
//               marginLeft: 5, borderWidth: 0, borderBottomWidth: 2,
//               width: 25, alignSelf: 'center'
//             }} /><input style={{
//               marginLeft: 5, borderWidth: 0, borderBottomWidth: 2,
//               width: 25, alignSelf: 'center'
//             }} /><input style={{
//               marginLeft: 5, borderWidth: 0, borderBottomWidth: 2,
//               width: 25, alignSelf: 'center'
//             }} />
//           </div>
//           <div style={{ marginTop: '5%' }}>
//             <button onClick={lgn} id="BT" type="submit"
//               style={{
//                 width: '15%', height: 40, borderWidth: 0, borderRadius: 5,
//                 backgroundColor: 'rgb(99, 195, 165)'
//               }}>
//               <text style={{ fontSize: 21, color: 'white' }}> CONFIRM </text>
//             </button>
//           </div>
//         </div>
        
//         </div>
//     )
//   }
// }
