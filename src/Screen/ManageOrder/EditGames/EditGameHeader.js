import React,{ useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./EditGameHeader.css";
import Icon from "@mui/material/Icon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faArrowRightArrowLeft, faBackward, faBalanceScale, faBars, faBookOpen, faCartArrowDown, faClipboardList, faHome, faListCheck, faMoneyCheck, faRightFromBracket, faUser,faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";
import { faHeart, faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from 'react-router-dom'
import { color, fontSize } from "@mui/system";


export default function Header(props) {
  const [showModal, setShow] = useState(false); 
  const handleClose = () => 
{  setShow(false)}
  const handleShow = () => {setShow(true)}
  const navigate = useNavigate();
  const lgn = () => {
      navigate('/Home')
  }
  const lgnn = () => {
    navigate('/WishList')
}
  return (
    <div>

      <div >
        <div className="color-nav" variant="light">
          <div className="backArrowSec">
              <button onClick={props.goback} 
              style={{borderWidth:0,paddingLeft:20,fontSize:25,
              background:'rgb(99, 195, 165)'}} >
              <FontAwesomeIcon icon={faArrowLeft} size='10px' style={{marginLeft:'2%',
              color:'white'}} />
              </button>
          </div>
          <div className="headerSect">
            <text
              placeholder=" Search.."
              className="headerSubSect"
              style={{
                marginBottom: 5,
                marginTop: 5,
                borderRadius: 5,
                marginRight: '5%',
                marginLeft: '10%',
                borderWidth: 0, borderColor: "rgb(99, 195, 165)",
                color:'white',
              }}
            >
              {props.title}
            </text>
          </div>        
          <div className="btnSect">
              <div 
              className="btnSubSect"
              >
                  <button onClick={lgn} 
                  className="btnPst"               
                    >
                  <FontAwesomeIcon icon={faHome} size='20px' />
                  </button>
              </div>
              <div
              className="btnSubSect" 
              >
                  <button onClick={lgnn}  className="btnPst"                 
                    >
                  <FontAwesomeIcon icon={faHeart} />
                  </button>
              </div>          
              <div 
              className="btnSubSect"
              >
                  <button                  
                  className="btnPst"
                    >
                  <FontAwesomeIcon icon={faCartArrowDown} size='25px' />
                  </button>
            </div>
              <div className="btnSubSect"
              >
                  <button onClick={props.show} 
                   className="btnPst"
                    >
                  <FontAwesomeIcon icon={props.icon_name} size='25px' />
                  </button>
            </div>
          </div>
        </div>
      </div>
      <div>
      <Modal.Body>          
   <div style={{marginBottom:"5%"}}>
              
    <div className="Modaltext1">

    </div>
    
   </div>
          
          </Modal.Body> 
      
      </div>
    </div>
  );
}