import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AppContext from "../../../context/AppContext";
import { getCart } from "../../../services/APIServices";
import Header from "../../Cart/CartHeader";
import CustomTimePicker from "../../CustomTimePicker";
import DateTimePicker from "../../DateTimePicker";
import EventDetailsforGSTbill from "../EventDetailsforGSTbill";

import "./DetailEvent.css";
import SelectDropdown from "./SelectDropdown";
const items = [
  {
    id: "1",
    floor: "Ground Floor",
  },
  {
    id: 2,
    floor: "first Floor",
  },
  {
    id: 3,
    floor: "Second Floor",
  },
  {
    id: 4,
    floor: "Above Second Floor",
  },
];
function DetailEvent() {
  const context = useContext(AppContext) 
  const location = useLocation();
  const [showModal, setShow] = useState(false);
  const [Time, setTime] = useState(false);
  const [date, setDate] = useState(false);
  const [Floor, setFloor] = useState("");
  const [totalGST, setTotalGST] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showGST, setShowGST] = useState(true);
  const [subtotal, setSubtotal] = useState(0);
  const [payment, setPayment] = useState('cash');
  const [TotalTransportCharge, setTotalTransportCharge] = useState(0);
  const [Data, setData] = useState([]);
  const [eventEndTime, setEventEndTime] = useState();
  const [eventStartTime, setEventStartTime] = useState(new Date());
  const [eventSetupTime, setEventSetupTime] = useState();
  const [venue, setVenue] = useState();
  const [Landmark, setLandmark] = useState();
  const [showComp, setShowComp] = useState(false);
  const [SpecialInstructions, setSpecialInstructions] = useState();
  const [sendAllData, setSendAllData] = useState();
  const [eventType, setEventType] = useState('');
  const [eventType_id, setEventType_id] = useState('');
  const [Guest, setGuest] = useState('') 
  const [num_of_kids,setNum_of_kids] = useState('')
  const [google_location,setGoogle_location] = useState(context.google_location[0]?.formatted_address)
  const [userLat_Lng,setLat_Lng] = useState('')
  const [distance,setDistance] = useState('')
  const [playTime,setPlayTime] = useState('')

