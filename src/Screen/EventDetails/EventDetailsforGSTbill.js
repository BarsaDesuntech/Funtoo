import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faCross, faHouse, faX } from '@fortawesome/free-solid-svg-icons'
import { Modal, Button } from "react-bootstrap";
import { useLocation, useNavigate } from 'react-router-dom';
import './EventDetailsforGSTbill.css'
import EventDetHeader from './EventDetHeader'
import Card from 'react-bootstrap/Card';
import { placeOrder } from '../../services/APIServices';
import AppContext from '../../context/AppContext';
export default function EventDetailsforGSTbill(props) {
  const location = useLocation()
  let enqData = props.EnqData
  
  let data = localStorage.getItem('loginData')
  let data2 = JSON.parse(data)
  
  const context = useContext(AppContext)
  const [name, setName] = useState("");
  const [showModal, setShow] = useState(false);
  const [Mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [CompanyName, setCompanyName] = useState(data2.company_name);
  const [GSTnumber, setGSTnumber] = useState(data2.gstin);
  const [billingAddress, setBillingAddress] = useState(data2.billing_address);
  const [Alt_Person_array, setAlt_Person_array] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [showSection, setShowSection] = useState(false)
  const [ContactNumber, setContactNumber] = useState(false);
  const [EmailAddress, setEmailAddress] = useState(data2.email) 
  const [showNO, setShowNO] = useState(data2.mobile);
  const [enpuiryData, setEnpuiryData] = useState({ enqData })
  const [id, setId] = useState(context.userData)
  const [localData] = useState(data)
  const [showGstSection , setShowGstSection] = useState(false)
  const handleClose = () => { setShow(false) }
  const handleShow = () => { setShow(true) }
  const modalhandleClose = () => { setModalShow(false) }
  const modalHandleShow = () => { setModalShow(true) 
    
  }
  console.log(context.google_location, "slllllsss");
  const navigate = useNavigate();
  const lgn = () => {
    navigate('/Home')
  }
  console.log('jssssss',showNO)
  const confirm = () => {
    // alert('')
    navigate('/manageOrder')
  }

useEffect(()=>{
  console.log(GSTnumber,"GSTnumberGSTnumberGSTnumberGSTnumber")
   if( GSTnumber == null){
    setShowGstSection(true)
   }
},[])

  const onSubmit = () => {
    console.log("click")
    let data = {
      // Enquiry_data : enpuiryData.enqData,
      CompanyName: CompanyName,
      GSTnumber: GSTnumber,
      billingAddress: billingAddress,
      ContactNumber: ContactNumber,
      EmailAddress: EmailAddress,
      name: name,
      phone: Mobile,
      email: email,
      reviewer_id: context.LoginData.cust_code,
      name: context.LoginData.name,
      type: 'user',
      comment: 'order enquiry created',
       mobile: context.LoginData.mobile,
      customer_id: id,
      data: props.EnqData?.Data,
      floor: props.EnqData?.Floor,
      Landmark: props.EnqData?.Landmark,
      payment: props.EnqData?.payment,
      eventType: props.EnqData?.eventType,
      eventType_id: props.EnqData?.eventType_id,
      SpecialInstructions: props.EnqData?.SpecialInstructions,
      TotalTransportCharge: props.EnqData?.TotalTransportCharge,
      eventEndTime: props.EnqData?.eventEndTime,
      eventSetupTime: props.EnqData?.eventSetupTime,
      eventStartTime: props.EnqData?.eventStartTime,
      // enqData : JSON.stringify(props.EnqData),
      subtotal: enpuiryData.enqData.subtotal,
      grand_total: enpuiryData.enqData.totalAmount,
      grand_total: enpuiryData.enqData.totalGST,
      line_items: "2",
      event_details: "data",
      Guest: props.EnqData?.Guest,
      venue: props.EnqData?.venue,
      num_of_kids: props.EnqData?.num_of_kids,
      google_location: props.EnqData?.google_location,
      userLat_Lng: props.EnqData?.userLat_Lng,
      distance: props.EnqData?.distance,
      playTime:props.EnqData?.playTime,
    }
    placeOrder(data).then((res) => {
      if (res.is_success) {
        console.log(res, "res");
      }
    }).catch((err) => {
      // console.log(err);
    })

  }

  const gotoSave = () => {
    setShowSection(true)
    //  console.log('...................', AltPerson_name)
    if (name == '') {
      alert('Name is empty')
    }

    var format = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (format.test(email) === false) {
      alert('Invalid Email Id')
      setEmail("")
    }
    var Phone_No_Validformat = /^[1-9]{1}[0-9]{9}$/;
    if (Phone_No_Validformat.test(Mobile) === false) {
      alert('Invalid Phone No.')
      setMobile("")
    }
    let data = {
      name: name,
      mobile: Mobile,
      email: email
    }
    Alt_Person_array?.push(data)
    setAlt_Person_array(Alt_Person_array)
    setName('')
    setEmail('')
    setMobile('')
    setShow(false)

    console.log(Alt_Person_array, "dddddddddddddddddddddd");
  }

  return (
    <div style={{ backgroundColor: '#eee', flex: 1 }}>
      <EventDetHeader />



      {context.showField == 'value' ? <> 
      <div style={{
        backgroundColor: 'white', marginLeft: '5%', marginRight: '5%', borderBottom: '1px solid #ddd'
      }}>


        <div class="d-flex" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #ddd', marginTop: '3%'
        }}>
          <div class="p-2 flex-fill" style={{ width: '50%', marginLeft: 5 }}>
            <text style={{ float: 'left', marginLeft: 8 }}> Contact Number: </text>
          </div>

          <div class="p-2 flex-fill" style={{ width: '50%' }}>
            <input style={{ borderWidth: 0, width: 100 ,color:"black"}} type='number'  onChange={(e) => setContactNumber(e.target.value)}></input>
          </div>
        </div>

        <div class="d-flex" style={{
          padding: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #ddd',
        }}>
          <div class="p-2 flex-fill">
            <text style={{ float: 'left', marginLeft: 6 }}> Email Address: {email}</text>
          </div>

          <div class="p-2 flex-fill">
            <input style={{ borderWidth: 0, width: 100 }} onChange={(e) => setEmailAddress(e.target.value)}></input>
          </div>
        </div>

      </div>

        <div style={{
          backgroundColor: 'white', marginLeft: '5%', marginRight: '5%', borderBottom: '1px solid #ddd'
        }}>
          <div class="d-flex" style={{
            padding: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #ddd', marginTop: '5%'
          }}>
            <div class="p-2 flex-fill">
              <text style={{ float: 'left', marginLeft: 10 }}> Alternate Contact Person: </text>
            </div>


            <div class="p-2 flex-fill">
              <button onClick={handleShow} style={{
                border: '2px solid #ddd',
                marginLeft: 3, backgroundColor: 'white',
              }}><FontAwesomeIcon icon={faAdd} /></button>
            </div>

          </div> </div></> : 
          
          
          <>
        <div style={{
          marginTop: '3%',
          backgroundColor: 'white', marginLeft: '5%', marginRight: '5%', borderBottom: '1px solid #ddd'
        }}>
          <div class="d-flex" style={{
            padding: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #ddd',
          }}>
            <div class="p-2 flex-fill" style={{ marginLeft: 2 }}>
              <text style={{ float: 'left', }}> Company Name: </text>
            </div>

            <div class="p-2 flex-fill">
              <input style={{ borderWidth: 0, width: 100 }} value={CompanyName}onChange={(e) => setCompanyName(e.target.value)}></input>
            </div>
          </div>

          <div class="d-flex" style={{
            padding: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #ddd',
          }}>
            <div class="p-2 flex-fill">
              <text style={{ float: 'left', width: 100 }}>GST Number: </text>
            </div>

            <div class="p-2 flex-fill">
              <input style={{ borderWidth: 0, width: 100 }} value={GSTnumber} onChange={(e) => setGSTnumber(e.target.value)}></input>
            </div>
          </div>

          <div class="d-flex" style={{
            padding: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #ddd',
          }}>
            <div class="p-2 flex-fill">
              <text style={{ float: 'left', marginLeft: 4 }}> Billing Address: </text>
            </div>

            <div class="p-2 flex-fill">
              <input style={{ borderWidth: 0, width: 100 }} value={billingAddress} onChange={(e) => setBillingAddress(e.target.value)}></input>
            </div>
          </div>

        </div>

        <div style={{
          backgroundColor: 'white', marginLeft: '5%', marginRight: '5%', borderBottom: '1px solid #ddd'
        }}>


          <div class="d-flex" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #ddd', marginTop: '3%'
          }}>
            <div class="p-2 flex-fill" style={{ width: '50%', marginLeft: 5 }}>
              <text style={{ float: 'left', marginLeft: 8 }}> Contact Number: </text>
            </div>

            <div class="p-2 flex-fill" style={{ width: '50%' }}>
              <input style={{ borderWidth: 0, width: 100 }} value={showNO} onChange={(e) => setContactNumber(e.target.value)}></input>
            </div>
          </div>

          <div class="d-flex" style={{
            padding: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #ddd',
          }}>
            <div class="p-2 flex-fill">
              <text style={{ float: 'left', marginLeft: 6 }}> Email Address: </text>
            </div>

            <div class="p-2 flex-fill">
              <input style={{ borderWidth: 0, width: "50%" }} value={EmailAddress} onChange={(e) => setEmailAddress(e.target.value)}></input>
            </div>
          </div>

        </div>
        {/* /person/ */}
        <div style={{
          backgroundColor: 'white', marginLeft: '5%', marginRight: '5%', borderBottom: '1px solid #ddd'
        }}>
          <div class="d-flex" style={{
            padding: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #ddd', marginTop: '5%'
          }}>
            <div class="p-2 flex-fill">
              <text style={{ float: 'left', marginLeft: 10 }}> Alternate Contact Person: </text>
            </div>


            <div class="p-2 flex-fill">
              <button onClick={handleShow} style={{
                border: '2px solid #ddd',
                marginLeft: 3, backgroundColor: 'white',
              }}><FontAwesomeIcon icon={faAdd} /></button>
            </div>

          </div> </div></>}
      {showSection == true ?
        Alt_Person_array?.map((item) => {
          console.log("item", item)
          return (
            <div style={{
              marginTop: '3%',
              backgroundColor: 'white', marginLeft: '5%', marginRight: '5%', borderBottom: '1px solid #ddd'
            }}>
              <div class="d-flex" style={{
                padding: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #ddd',
              }}>
                <div class="p-2 flex-fill" style={{ marginLeft: 2 }}>
                  <text style={{ float: 'left', }}>Name: </text>
                </div>

                <div class="p-2 flex-fill">
                  <input style={{ borderWidth: 0, width: "30%" }} defaultValue={item.name}></input>
                </div>
              </div>

              <div class="d-flex" style={{
                padding: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #ddd',
              }}>
                <div class="p-2 flex-fill">
                  <text style={{ float: 'left', width: 100, marginLeft: -18 }}> Number: </text>
                </div>

                <div class="p-2 flex-fill">
                  <input style={{ borderWidth: 0, width: "40%" }} defaultValue={item.mobile}></input>
                </div>
              </div>

              <div class="d-flex" style={{
                padding: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #ddd',
              }}>
                <div class="p-2 flex-fill">
                  <text style={{ float: 'left', marginLeft: 4 }}> Email: </text>
                </div>

                <div class="p-2 flex-fill">
                  <input style={{ borderWidth: 0, width: "40%" }} defaultValue={item.email} ></input>
                </div>
              </div>
            </div>
          )
        }) : ""}

      {/* // */}
      <div style={{
        display: "flex", alignItems: "center",
        justifyContent: 'center', backgroundColor: "#eee"
      }}>
        <Card body style={{ width: "60%", height: 100, backgroundColor: "#eee", borderWidth: 0 }}>
          <button onClick={lgn} className="Previous"> Previous </button> <span style={{ width: "15%" }}>    </span>
          <span onClick={() => onSubmit()}> <button className="Previous " onClick={() => modalHandleShow()}> Confirm </button></span>
        </Card>

        {/* <button onClick={lgn} className="Confirm"
    //  style={{backgroundColor:'rgb(99, 195, 165)',marginRight:'10%',marginTop:'3%',
    // borderWidth:0,borderRadius:7,width:'20%',height:40,color:'white'}}
    > Previous </button>
    <button  className="Previous " onClick={ modalHandleShow} 
   
 > Confirm </button> */}
      </div>
      {/* // */}
      <Modal style={{ left: 0, }} show={showModal} onHide={handleClose}>
        {/* <Modal.Header closeButton></Modal.Header>   */}
        <Modal.Body closeButton>
          <div style={{ marginTop: '10%', marginBottom: '10%', marginLeft: '2%', }} >
            <div style={{ display: 'flex', borderBottom: '1px solid #ddd', paddingBottom: 10 }}>
              <text> Name:</text>
              <input style={{ width: '72%', marginLeft: '6%', borderColor: 'white', borderWidth: 0 }} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div style={{ display: 'flex', marginTop: '6%', borderBottom: '1px solid #ddd', paddingBottom: 10 }}>
              <text>Mobile:</text>
              <input style={{ width: '73%', marginLeft: '4%', borderColor: 'white', borderWidth: 0 }} onChange={(e) => setMobile(e.target.value)}></input>
            </div>
            <div style={{ display: 'flex', marginTop: '8%', borderBottom: '1px solid #ddd', paddingBottom: 10 }}>
              <text> Email:</text>
              <input style={{ width: '73%', marginLeft: '6%', borderColor: 'white', borderWidth: 0 }} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', paddingTop: '5%' }}>
              <button onClick={gotoSave} style={{
                backgroundColor: 'rgb(99, 195, 165)',
                color: 'white', width: '35%', borderWidth: 0, borderRadius: 7, height: 35
              }}> Save</button>
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
      {/* {showSection == true ? <div>
        <div>
          <text>
            {name}
          </text>
        </div>
        <div>
          <text>
            {Mobile}
          </text>
        </div>
        <div>
          <text>
            {email}
          </text>
        </div>
      </div> : ""} */}
    
    <Modal style={{ left: 0, }} show={showGstSection} onHide={handleClose}>
    {/* <Modal.Header closeButton></Modal.Header>   */}
    <Modal.Body closeButton>
      <div style={{ marginTop: '10%', marginBottom: '10%', marginLeft: '2%', }} >
        <div style={{ display: 'flex', borderBottom: '1px solid #ddd', paddingBottom: 10 }}>
          <text>Company Name:</text>
          <input style={{ width: '72%', marginLeft: '6%', borderColor: 'white', borderWidth: 0 }} onChange={(e) => setName(e.target.value)}
          >
            
          </input>
        </div>
        <div style={{ display: 'flex', marginTop: '6%', borderBottom: '1px solid #ddd', paddingBottom: 10 }}>
          <text>GST Number:</text>
          <input style={{ width: '73%', marginLeft: '4%', borderColor: 'white', borderWidth: 0 }} onChange={(e) => setMobile(e.target.value)}></input>
        </div>
        <div style={{ display: 'flex', marginTop: '8%', borderBottom: '1px solid #ddd', paddingBottom: 10 }}>
          <text> Billing Address:</text>
          <input style={{ width: '73%', marginLeft: '6%', borderColor: 'white', borderWidth: 0 }} onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', paddingTop: '5%' }}>
          <button onClick={gotoSave} style={{
            backgroundColor: 'rgb(99, 195, 165)',
            color: 'white', width: '35%', borderWidth: 0, borderRadius: 7, height: 35
          }}> Save</button>
        </div>
      </div>
    </Modal.Body>
    </Modal>


      <Modal style={{ left: 0 }} show={modalShow} onHide={modalhandleClose}>
        {/* <Modal.Header closeButton></Modal.Header>   */}
        <Modal.Body>
          <div style={{ marginTop: '8%', marginBottom: '8%' }}>
            <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center' }}>
              <text style={{ fontWeight: 'bold', fontSize: 18 }}> Thank You for Yoru Query ! </text>
            </div>
            <div style={{ marginTop: '3%', marginLeft: '3%', marginRight: '3%' }}>
              <text style={{ marginTop: 2 }}>
                Your Query Form  will be review shortly and a response will be made to you.
                We appreciate your patience. Let us know if there is anything else we can help you with.
              </text>
            </div>
            <div style={{
              display: 'flex', alignItems: "center", justifyContent: 'center',
              marginTop: '5%'
            }}>
              <button onClick={confirm} className='manageEnq' > Manage Enquiry </button>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={modalhandleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={modalhandleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>


    </div>
  )
}
