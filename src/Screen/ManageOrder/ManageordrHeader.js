import React,{ useState ,useEffect} from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import Icon from "@mui/material/Icon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faFilter, faArrowRight, faArrowRightArrowLeft, faBackward, faBalanceScale, faBars, faBookOpen, faCartArrowDown, faClipboardList, faHome, faListCheck, faMoneyCheck, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";
import { faHeart, faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from 'react-router-dom'
import { color, fontSize } from "@mui/system";
import "./ManageordrHeader.css"
import { GetOrderEnquiry } from "../../services/OrderService";

export default function Header(props) {
  const [showModal, setShow] = useState(false); 
  const [manageOrederData,setManageOrederData] = useState([])

  const handleClose = () => {  setShow(false)}
  const handleShow = () => {setShow(true)}
  const navigate = useNavigate();
  const lgn = () => {
      navigate('/Home')
  }
  const lgnn = () => {
    navigate('/WishList')
}

const onItemChange = (type) =>{
  console.log('.......type.sfasf......',type);
  props.onMenuItemChange(type)
  handleClose()
}
  return (
    <div>    
        <Navbar className="navCont" variant="light">
          <div className="navCont">
            <div>
            <button onClick={lgn} 
                style={{borderWidth:0,paddingLeft:20,fontSize:25,
                background:'rgb(99, 195, 165)'}} >
                <FontAwesomeIcon icon={faArrowLeft} size='10px' style={{marginLeft:'2%',
                color:'white'}} />
            </button>
            </div>
            <div className="textDiv">
              <text
              placeholder=" Search.."
              style={{
                // height: 35,
                // width: "64%",
                marginBottom: 5,
                marginTop: 5,
                borderRadius: 5,
                marginRight: '5%',
                marginLeft: '10%',
                // borderWidth: 0, borderColor: "rgb(99, 195, 165)",
                color:'white',
                // fontSize:25
              }}
              className="HeaderSubTitle"
            >
            Manage Order
              </text>
            </div>
            <div className="btnDiv">
              <div style={{marginRight:'1%',color:'white'}}>
                <button onClick={lgn} className="btnSize"
                  style={{borderWidth:0,paddingLeft:20,color:'white',
                  background:'rgb(99, 195, 165)'}}>
                <FontAwesomeIcon icon={faHome}  />
                </button>
              </div>
              <div style={{marginRight:'1%',color:'white' ,}}>
                  <button className="btnSize"
                  onClick={lgnn} style={{borderWidth:0,paddingLeft:20,color:'white',
                    background:'rgb(99, 195, 165)'
                  }}
                  >
                    <FontAwesomeIcon icon={faHeart}  />
                    </button>
              </div>
              <div style={{marginRight:'1%',color:'white' }}>
                <button className="btnSize" onClick={handleShow} style={{borderWidth:0,paddingLeft:20,color:'white',
                  background:'rgb(99, 195, 165)'}}>
                <FontAwesomeIcon icon={ faFilter} />
                </button>
              </div>         
              <div style={{marginRight:'1%',color:'white'}}>
                <button className="btnSize" style={{borderWidth:0,paddingLeft:20,color:'white',
                  background:'rgb(99, 195, 165)'}}>
                <FontAwesomeIcon icon={faCartArrowDown} />
                </button>
              </div>
            </div>
    </div>
  </Navbar>
      <div className="modalDiv">       
       <div className="bodyModal">
          <Modal style={{left:0}} show={showModal} onHide={handleClose} className='modalStyle' >         
            <Modal.Body className="modalBody">          
                  <div 
                  // style={{marginBottom:"5%",paddingTop:"10%", paddingBottom:"5%"}} 
                  >
                    {
                          (props.menuItems || [] ).map((item)=>{
                            // console.log("THIS IS ITEMS ;';;;", item)
                            return (
                              <div 
                              style={{ marginBottom: "5%" ,paddingTop:"5%", paddingBottom:"5%"}}
                              >
                                <button 
                                    className="buttonsSelect"  
                                    // disabled = {props.selectecMenuItems === item} 
                                    onClick={()=>onItemChange(item)}                       
                                    >
                                    <text style={{ fontSize: 16, color:"black",fontWeight:"350" ,}}>{item}</text>
                                </button>  
                            </div>
                            )
                          })
                    }
                      
                   
{/*                    
                      <div style={{ marginBottom: "5%", paddingTop:"10%", paddingBottom:"5%" }}>
                      <button className="buttons">
                      <text style={{fontSize:16}}>Pending </text>
                    </button></div>
      
                  
                     
                      <div style={{ marginBottom: "5%",paddingTop:"10%", paddingBottom:"5%" }}>
                      <button className="buttons">
                      
                          <text style={{  fontSize: 16}}>Confirmed</text>
                      </button>
                      </div>
                   
                      <div style={{marginBottom:"5%", paddingTop:"10%", paddingBottom:"5%"}}>
                      <button className="buttons">
                      
                          <text style={{  fontSize: 16 }}>Cancelled</text>
                      </button>
                    </div>
                    
                      <div style={{marginBottom:"5%", paddingTop:"10%", paddingBottom:"5%"}}>
                      <button className="buttons">
                          <text style={{  fontSize: 16 }}>Closed</text>
                    </button>
                    </div>
     */}
                  </div>

                  {/* <ManageMenuOrderModel /> */}
            
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
  );
}