const getSelectedValue = (data,id) =>{
  setEventType(data)
  setEventType_id(id)
}
  const onSubmit = () => {
    let EnqData = {
        eventStartTime: eventStartTime,
        eventEndTime: eventEndTime,
        eventSetupTime: eventSetupTime,
        Floor: Floor,
        Landmark: Landmark,
        SpecialInstructions: SpecialInstructions,
        Data: Data,
        subtotal: subtotal,
        TotalTransportCharge: TotalTransportCharge,
        totalAmount: totalAmount,
        totalGST: totalGST,
        payment:payment,
        eventType:eventType,
        eventType_id:eventType_id,
        Guest:Guest,
        venue:venue,
        num_of_kids:num_of_kids,
        google_location:google_location,
        userLat_Lng:userLat_Lng,
        distance:distance,
        playTime:playTime
       
      };
      setSendAllData(EnqData)
    console.log("alldata", 
        sendAllData
    );
  };
  const handleClose = () => {
    setShow(false);
    setShowModalOuter(false);
  };

  useEffect(() => {
    let startTime = new Date();
    startTime.setHours(10, 0, 0);
    setEventStartTime(startTime);

    let endTime = new Date();
    endTime.setHours(2, 0, 0);
    setEventEndTime(endTime);

    let setupTime = new Date();
    setupTime.setHours(9, 0, 0);
    setEventSetupTime(setupTime);
  }, []);

  const handleShow = () => {
    setShow(true);
  };
  const [showModalOuter, setShowModalOuter] = useState(false);

  const handleShowModal = () => setShowModalOuter(true);
  const navigate = useNavigate();
  const lgn = (value) => {
    context.getValue(value)
    navigate("/EventDetailsforGSTbill");
  };

  const gotoLocationPage = () => {
    navigate("/GoogleLocationComponent");
  };

  useEffect(() => {
    getCart(context.userData)
      .then((response) => {
        console.log(response, "CartData");
        setData(response?.data);
        let total_price = 0;
        for (let i = 0; i < response?.data.length; i++) {
          total_price =
            parseInt(total_price) +
            parseInt(response?.data[i]?.rent) *
              parseInt(response?.data[i]?.qty);
        }
        setTotalAmount(total_price);
        setSubtotal(total_price);
        console.log(total_price, "totalAmount totalAmount");
      })
      .catch((err) => {
        alert("Warning", "Network error");
      });
  }, []);

  const paymentMode = (value, i) => {
    console.log("value", value);
    setPayment(value)
    if (value === "Cheque" || value === "Online") {
      setTotalGST(parseInt(subtotal) * (18 / 100));
      setTotalAmount(
        parseInt(subtotal) * (18 / 100) +
          parseInt(subtotal) +
          parseInt(TotalTransportCharge)
      );
      setShowGST(true);
    } else {
      setTotalAmount(parseInt(subtotal) + parseInt(TotalTransportCharge));
      setShowGST(true);
      setTotalGST(0);
    }
    console.log("totalGST------------", TotalTransportCharge);
  };

  return (
    <>
   {showComp == true ? <EventDetailsforGSTbill EnqData={sendAllData}/> : <div>
      <div>
        <Header title={"Event Details"} />
      </div>

      <div>
        <div
          style={{
            backgroundColor: "#eee",
            marginTop: "2%",
            marginLeft: "4%",
            marginRight: "4%",
          }}
        >
          <div>
            <div className="box">
              <div className="boxInput">
                <div className="boxRow">
                  <div className="boxCell">
                    <text>Event Start:</text>
                  </div>
                 
                  <div onClick={() => setDate(true)} className="boxCell22">
                    <text style={{fontSize:"5px"}}>
                      {" "}
                      <DateTimePicker />
                    </text>
                    {/* <text >(Mon)</text> */}
                  </div>
                  <div onClick={() => setTime(true)} className="boxCell33">
                    <text>
                      <CustomTimePicker Defaultdate={eventStartTime} />
                    </text>
                  </div>
                  
                 
                </div>
              </div>
              <hr style={{ width: "99%", margin: "auto" }} />
              <div className="boxInput">
                <div className="boxRow">
                  <div className="boxCell">
                    <text>Event End:</text>
                  </div>
                  <div className="boxCell22">
                    <text>
                      {" "}
                      <DateTimePicker />
                    </text>
                    {/* <text >(Mon)</text> */}
                  </div>
                  <div className="boxCell33">
                    <CustomTimePicker Defaultdate={eventEndTime} />
                  </div>
                </div>
              </div>
              <hr style={{ width: "99%", margin: "auto" }} />
              <div className="boxInput">
                <div className="boxRow">
                  <div className="boxCell">
                    <text>Setup:</text>
                  </div>
                  <div className="boxCell22">
                    <text>
                      {" "}
                      <DateTimePicker />
                    </text>
                    {/* <text >(Mon)</text> */}
                  </div>
                  <div className="boxCell33">
                    <CustomTimePicker Defaultdate={eventSetupTime} />
                  </div>
                </div>
              </div>
              <hr style={{ width: "99%", margin: "auto" }} />
              <div className="boxInput">
                <div className="boxRow">
                  <div className="boxCell">
                    <text># of Guest:</text>
                  </div>
                  <div className="boxCell22">
                    <div style={{ width: "50%", height: "60%" }}>
                      <input
                        style={{ border: "none", width: "70%" }}
                        onChange={(e) => setGuest(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
    
              <hr style={{ width: "99%", margin: "auto" }} />
              <div className="boxInput">
                <div className="boxRow">
                  <div className="boxCell">
                    <text>Event Type:</text>
                  </div>
                  <div className="boxCell22">
                    <div style={{ width: "150%", height: "60%" }}>
                      <SelectDropdown getSelectedValue={getSelectedValue}/>
                      {/* <input
                        style={{ border: "none", width: "70%" }}
                        onChange={(e) => setSpecialInstructions(e.target.value)}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>


            </div>

            <div className="box">
              <div className="boxInput">
                <div className="boxRow">
                  <div className="boxCell">
                    <text>Venue:</text>
                  </div>
                  <div >
                      <input
                        style={{ border: "none", width: "70%" }}
                         onChange={(e) => setVenue(e.target.value)}
                      />
                    </div>
                </div>
              </div>
              <hr style={{ width: "99%",height: "60%" }} />
              <div className="boxInput">
                <div className="boxRow" onClick={() => handleShowModal()}>
                  <div className="boxCell">
                    <text>Which Floor is the setup?:</text>
                  </div>
                  <div className="boxCell22">
                    <text>{Floor ? Floor : "Select"} </text>
                  </div>
                </div>
              </div>
              <hr style={{ width: "99%", margin: "auto" }} />
              <div className="boxInput">
                <div className="boxRow">
                  <div className="boxCell">
                    <text>Google Location:</text>
                  </div>
                  <div className="boxCell22" onClick={gotoLocationPage}>
                    <text>{google_location ? google_location : "Select"}</text>
                  </div>
                </div>
              </div>
              <hr style={{ width: "98%", margin: "auto" }} />
              <div className="boxInput">
                <div className="boxRow">
                  <div
                    style={{
                      width: "99%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <text>Landmark:</text>
                    </div>
                    <div style={{ width: "40%", height: "60%" }}>
                      <input
                        style={{ border: "none", width: "70%" }}
                        onChange={(e) => setLandmark(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className='boxContainer'>
                        <div className='.BoxInputboxContainer'>
                            <div className='boxRow'>
                                <div className="boxCell">
                                    <text >Payment Method</text>
                                </div>
                                <div className="radio">
                            
                                <span style={{ marginRight: '0%' }}>
                                    <input type="radio" id="Cheque" name="fav_language" value="Cheque"></input>
                                    <label style={{marginLeft:5}} for="Cheque">Cheque</label></span>
                                
                                        <input type="radio" value="Online" name="Online" /> Online
                                        <input type="radio" value="Cash" name="Cash" /> Cash
                                        <input type="radio" value="UPI" name="UPI" /> UPI
            
                                </div>
                            </div>
                        </div>
                        
                    </div> */}

            <div className="box">
              <div className="boxInput">
                <div className="boxRow">
                  <div className="boxCell">
                    <text>Special Instructions:</text>
                  </div>
                  <div className="boxCell22">
                    <div style={{ width: "50%", height: "60%" }}>
                      <input
                        style={{ border: "none", width: "70%" }}
                        onChange={(e) => setSpecialInstructions(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="box">
              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flex: 1,
                  backgroundColor: "white",
                  marginTop: -15,
                  padding: 10,
                }}
                className="paymentSection"
              >
                <span
                  style={{
                    width: "20%",
                    justifyContent: "center",
                    paddingBottom: "1%",
                  }}
                >
                  <text
                    style={{
                      display: "flex",
                      marginBottom: 15,
                    }}
                  >
                    Payment Method:
                  </text>
                  <span style={{ marginRight: "0%" }}>
                    <input
                      type="radio"
                      id="Cheque"
                      name="fav_language"
                      value="Cheque"
                      onClick={() => paymentMode("Cheque")}
                    ></input>
                    <label style={{ marginLeft: 5 }} for="Cheque">
                      Cheque
                    </label>
                  </span>
                </span>
                <span
                  style={{
                    justifyContent: "center",
                    flex: 1,
                    paddingLeft: 10,
                    marginLeft: 80,
                  }}
                >
                  <text
                    style={{
                      display: "flex",
                      marginLeft: "10%",
                      marginBottom: 15,
                      marginTop: 15,
                    }}
                  >
                    {" "}
                  </text>

                  <span style={{ marginRight: "50%" }}>
                    <input
                      type="radio"
                      id="Online"
                      name="fav_language"
                      value="Online"
                      onClick={() => paymentMode("Online")}
                    ></input>
                    <label style={{ marginLeft: 5, marginTop: 4 }} for="Online">
                      Online
                    </label>
                  </span>
                </span>
                <span
                  style={{
                    width: "20%",
                    justifyContent: "center",
                    paddingBottom: "1%",
                  }}
                >
                  <text
                    style={{
                      display: "flex",
                      marginLeft: "10%",
                      marginBottom: 15,
                      marginTop: 35,
                    }}
                  ></text>
                  <span style={{ marginRight: "0%" }}>
                    <input
                      type="radio"
                      id="Cash"
                      name="fav_language"
                      value="Cash"
                      onClick={() => paymentMode("")}
                    ></input>
                    <label style={{ marginLeft: 5 }} for="Cash">
                      Cash
                    </label>
                  </span>
                </span>
                <span
                  style={{
                    justifyContent: "center",
                    flex: 1,
                    paddingLeft: 10,
                    marginLeft: 80,
                    marginTop: 22,
                  }}
                >
                  <text
                    style={{
                      display: "flex",
                      marginLeft: "1%",
                      marginBottom: 15,
                    }}
                  ></text>
                  <span style={{ marginRight: "50%" }}>
                    <input
                      type="radio"
                      id="UPI"
                      name="fav_language"
                      value="UPI"
                      onClick={() => paymentMode("")}
                    ></input>
                    <label style={{ marginLeft: 5 }} for="UPI">
                      {" "}
                      UPI
                    </label>
                  </span>
                </span>
              </div>

              {/* <span style={{ marginRight: -80 }}></span> */}
            </div>

            <div className="box">
              <div className="boxInput">
                <div className="gameSection">
                  <div className="boxRow33">
                    <div className="boxCell">
                      <text>Games</text>
                    </div>
                  </div>
                  {Data.map((item) => {
                    return (
                      <div className="boxRow33">
                        <div className="ImageboxCell">
                          <img
                            src={item.image}
                            style={{ width: "175px", height: "100px" }}
                          />
                        </div>
                        <div className="imageText">
                          <div>
                            <div>
                              <text>{item.name}</text>
                            </div>
                            <div>
                              <text>
                                {item.quantity} * {"₹"}
                                {item.rent}
                              </text>{" "}
                            </div>
                          </div>

                          <div>
                            <text>
                              {"₹"}
                              {item.price}
                            </text>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <hr style={{ width: "99%", margin: "auto" }} />

                  {/* <div  className='buttondiv'>
                                    <Link to = "/editgames" style={{ textDecoration: 'none' }}>
                                        <button className='buttonText'>Edit Games</button>
                                        </Link>
                                    </div>  */}
                </div>
              </div>
            </div>
            <div className="box">
              <div className="boxInput">
                <table className="boxInputTable">
                  <tr className="tableboxRow">
                    <td className="tableboxCell">Sub Total </td>
                    <td className="tableboxCell22">
                      {"₹"}
                      {totalAmount}
                    </td>
                  </tr>
                  <tr className="tableboxRow">
                    <td className="tableboxCell">Transport Charges </td>
                    <td className="tableboxCell22">
                      {"₹"}
                      {TotalTransportCharge}
                    </td>
                  </tr>
                  {/* <tr  className="tableboxRow">
                                        <td  className="tableboxCell">Payment Mode </td>
                                        <td  className="tableboxCell22">Online</td>
                                    </tr> */}
                  <tr className="tableboxRow">
                    <td className="tableboxCell">GST Amount </td>
                    <td className="tableboxCell22">
                      {"₹"}
                      {totalGST}
                    </td>
                  </tr>
                  <tr className="tableboxRow" style={{ fontWeight: 700 }}>
                    <td className="tableboxCell">Total Amount</td>
                    <td className="tableboxCell22">
                      {"₹"}
                      {totalAmount}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="bottomSection">
            <div className="bottomText">
              <text>Play Time:</text>
              <text>4 Hours</text>
            </div>
            <div className="bottomText">
              <text>Distance:</text>
              <text></text>
            </div>
            <div className="buttonSection">
              <button
                className="buttonText"
                onClick={() => [handleShow(), onSubmit()]}
              >
                Send Enquiry
              </button>
            </div>
            <Modal style={{ left: 0 }} show={showModal} onHide={handleClose}>
              <Modal.Body>
                <Modal.Header closeButton className="buttonStyle">
                  {/* <Modal.Title>Modal heading</Modal.Title> */}
                </Modal.Header>
                <div style={{ marginTop: "10%", marginBottom: "10%" }}>
                  <div style={{ marginLeft: "32%", marginRight: "32%" }}>
                    <text> Do you need GST bill ? </text>
                  </div>
                  <br></br>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                   
                      {" "}
                      <div onclick={()=> context.getValue(null)}><button onClick={()=>[setShowComp(true),context.getValue(null)]} className="GSTbill">
                        {" "}
                        Yes{" "}
                      </button></div>
                    
                      <button onClick={()=>lgn('value')} className="GSTbill">
                      {" "}
                      No
                    </button>
                  </div>
                  
                </div>
              </Modal.Body>
              {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                    Save Changes
                    </Button>
                    </Modal.Footer> */}
            </Modal>
          </div>
        </div>
      </div>

      <div>
        {" "}
        <Modal show={showModalOuter} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {/* <Button style={{ backgroundColor: "white", color: "black", border: "none" }} onClick={handleShowInner}>
    //                             + Add
    //                         </Button> */}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {items?.map((item) => {
              return (
                <div style={{ borderBottom: "0.3px solid lightgrey" }}>
                  <div
                    onClick={() => [
                      setFloor(item.floor),
                      setShowModalOuter(false),
                    ]}
                  >
                    {item.floor}
                  </div>
                </div>
              );
            })}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
    //                         Save Changes
    //                     </Button> */}
          </Modal.Footer>
        </Modal>
      </div>
    </div>}
    </>
  );
}

export default DetailEvent;
