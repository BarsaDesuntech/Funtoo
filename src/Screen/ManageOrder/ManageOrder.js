import React from 'react'
import './ManageOrder.css'
import { Link, useNavigate } from 'react-router-dom';
import ManageordrHeader from './ManageordrHeader'
import { Button } from 'react-bootstrap';
import { showDate, showDayAsClientWant } from '../../Utils/Utils';
// import db from "../../db.json"
import moment from "moment"
import Footer from '../../Layout/Footer';
import { GetOrderEnquiry } from '../../services/OrderService';
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars ,faBarsProgress} from '@fortawesome/free-solid-svg-icons';
import HeaderAll from '../../Layout/HeaderAll';


export default function ManageOrder() {

  const [enquiryLists, setEnquiryLists] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  // const [refreshing,setRefreshing] = useState(false)
  const [manageOrederData,setManageOrederData] = useState([])
  const [filterData, setFilterData] = useState([])
  const [selectedMenuItem, setSelectedMenuItem] = useState("All")
  const [statusData , setStatusData] = useState("default")
  const menuItems = ["all", "pending","confirmed","cancelled","closed"]

  const navigate = useNavigate();

  const lgn = () => {
    navigate('/Home')
  }

  const getEventStartTime = (eventStartTimeStamp) => {
    let m = moment(eventStartTimeStamp);
    return m.format('h:mm A');
  }

  const getEventEndTime = (eventEndTimeStamp) => {
    let m = moment(eventEndTimeStamp);
    return m.format('h:mm A');
  }

  // const getDateSection = ()=>{
  //   let m = moment(date);
  // }
  // let obj = {
  //   customer_id:"57",
  //   status: ""
  // }
  useEffect(()=>{
    loadOrderDetails()

  },[])
  const loadOrderDetails = () => {
    console.log("THIS IS STATUS :::", statusData)
    GetOrderEnquiry({
      customer_id: 57,
      status: statusData 
      
    })
    .then((result)=>{
      console.log("THIS IS ALL DATA ::::", result)
      if(result.is_success){

        setManageOrederData(result.data)
        console.log("THIS IS ALL DATA ::::", manageOrederData)
      }
    })
    .catch(err => console.log(err))
  }
  const newloadOrderDetails = (status) => {
    console.log("THIS IS STATUS :::", status)
    GetOrderEnquiry({
      customer_id: 57,
      status: status == "all" ? '' : status
      
    })
    .then((result)=>{
      console.log("THIS IS ALL DATA ::::", result)
      if(result.is_success){

        setManageOrederData(result.data)
        console.log("THIS IS ALL DATA ::::", manageOrederData)
      }
    })
    .catch(err => console.log(err))
  }
  const onMenuItemChange = (type) => {
    console.log('.......type.......',type);
    if(type == "cancelled"){
      setSelectedMenuItem(type)
      setStatusData("declined")
      newloadOrderDetails(type)
      
    }
    else{
      console.log('.......type2.......',type);
     setSelectedMenuItem(type)
     setStatusData(type)
     newloadOrderDetails(type)
    }
  }

  return (
    <>
    <div style={{ backgroundColor: '#eee', minHeight:"100vh"}}>
    <div style={{ backgroundColor: '#eee'}} className='bodyMainCont'>
          <div className='HeaderTitle'>
            {/* <ManageordrHeader 
            menuItems = {menuItems}
            onMenuItemChange={onMenuItemChange}
            selectecMenuItems = {selectedMenuItem}
            /> */}
            <HeaderAll 
                        menuItems = {menuItems}
                        onMenuItemChange={onMenuItemChange}
                        selectecMenuItems = {selectedMenuItem}
                        manageOrder={true}
                        title="Manage Order"
            />
          </div>        
          <div className='maiCont'
            style={{ backgroundColor: '#eee' ,padding:"1%",margin:"auto"}}
           >
              {/* <text style={{
                  display:'flex',
                  alignItems:'center',justifyContent:'center',paddingTop:'4%',color:'red',
                  fontSize:20,fontFamily:'cursive'
                  }}> OOPS !!! </text>
                  </div><br></br>
                  <div>
                    <text style={{fontFamily:'monospace',fontWeight:'bold', fontSize:17,paddingTop:'4%'}}> No records found !!</text>
                  </div><br></br>
                  <div style={{paddingBottom:'8%',paddingTop:'4%'}}> */
              }
                    {/* <Button onClick={lgn} className='shopping' >
                          <text style={{fontSize:20}}> START SHOPPING </text>
                        </Button> */
                    }
                    {
                      manageOrederData == "" ?                       
                          <div  className='mainShoppingDiv'
                          //  style={{ margin:"auto"}}
                           >
                          <text style={{
                              display:'flex',
                              alignItems:'center',justifyContent:'center',paddingTop:'4%',color:'red',
                              fontSize:20,fontFamily:'cursive'
                              }}> OOPS !!! 
                          </text>
                          <div className=''>
                            <text style={{fontFamily:'monospace',fontWeight:'bold', fontSize:17,paddingTop:'4%'}}> No records found !!</text>
                          </div><br></br>
                              <div className='shoppingDiv'
                              style={{paddingBottom:'8%',paddingTop:'4%',}}>
                                <button onClick={lgn} className='shopping1' >
                                  <text > START SHOPPING </text>
                                </button>
                              </div>
                          </div> 
                        :
                          // console.log('DATA: ', db)
                          manageOrederData.map(item => {
                            // console.log(item.id,"item");
                            // console.log('THIS IS THE ITEM: ', item)
                              return (
                                <>
                                <div className='mainSubDiv'>
                                  <div  className="sectionHeader1">
                                      <div  className="sectionHeaderLeft1">
                                        <text  className="textHeaderLeft1">
                                          {moment(item.title, "YYYY-MM-DD").format("DD")}                             
                                        </text>
                                      </div>
                                      <div className="sectionHeaderRight1">
                                        <text  className="textHeaderRight1">
                                          {moment(item.title, "YYYY-MM-DD").format("dddd")}                               
                                        </text>
                                        <text style={{ fontSize: 14, color: "white" }}>
                                          {showDate(item.title)}
                                        </text>
                                      </div>
                                  </div>
                                  <div>
                                  {
                                      item.data.map((item)=>{
                                        return (
                                          <>
                                        
                                            {/* <Link to={`/confirmorder/${116}`} style={{ textDecoration: 'none',color:"black" }} > */}
                                              <div className='boxContainer' >
                                                <div className='subBoxContainer'>
                                                    <div className="inputContainer1">
                                                      
                                                        <Link to={`/confirmorder/${item.id}`} style={{ textDecoration: 'none',color:"black" }} >                                                   
                                                         
                                                            <div  className="row1">
                                                              <div  className="cell1">
                                                                Order#: </div>
                                                              <div  className="cell2">{item.order_id} (<text>
                                                                {item.order_status == "pending" && <text style={{color:"red"}}>Pending</text>}
                                                                {item.order_status == "confirmed" && <text style={{color:"green"}}>Confirmed</text>}
                                                                {item.order_status == "declined" && <text style={{color:"red"}}>Cancelled</text>}
                                                                {item.order_status == "review" && <text style={{color:"red"}}>Review</text>}
                                                                {item.order_status == "request_confirmation" && <text style={{color:"red"}}>Request Confirmatio</text>}
                                                                {item.order_status == "ongoing" && <text style={{color:"red"}}>Ongoing</text>}
                                                                {item.order_status == "completed" && <text style={{color:"tomato"}}>Completed</text>}
                                                                {item.order_status == "closed" && <text style={{color:"red"}}>Closed</text>}
                                                              </text>
                                                                )
                                                              </div>
                                                            
                                                            </div>
                                                            <div  className="row1">
                                                              <div  className="cell1">Event Date: </div>
                                                              <div  className="cell2">{showDayAsClientWant(item.event_start_timestamp)}</div>
                                                            </div>
                                                            <div  className="row1">
                                                              <div  className="cell1">Venue: </div>
                                                              <div  className="cell2">{item.venue}</div>
                                                            </div>
                                                            <div  className="row1">
                                                              <div  className="cell1">Setup by: </div>
                                                              <div  className="cell2">{showDayAsClientWant(item.setup_timestamp)}</div>
                                                            </div>
                                                            <div  className="row1">
                                                              <div  className="cell1">Event Time: </div>
                                                              <div  className="cell2">{getEventStartTime(item.event_start_timestamp)}-{getEventEndTime(item.event_end_timestamp)}</div>
                                                            </div>
                                                            <div  className="row1">
                                                              <div  className="cell1">Client Name: </div>
                                                              <div  className="cell2">{(item.customer_name !== null ? item.customer_name : "")}</div>
                                                            </div>
                                                                                            
                                                          </Link> 
                                                     
                                                      
                                                        {/* <div 
                                                        style={{marginRight:"1%",backgroundColor:"red", width:"20%"}}
                                                        > */}
                                                                  {/* {
                                                                        item.order_status == "pending" ?
                                                                        <div className='cancelBtn'>
                                                                          <button style={{color:"white", backgroundColor:"rgb(99, 195, 165)", border:"none"}}>CANCEL</button>
                                                                        </div>
                                                                      :
                                                                    null
                                                                  } */}
                                                                  {/* <div>
                                                                    <button>
                                                                    <FontAwesomeIcon icon={faBars} size='10px' style={{ marginLeft: '1%' }} />
                                                                    </button>
                                                                  </div> */}
                                                        {/* </div>                                                                                                 <div> */}
                                                            
                                                        {/* </div> */}
                                                        
                                                    </div>
                                                    <div className='bttnDiv'>
                                                             {
                                                                    item.order_status == "pending" ?
                                                                    <div className='cancelBtn'>
                                                                      <button style={{color:"white",borderRadius:"5px", backgroundColor:"rgb(99, 195, 165)", border:"none",}}>CANCEL</button>
                                                                    </div>
                                                                  :
                                                                null
                                                              }
                                                              <div className='progressIcon'>
                                                                <Link to={`/trackOrder/${item.id}`}>
                                                                <button onClick={lgn} 
                                                                className='prgsBtn'
                                                                    style={{borderWidth:0,borderRadius:"5px",
                                                                    background:'rgb(99, 195, 165)'}} >
                                                                    <FontAwesomeIcon icon={faBarsProgress}  style={{
                                                                    color:'white',borderRadius:"5px"}} />
                                                                </button>
                                                                </Link>
                                                              </div>
                                                  </div>
                                                </div>
                                              
                                               
                                              </div>
                                              
                                          </>
                                        )
                                      })
                                    }
                                  </div>                       
                                </div>                                             
                                </>
                              );
                            })
                        }              
          </div>
      </div>
          <div 
          style={{
            position:"fixed",bottom: 0, width: "100%",margingTop:"10%" }}>
            <Footer />
          </div>
    </div> 
    </>
  )
}


