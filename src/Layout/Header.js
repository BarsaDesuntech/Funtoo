import React, { useContext, useState } from "react";
import { Nav, Navbar, Container, Offcanvas } from "react-bootstrap";
import "./Header.css";
import Icon from "@mui/material/Icon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faBars, faBookOpen, faCartArrowDown, faClipboardList, faHome, faListCheck, faMoneyCheck, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";
import { faHeart, faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from 'react-router-dom'
import AppContext from "../context/AppContext";


export default function Header() {
  const context = useContext(AppContext)
  let data = localStorage.getItem("loginData")
  const [userdata] = useState(JSON.parse(data))

  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const NavSearch = () => {
    navigate('/SearchComponent')
  }

  const removeToken = () => {
    localStorage.removeItem("token")
  }

  return (
    <div>

      <div >
        <Navbar className="color-nav" variant="light">
          <button style={{
            borderWidth: 0, paddingLeft: 20, color: 'white', fontSize: 19,
            background: 'rgb(99, 195, 165)'
          }}
            onClick={handleShow}
          >
            <FontAwesomeIcon icon={faBars} size='10px' style={{ marginLeft: '1%' }} />
          </button>

          <input
            placeholder=" Search.."
            onClick={() => NavSearch()}
            style={{

              height: 35,
              width: "100%",
              marginBottom: 5,
              marginTop: 5,
              borderRadius: 5,
              marginRight: '3%',
              marginLeft: '2%',
              borderWidth: 0, borderColor: "rgb(99, 195, 165)",
            }}
          >

          </input>
          <div style={{ fontSize: 20, position: "relative", right: "6%" }}>
            <Link style={{ color: 'gray' }} to={"/CartPage"}>  <FontAwesomeIcon icon={faCartArrowDown} size='15px' /></Link>
          </div>
        </Navbar>
      </div>
      <div>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Title>
            <span
              style={
                {
                  display: 'flex', flex: 1,
                }
              }>
              <button onClick={() => this.routeChange} style={{
                alignItems: 'center', justifyContent: 'center', display: 'flex',
                width: '100%', borderWidth: 0, borderBottomWidth: 0, backgroundColor: 'rgb(99, 195, 165)'
              }}>
                <span style={{
                  width: "50%",
                }}>
                  <img style={{
                    display: 'flex',
                    marginLeft: '1%', marginBottom: 15, backgroundColor: "black",


                  }} />
                  <div style={{
                    width: 100, height: 100, backgroundColor: 'rgb(99, 195, 165)',
                    borderRadius: "50%", backgroundColor: 'white'
                  }}>
                    <FontAwesomeIcon style={{
                      alignSelf: "center",
                      alignItems: "center", justifyContent: "center", paddingTop: 25, color: 'rgb(99, 195, 165)',

                    }} icon={faUser} size='2x' />


                  </div>

                </span>
                <span>
                  <div style={{ width: "100%" }}>
                    <text style={{
                      display: "flex", marginTop: "15px", marginLeft: "-30%", marginBottom: 15, color: 'white'
                    }}>
                      Name: {userdata.name}
                    </text>
                    <text style={{
                      display: "flex", marginLeft: "-30%", marginBottom: 15, color: 'white'
                    }}>Address : {userdata.billing_address} </text>
                    <text style={{
                      display: "flex", marginLeft: "-30%", marginBottom: 15, color: 'white'
                    }}>mobile : {userdata.mobile} </text>
                  </div>
                </span>
                <span style={{

                  justifyContent: "flex-end",
                  alignItems: "center",
                }}>
                </span>
              </button>

            </span>
          </Offcanvas.Title>

          <Offcanvas.Body>
            <div style={{ marginBottom: "5%" }}>
              <div style={{ marginBottom: "5%" }}>
                <button className="buttonsSelect">
                  <Nav.Link as={Link} to="/Home">
                    <FontAwesomeIcon icon={faHome} size="2x" />
                    <text style={{ marginLeft: 15, fontSize: 22 }}>Home</text>
                  </Nav.Link>  </button>
              </div>
              <div style={{ marginBottom: "5%" }}><button className="buttons">
                <Nav.Link as={Link} to="/Catalogue">
                  <FontAwesomeIcon icon={faBookOpen} size="2x" />
                  <text style={{ marginLeft: 15, fontSize: 22 }}>Catalogue </text>
                </Nav.Link> </button></div>

              <div style={{ marginBottom: "5%" }}>
                <button className="buttons">
                  <Nav.Link as={Link} to="/WishList">
                    <FontAwesomeIcon icon={faHeart} size="2x" />
                    <text style={{ marginLeft: 15, fontSize: 22 }}> Wishlist</text>
                  </Nav.Link></button>
              </div>
              <div style={{ marginBottom: "5%" }}>
                <button className="buttons">
                  <Nav.Link as={Link} to="/manageOrder">
                    <FontAwesomeIcon icon={faMoneyCheck} size="2x" />
                    <text style={{ marginLeft: 15, fontSize: 22 }}> Manage Orders</text>
                  </Nav.Link></button>
              </div>
              <div style={{ marginBottom: "5%" }}>
                <button className="buttons">
                  <Nav.Link as={Link} to="/billing">
                    <FontAwesomeIcon icon={faClipboardList} size="2x" />
                    <text style={{ marginLeft: 30, fontSize: 22 }}> Billings</text>
                  </Nav.Link></button>
              </div>
              <div style={{ marginBottom: "5%" }}>
                <button className="buttons">
                  <Nav.Link as={Link} to="/Payment">
                    <FontAwesomeIcon icon={faMoneyBill1} size="2x" />
                    <text style={{ marginLeft: 20, fontSize: 22 }}> Payments</text>
                  </Nav.Link></button>
              </div>
              <div style={{ marginBottom: "5%" }}>
                <button className="buttons"
                  onClick={removeToken}
                >
                  <Nav.Link as={Link} to="/"><FontAwesomeIcon icon={faRightFromBracket} size="2x" />
                    <text style={{ marginLeft: 31, fontSize: 22 }}>Log out</text></Nav.Link>
                </button>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>

      </div>
    </div>
  );
}