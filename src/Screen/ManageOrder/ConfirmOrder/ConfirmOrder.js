import { convertLength } from '@mui/material/styles/cssUtils';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { GetSingleOrderEnquiry, UpdateOrder } from '../../../services/OrderService';
// import Header from '../../Cart/CartHeader'
import  "./ConfirmOrder.css"
import moment from "moment"
import { formatDateTimetoMysqlDateTimeFormat, showDateAsClientWant } from '../../../Utils/Utils';
import { Modal } from 'react-bootstrap';
import Header from './ConfirmOrderHeader';
import HeaderAll from '../../../Layout/HeaderAll';

function ConfirmOrder() {
  const navigate = useNavigate()
    const params = useParams();
    // console.log("THIS IS GOBACK PARAMS ITEM ID::", params)
    const location = useLocation()
    // console.log("THIS IS GO BACK LOCATION",location)
    const [ orderDetails, setOrderDetails ] = useState([]);
    const [showButton, setShowButton] = useState(false)

    const [showModal, setShow] = useState(false);
    const [showModal2, setShow2] = useState(false);

    const [itemId, setItemId] = useState(location)
    // console.log('THIS IS THE ID: ', id);
    useEffect(() => {
        GetSingleOrderEnquiry({ id: params.id })
        // console.log("THIS IS ID", {id})
            .then((response) => {
                console.log('THIS IS THE RESPONSE: ', response );
                console.log('THIS IS THE RESPONSE: ', response.data);
                setOrderDetails(response.data)
                // console.log("THIS IS PLAY TIME::",orderDetails.event_data.play_time)
                // setUpdateData(response.location)
                  // console.log(orderDetails?.data?.event_data?.event_start_timestamp,"+++++++++++++++++++++++++++++")
                //   console.log(updateData,"-------------------------")
            })
            .catch((err) => {
                console.log(err)
            });
    },[]);

  
    const handleClose = () => {
        setShow(false)
      }
    const handleShow = () => { 
        setShow(true) 
    }
    const handleClose2 = () => { setShow2(false) }
    const handleShow2 = () => { setShow2(true) }
    // console.log("THIS IS STATUS OF ORDER:::", orderDetails.status)
    const getEventStartTime = (eventStartTimeStamp) => {
        let m = moment(eventStartTimeStamp);
        return m.format('h:mm A');
    }
    const getEventEndTime = (eventEndTimeStamp) => {
        let m = moment(eventEndTimeStamp);
        return m.format('h:mm A');
    }
    // This is for replace ola array with new array
    // var saveItem = orderDetails.line_item
    // var savenewItem= location.state.saveData
    // saveItem = savenewItem.slice(0)
    // console.log("----------saveItme------",saveItem)
    // console.log("----------saveItme------",savenewItem)

    function handleEdit(orderDetails) {
      navigate('/editgames', 
      {
          state: {
              orderDetails: orderDetails
          }
      }
      );
    }
   const updateEnquiryBtnClick = () =>{
    // handleShow()
    if(Number(orderDetails.event_data.play_time) > 4){
        handleShow()
        sendQuery()
    }
    else{
        sendQuery()
    }
   }
   const sendQuery = () =>{
    let data = {
        id: orderDetails.id,
        company_name: orderDetails.company_name != "" ? orderDetails.company_name : null,
        company_id: orderDetails.company_id != "" ? orderDetails.company_id:null,
        AltEmail_Id : orderDetails.AltEmail_Id != "" ? orderDetails.AltEmail_Id :null,
        AltPerson_name : orderDetails.AltPerson_name != "" ? orderDetails.AltPerson_name:null,
        AltMobileNo: orderDetails.AltMobileNo !=""? orderDetails.AltMobileNo:null,
        event_details: JSON.stringify({
            event_name: orderDetails.event_data.event_name,
            event_type_id: orderDetails.event_data.event_type_id,
            event_type_name: orderDetails.event_data.event_type_name,
            event_start_timestamp: formatDateTimetoMysqlDateTimeFormat(
                orderDetails.event_data.event_start_timestamp
            ),
            event_end_timestamp: formatDateTimetoMysqlDateTimeFormat(
                orderDetails.event_data.event_end_timestamp
            ),
            setup_timestamp: formatDateTimetoMysqlDateTimeFormat(
                orderDetails.event_data.setup_timestamp
            ),
            play_time: orderDetails.event_data.play_time,
            num_of_guest: orderDetails.event_data.num_of_guest,
            num_of_kids: orderDetails.event_data.num_of_kids,
            venue: orderDetails.event_data.venue,
            address: orderDetails.event_data.address,
            landmark: orderDetails.event_data.landmark,
            floor_name: orderDetails.event_data.floor_name,
            google_location: orderDetails.event_data.google_location
        })
    }
    console.log("THIS IS DATA FOR API", data)

    if(orderDetails.Alt_Person_array != null){
        orderDetails.Alt_Person_array = JSON.stringify(orderDetails.Alt_Person_array)
    }
    UpdateOrder(data)
    .then((response)=>{
        console.log("THIS IS UPDATE ORDER RESPONSE", response)
        if(response.is_success) {
            console.log("THIS IS UPDATE ORDER API RESPONSE",response)
             handleShow2();
        }
    })
    .catch((err)=>{
        alert("Error")
        console.log(err)
    })
   }
   const gotoManageEnquiry = () =>{
    navigate('/manageOrder')
   }
//    console.log('THIS IS THE RESPONSE: ', orderDetails?.status)
//    console.log('THIS IS THE RESPONSE: ',orderDetails.event_data.event_end_timestamp)
  return (
    <>
     <div  style={{ backgroundColor: '#eee', margin:0 }}>
        <div>
            {/* <Header title={"Confirm Order"} /> */}
            <HeaderAll
            all={true}
             title="Confirm Order"/> 
        </div>       
        { 
                orderDetails === undefined ?<text>Data is coming.....</text>:
                 
                 <div  style={{ backgroundColor: '#eee',   }}>
                        <div style={{ backgroundColor: '#eee', marginTop:"1%", }} className='mainCont'>
                            <div style={{paddingBottom:"2%"}}>
                                    <div className='container'>
                                        <div className='inputContainer'>
                                            {/* <div className='row'> */}
                                                <div className="cell">
                                                    <text >Event Start:</text>
                                                </div>
                                                <div className="cell22">
                                                    <text >{showDateAsClientWant(orderDetails?.event_data?.event_start_timestamp)}</text>  
                                                </div>
                                                <div className="cell33">
                                                <text >{moment(orderDetails?.event_data?.event_start_timestamp).format("h:mm A")}</text>
                                                </div>                         
                                            {/* </div>      */}
                                        </div> 
                                        <hr/>
                                        <div className='inputContainer'>
                                            {/* <div className='row'> */}
                                                <div className="cell">
                                                    <text >Event End:</text>
                                                </div>
                                                <div className="cell22">
                                                    <text >{showDateAsClientWant(orderDetails?.event_data?.event_end_timestamp)}</text>
                                                </div>
                                                <div className="cell33">
                                                <text >{moment(orderDetails?.event_data?.event_end_timestamp).format("h:mm A")}</text>
                                                </div>
                                            {/* </div> */}
                                        </div>   
                                        <hr/>
                                        <div className='inputContainer'>
                                        
                                                <div className="cell">
                                                    <text>Setup:</text>
                                                </div>
                                                <div className="cell22">
                                                    <text >{showDateAsClientWant(orderDetails?.event_data?.setup_timestamp)}</text>   
                                                </div>
                                                <div className="cell33">
                                                <text >{moment(orderDetails?.event_data?.setup_timestamp).format("h:mm A")}</text>
                                                </div>   
                                        
                                        </div> 
                                        <hr/>
                                        <div className='inputContainer'>
                                            <div className='googlerow'>
                                                <div className="googlecell">
                                                    <text >Playtime:</text>
                                                </div>
                                                <div className="googlecell22">
                                                    <text >{orderDetails?.event_data?.play_time}</text>
                                                </div> 
                                            </div>
                                        </div> 
                                        <hr/>
                                        <div className='inputContainer'>
                                            <div className='googlerow'>
                                                <div className="googlecell">
                                                    <text ># of Guests:</text>
                                                </div>
                                                <div className="googlecell22">
                                                    <text >{orderDetails?.event_data?.num_of_guest}</text>   
                                                </div>
                                            </div>
                                        </div> 
                                        <hr/>
                                        <div className='inputContainer'>
                                            <div className='googlerow'>
                                                <div className="googlecell">
                                                    <text >Event Type:</text>
                                                </div>
                                                <div className="googlecell22">
                                                    <text >{orderDetails?.event_data?.event_type_name}</text>   
                                                </div>
                                            </div>
                                        </div> 
                                        <hr/>
                                    </div>
                                    <div className='container'>
                                        <div className='inputContainer'>
                                            <div className='googlerow'>
                                                <div className="googlecell">
                                                    <text >Venue:</text>
                                                </div>
                                                <div className="googlecell22">
                                                    <text >{orderDetails?.event_data?.venue}</text>  
                                                </div>
                                            </div>
                                        </div>    
                                            <hr/>
                                            <div className='inputContainer'>
                                                <div className='googlerow'>
                                                    <div className="googlecell">
                                                        <text >Which floor is the setup:</text>
                                                    </div>
                                                    <div className="googlecell22">
                                                        <text>{orderDetails?.event_data?.floor_name}</text>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className='inputContainer'>
                                                <div className='googlerow'>
                                                    <div className="googlecell">
                                                        <text >Google Location:</text>
                                                    </div>
                                                    <div className="googlecell22">
                                                        <text>{orderDetails?.event_data?.google_location}</text>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className='inputContainer'>
                                                <div className='googlerow'>
                                                    <div className="googlecell">
                                                        <text >Landmark:</text>
                                                    </div>
                                                    <div className="googlecell22">
                                                        <text>{orderDetails?.event_data?.landmark}</text>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr/>
                                       
                                    </div>
                                    {
                                        orderDetails?.special_instruction ? 
                                        <div className='container'>
                                            <div className='inputContainer'>
                                                <div className='row'>
                                                    <div className="cell">
                                                        <text >Special Instructions:</text>
                                                    </div>
                                                    <div className="cell22">
                                                        <text >{orderDetails?.special_instruction}</text>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                    :
                                    null
                                    }
                                    
                                    <div className='container'>
                                        <div className='inputContainer'>
                                        <div className='gameSection'>
                                                <div className='row33'>
                                                    <div className="imageCell">
                                                        <text >Games</text>
                                                    </div>
                                                </div>
                                                {
                                                orderDetails?.line_items?.map((item)=>{
                                                    // console.log(item.game,"3333333333333333")
                                                    
                                                    return (
                                                    <>
                                                            <div className='row33'>
                                                                <div className="Imagecell">
                                                                    <img src={item.game.image_url} alt='image' className='imageWidth'/>
                                                                </div>    
                                                                <div className='ImageText'>
                                                                    <div style={{display:"flex",flexDirection:"column"}}>
                                                                        <text>{item.game.name}</text>
                                                                        {
                                                                            item.quantity >1 ?  
                                                                            <text>
                                                                                {item.quantity} * {item.game.rent}
                                                                            </text> 
                                                                                : 
                                                                                null
                                                                        }
                                                                
                                                                    </div>
                                                                    <div>
                                                                        <text>{"₹"}{item.quantity * item.game.rent}</text>
                                                                    </div>  
                                                                </div>  
                                                            </div>
                                                            <hr/>
                                                    </>
                                                    )
                                                })
                                                }
                                                    <div  className='buttondiv' >
                                                        <button onClick={() => [handleEdit(orderDetails),setShowButton(true)]} className='buttonText'>Edit Games</button>
                                                    </div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className='container'> 
                                        <div className='inputContainer'>
                                                <table className='inputTable'>
                                                    <tr  className="tablerow">
                                                        <td  className="tablecell">Sub Total </td>
                                                        <td  className="tablecell22">{"₹"}{orderDetails.subtotal}</td>
                                                    </tr>
                                                    <tr  className="tablerow">
                                                        <td  className="tablecell">Transport Charges </td>
                                                        <td  className="tablecell22">{"₹"}{orderDetails.transport}</td>
                                                    </tr>
                                                    <tr  className="tablerow">
                                                        <td  className="tablecell">Payment Mode </td>
                                                        <td  className="tablecell22">{orderDetails.payment}</td>
                                                    </tr>
                                                    <tr  className="tablerow">
                                                        <td  className="tablecell">GST Amount </td>
                                                        <td  className="tablecell22">{"₹"}{orderDetails.total_gst}</td>
                                                    </tr>
                                                    <tr  className="tablerow" style={{fontWeight:700}}>
                                                        <td  className="tablecell" >Total Amount</td>
                                                        <td  className="tablecell22">{"₹"}{parseInt(orderDetails.subtotal)+parseInt(orderDetails.transport)+parseInt(orderDetails.total_gst)}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                    </div>  
                            </div>  
                                <div style={{width:"100%",marginTop:"5%"}}>
                                        <div  style={{position:"fixed",bottom:0,width:"100%", backgroundColor: '#eee',margin:"auto",paddingBottom:"3%",paddingTop:"2%" }}>
                                        {orderDetails.status == "pending" ? <button 
                                        onClick={()=>updateEnquiryBtnClick()} 
                                        className='buttonText' >Review Pending</button>:null}
                                        </div>  
                                </div>   
                            
                        </div>
                   
                  </div> 
            }  
    
           
             <>
                <div >
                <Modal style={{ margin: "auto", border: "none" ,}} show={showModal} onHide={handleClose}>
                    <Modal.Body style={{ margin: "auto", border: "none", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Modal.Title style={{ margin: "auto", border: "none", paddingTop: "5px", paddingBottom: "10px" }}>
                            <text style={{ alignContent: "center", textAlign: "center", fontWeight: "400" }}>Alert</text>
                        </Modal.Title>
                        <div >
                        <text style={{  }}>
                            Pls note the charges are normally <br></br>
                            for 4 Hours of play time excluding <br></br>
                            setup and break down .. We see that <br></br>
                            your requirement is for ${orderDetails?.event_data?.play_time}  hours
                            <br></br> pls discuss with us!
                        </text>
                        </div>
                    </Modal.Body>
                    <Modal.Footer style={{ margin: "auto", border: "none" }}>
                        <button onClick={()=> sendQuery()} style={{ backgroundColor: 'rgb(99, 195, 165)', border: "none", borderRadius: "5px", width: "50px", color: "white" }}>OK</button>
                    </Modal.Footer>
                </Modal>
                </div>  
             </>   
             <>
                <div >
                    <Modal style={{ margin: "auto", border: "none" ,}} show={showModal2} onHide={handleClose2}>
                    <Modal.Body style={{ margin: "auto", border: "none", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Modal.Title style={{ margin: "auto", border: "none", paddingTop: "5px", paddingBottom: "10px" }}>
                    <text style={{ alignContent: "center", textAlign: "center", fontWeight: "400" }}>Thank you for your Query</text>
                    </Modal.Title>
                    <div >
                    <text style={{  }}>
                        Your changes has been reviewed and <br></br>
                        one of our representative will back <br></br>
                        to you <br></br>
                        
                    </text>
                    </div>
                </Modal.Body>
                <Modal.Footer style={{ margin: "auto", border: "none" }}>
                    <button onClick={()=>gotoManageEnquiry()} style={{ backgroundColor: 'rgb(99, 195, 165)', border: "none", borderRadius: "5px", width: "150px", color: "white" }}>Manage Enquiry</button>
                </Modal.Footer>
                    </Modal>
                </div>  
             </>  
     </div>    
    </>
  )
}

export default ConfirmOrder