// const styles = {
//   // sectionHeader: {
//   //   width: "99%",
//   //   height: "60px",
//   //   // justifyContent:"center",
//   //   flexDirection: "row",
//   //   backgroundColor: "rgb(99, 195, 165)",
//   //   borderRadius: 3,
//   //   display: "flex",
//   //   margin: "auto",
//   //   marginTop: 5,
//   //   paddingTop: 2,
//   //   borderRadius: 5,
    
   
//   // },
//   // sectionHeaderLeft: {
//   //   width: "7%",
//   //   alignItems: "flex-end",
//   //   justifyContent: "center",
//   //   borderRight: "1px solid white ",
//   //   borderRightColor: "white",
//   //   paddingRight: 10,
    
//   // },
//   // textHeaderLeft: {
//   //   fontSize:26,
//   //   color:"white"
//   // },
//   // textHeaderRight: {
//   //   fontSize:16,
//   //   color:"white"
//   // },
//   // sectionHeaderRight: {
//   //   width: "93%",
//   //   justifyContent: "center",
//   //   paddingLeft: 10,
//   //   // border: "1px solid red",
//   //   alignItems: "flex-start",
//   //   textAlign: "left",
//   //   // flexDirection:"column"
//   //   display: "flex",
//   //   flexDirection: " column",
   

//   // },
//   // inputContainer: {
//   //   // border: "1px solid red",
//   //   width: "99%",
//   //   backgroundColor: "white",
//   //   margin: "auto",
//   //   marginTop: 7,
//   //   borderRadius: 5
//   // },
//   // row: {
//   //   textAlign: 'start',

//   // },
//   // cell1: {
//   //   // border: "1px solid red",
//   //   width: "15%"
//   // },
//   // cell: {
//     // border: "1px solid red",
//   // }
// }
