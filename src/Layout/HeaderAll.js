import React, { useState, useContext } from "react";
import { Modal, Navbar, Offcanvas, Nav } from "react-bootstrap";
import "./HeaderAll.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faX, faFilter, faCartArrowDown, faHome, faSearch, faFileExport } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";
import { useNavigate, Link } from 'react-router-dom';
import { faBars, faBookOpen, faClipboardList, faMoneyCheck, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import AppContext from "../context/AppContext";

export default function HeaderAll(props) {
    const [showModal, setShow] = useState(false);
    const handleClose = () => { setShow(false) }
    const handleShow = () => { setShow(true) }
    const context = useContext(AppContext)
    let data = localStorage.getItem("loginData")
    const [userdata] = useState(JSON.parse(data))
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const navigate = useNavigate();
    const NavSearch = () => {
        navigate('/SearchComponent')
    }

    const removeToken = () => {
        localStorage.removeItem("token")
    }
    const gotoBack = () => {
        window.history.back();
    }
    const gotoHome = () => {
        navigate('/Home')
    }
    const gotoWishList = () => {
        navigate('/WishList')
    }
    const gotoCart = () => {
        navigate('/CartPage')
    }
    const onItemChange = (type) => {
        console.log('.......type.sfasf......', type);
        props.onMenuItemChange(type)
        handleClose()
    }
    const nextGame = () => {

    }
    const previousGame = () => {

    }
    return (
        <>
            {
                props.manageOrder == true ? (
                    <div>
                        <div>
                            <Navbar className="color-nav" variant="light">
                                <button onClick={gotoBack}
                                    style={{
                                        borderWidth: 0, paddingLeft: 20, fontSize: 25,
                                        background: 'rgb(99, 195, 165)'
                                    }} >
                                    <FontAwesomeIcon icon={faArrowLeft} size='10px' style={{
                                        marginLeft: '2%',
                                        color: 'white'
                                    }} />
                                </button>

                                <text
                                    placeholder=" Search.."
                                    style={{

                                        height: 35,
                                        width: "64%",
                                        marginBottom: 5,
                                        marginTop: 5,
                                        borderRadius: 5,
                                        marginRight: '5%',
                                        marginLeft: '10%',
                                        borderWidth: 0, borderColor: "rgb(99, 195, 165)",
                                        color: 'white', fontSize: 25
                                    }}
                                >
                                    {props.title}
                                </text>
                                <div style={{ marginRight: '1%', color: 'white', fontSize: 25 }}>
                                    <button onClick={gotoHome} style={{
                                        borderWidth: 0, paddingLeft: 20, fontSize: 25, color: 'white',
                                        background: 'rgb(99, 195, 165)'
                                    }}>
                                        <FontAwesomeIcon icon={faHome} size='20px' />
                                    </button>
                                </div>
                                <div style={{ marginRight: '1%', color: 'white', fontSize: 25 }}>
                                    <button onClick={gotoWishList} style={{
                                        borderWidth: 0, paddingLeft: 20, fontSize: 25, color: 'white',
                                        background: 'rgb(99, 195, 165)'
                                    }}>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                </div>
                                <div style={{ marginRight: '1%', color: 'white' }}>
                                    <button className="btnSize" onClick={handleShow} style={{
                                        borderWidth: 0, paddingLeft: 20, color: 'white',
                                        background: 'rgb(99, 195, 165)'
                                    }}>
                                        <FontAwesomeIcon icon={faFilter} />
                                    </button>
                                </div>
                                <div style={{ marginRight: '1%', color: 'white' }}>
                                    <button className="btnSize" onClick={gotoCart} style={{
                                        borderWidth: 0, paddingLeft: 20, color: 'white',
                                        background: 'rgb(99, 195, 165)'
                                    }}>
                                        <FontAwesomeIcon icon={faCartArrowDown} />
                                    </button>
                                </div>
                            </Navbar>
                            <div className="modalDiv">
                                <div className="bodyModal">
                                    <Modal style={{ left: 0 }} show={showModal} onHide={handleClose} className='modalStyle' >
                                        <Modal.Body className="modalBody">
                                            <div>
                                                {
                                                    (props.menuItems || []).map((item) => {
                                                        return (
                                                            <div
                                                                style={{ marginBottom: "5%", paddingTop: "5%", paddingBottom: "5%" }}
                                                            >
                                                                <button
                                                                    className="buttonsSelect"
                                                                    // disabled = {props.selectecMenuItems === item} 
                                                                    onClick={() => onItemChange(item)}
                                                                >
                                                                    <text style={{ fontSize: 16, color: "black", fontWeight: "350", }}>{item}</text>
                                                                </button>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                ) : (
                    null
                )
            }

            {
                props.home == true ? (
                    <div>

                        <div >
                            <Navbar className="color-nav" variant="light">
                                <button style={{
                                    borderWidth: 0, paddingLeft: 20, color: 'white', fontSize: 19,
                                    background: 'rgb(99, 195, 165)'
                                }}
                                    onClick={handleShow1}
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
                            <Offcanvas show={show1} onHide={handleClose1}>
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
                ) : (
                    null
                )
            }

            {
                props.all == true ? (
                    <div>
                        <div>
                            <Navbar className="color-nav" variant="light">
                                <button onClick={gotoBack}
                                    style={{
                                        borderWidth: 0, paddingLeft: 20, fontSize: 25,
                                        background: 'rgb(99, 195, 165)'
                                    }} >
                                    <FontAwesomeIcon icon={faArrowLeft} size='10px' style={{
                                        marginLeft: '2%',
                                        color: 'white'
                                    }} />
                                </button>

                                <text
                                    placeholder=" Search.."
                                    style={{

                                        height: 35,
                                        width: "64%",
                                        marginBottom: 5,
                                        marginTop: 5,
                                        borderRadius: 5,
                                        marginRight: '5%',
                                        marginLeft: '10%',
                                        borderWidth: 0, borderColor: "rgb(99, 195, 165)",
                                        color: 'white', fontSize: 25
                                    }}
                                >
                                    {props.title}
                                </text>
                                <div style={{ marginRight: '1%', color: 'white', fontSize: 25 }}>
                                    <button onClick={gotoHome} style={{
                                        borderWidth: 0, paddingLeft: 20, fontSize: 25, color: 'white',
                                        background: 'rgb(99, 195, 165)'
                                    }}>
                                        <FontAwesomeIcon icon={faHome} size='20px' />
                                    </button>
                                </div>
                                <div style={{ marginRight: '1%', color: 'white', fontSize: 25 }}>
                                    <button onClick={gotoWishList} style={{
                                        borderWidth: 0, paddingLeft: 20, fontSize: 25, color: 'white',
                                        background: 'rgb(99, 195, 165)'
                                    }}>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                </div>

                                <div style={{ marginRight: '1%', color: 'white', fontSize: 25 }}>
                                    <button onClick={gotoCart} style={{
                                        borderWidth: 0, paddingLeft: 20, fontSize: 25, color: 'white',
                                        background: 'rgb(99, 195, 165)'
                                    }}>
                                        <FontAwesomeIcon icon={faCartArrowDown} size='25px' />
                                    </button>
                                </div>

                            </Navbar>
                        </div>
                        <div>
                        </div>
                    </div>
                ) : (
                    null
                )
            }

            {
                props.allGames == true ? (
                    <div>
                        <div>
                            <Navbar className="color-nav" variant="light">
                                <button style={{
                                    borderWidth: 0, paddingLeft: 20, color: 'white', fontSize: 19,
                                    background: 'rgb(99, 195, 165)'
                                }}
                                    onClick={handleShow2}
                                >
                                    <FontAwesomeIcon icon={faBars} size='10px' style={{ marginLeft: '1%' }} />
                                </button>

                                <text
                                    placeholder=" Search.."
                                    style={{

                                        height: 35,
                                        width: "64%",
                                        marginBottom: 5,
                                        marginTop: 5,
                                        borderRadius: 5,
                                        marginRight: '5%',
                                        marginLeft: '10%',
                                        borderWidth: 0, borderColor: "rgb(99, 195, 165)",
                                        color: 'white', fontSize: 25
                                    }}
                                >
                                    {props.title}
                                </text>
                                <div style={{ marginRight: '1%', color: 'white', fontSize: 25 }}>
                                    <button onClick={gotoHome} style={{
                                        borderWidth: 0, paddingLeft: 20, fontSize: 25, color: 'white',
                                        background: 'rgb(99, 195, 165)'
                                    }}>
                                        <FontAwesomeIcon icon={faHome} size='20px' />
                                    </button>
                                </div>
                                <div style={{ marginRight: '1%', color: 'white', fontSize: 25 }}>
                                    <button onClick={gotoWishList} style={{
                                        borderWidth: 0, paddingLeft: 20, fontSize: 25, color: 'white',
                                        background: 'rgb(99, 195, 165)'
                                    }}>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                </div>

                                <div style={{ marginRight: '1%', color: 'white', fontSize: 25 }}>
                                    <button onClick={gotoCart} style={{
                                        borderWidth: 0, paddingLeft: 20, fontSize: 25, color: 'white',
                                        background: 'rgb(99, 195, 165)'
                                    }}>
                                        <FontAwesomeIcon icon={faCartArrowDown} size='25px' />
                                    </button>
                                </div>

                                <div style={{ marginRight: '1%', color: 'white', fontSize: 25 }}>
                                    <button style={{
                                        borderWidth: 0, paddingLeft: 20, fontSize: 25, color: 'white',
                                        background: 'rgb(99, 195, 165)'
                                    }}>
                                        <FontAwesomeIcon icon={faSearch} size='25px' />
                                    </button>
                                </div>

                            </Navbar>

                            <Offcanvas show={show2} onHide={handleClose2}>
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
                        <div>
                        </div>
                    </div>
                ) : (
                    null
                )
            }

            {
                props.gameDetails == true ? (
                    <div >
                        <Navbar className="color-nav" variant="light">
                            <button onClick={gotoBack} style={{
                                borderWidth: 0, paddingLeft: 20, fontSize: 20, color: 'white',
                                background: 'rgb(99, 195, 165)'
                            }} >
                                <FontAwesomeIcon icon={faX} size='10px' />
                            </button>

                            <div style={{ marginLeft: 5 }}>
                                <button style={{
                                    borderWidth: 0, fontSize: 25, color: 'white', marginTop: -5,
                                    background: 'rgb(99, 195, 165)'
                                }}>
                                    <text>| </text>
                                </button>
                            </div>
                            <div style={{ marginRight: '0%', color: 'white', fontSize: 25 }}>
                                <button onClick={nextGame} style={{
                                    borderWidth: 0, paddingLeft: 10, fontSize: 25,
                                    color: 'white',
                                    background: 'rgb(99, 195, 165)'
                                }}>
                                    <FontAwesomeIcon icon={faArrowLeft} size='25px' />
                                </button>
                            </div>
                            <div style={{ marginRight: '0%', color: 'white', fontSize: 25, }}>
                                <button style={{
                                    borderWidth: 0, paddingLeft: 5, fontSize: 25,
                                    color: 'white', marginBottom: 5,
                                    background: 'rgb(99, 195, 165)'
                                }}>
                                    <text> | </text>
                                </button>
                            </div>

                            <div style={{ marginRight: '1%', color: 'white', fontSize: 25 }}>
                                <button onClick={previousGame} style={{
                                    borderWidth: 0, paddingLeft: 10, fontSize: 25, color: 'white',
                                    background: 'rgb(99, 195, 165)'
                                }}>
                                    <FontAwesomeIcon icon={faArrowRight} size='25px' />
                                </button>
                            </div>
                            <text
                                placeholder=" Search.."
                                style={{

                                    height: 35,
                                    width: "55%",
                                    marginBottom: 5,
                                    marginTop: 5,
                                    borderRadius: 5,
                                    marginRight: '5%',
                                    marginLeft: '8%',
                                    borderWidth: 0, borderColor: "rgb(99, 195, 165)",
                                    color: 'white', fontSize: 25
                                }}
                            >

                            </text>
                            <div style={{ marginRight: '0%', color: 'white', fontSize: 25 }}>
                                <button onClick={gotoHome} style={{
                                    borderWidth: 0, paddingLeft: 2, fontSize: 25, color: 'white',
                                    background: 'rgb(99, 195, 165)'
                                }}>
                                    <FontAwesomeIcon icon={faHome} size='20px' />
                                </button>
                            </div>
                            <div style={{ marginRight: '0%', color: 'white', fontSize: 25 }}>
                                <button onClick={gotoWishList} style={{
                                    borderWidth: 0, paddingLeft: 2, fontSize: 25, color: 'white',
                                    background: 'rgb(99, 195, 165)'
                                }}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </button>
                            </div>

                            <div style={{ marginRight: '0%', color: 'white', fontSize: 25 }}>
                                <button style={{
                                    borderWidth: 0, paddingLeft: 2, fontSize: 25, color: 'white',
                                    background: 'rgb(99, 195, 165)'
                                }}>
                                    <FontAwesomeIcon icon={faCartArrowDown} size='25px' />
                                </button>
                            </div>

                            <div style={{ marginRight: '0%', color: 'white', fontSize: 25 }}>
                                <button onClick={props.pdfFormat} style={{
                                    borderWidth: 0, paddingLeft: 2, fontSize: 25, color: 'white',
                                    background: 'rgb(99, 195, 165)'
                                }}>
                                    <FontAwesomeIcon icon={faFileExport} size='25px' />
                                </button>
                            </div>
                        </Navbar>
                    </div>
                ) : (
                    null
                )
            }

            {
                props.editGames == true ? (
                    <div>
                        <div>
                            <Navbar className="color-nav" variant="light">
                                <button onClick={gotoBack}
                                    style={{
                                        borderWidth: 0, paddingLeft: 20, fontSize: 25,
                                        background: 'rgb(99, 195, 165)'
                                    }} >
                                    <FontAwesomeIcon icon={faArrowLeft} size='10px' style={{
                                        marginLeft: '2%',
                                        color: 'white'
                                    }} />
                                </button>

                                <text
                                    placeholder=" Search.."
                                    style={{

                                        height: 35,
                                        width: "64%",
                                        marginBottom: 5,
                                        marginTop: 5,
                                        borderRadius: 5,
                                        marginRight: '5%',
                                        marginLeft: '10%',
                                        borderWidth: 0, borderColor: "rgb(99, 195, 165)",
                                        color: 'white', fontSize: 25
                                    }}
                                >
                                    {props.title}
                                </text>
                                <div style={{ marginRight: '1%', color: 'white', fontSize: 25 }}>
                                    <button onClick={gotoHome} style={{
                                        borderWidth: 0, paddingLeft: 20, fontSize: 25, color: 'white',
                                        background: 'rgb(99, 195, 165)'
                                    }}>
                                        <FontAwesomeIcon icon={faHome} size='20px' />
                                    </button>
                                </div>
                                <div style={{ marginRight: '1%', color: 'white', fontSize: 25 }}>
                                    <button onClick={gotoWishList} style={{
                                        borderWidth: 0, paddingLeft: 20, fontSize: 25, color: 'white',
                                        background: 'rgb(99, 195, 165)'
                                    }}>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                </div>

                                <div style={{ marginRight: '1%', color: 'white', fontSize: 25 }}>
                                    <button onClick={gotoCart} style={{
                                        borderWidth: 0, paddingLeft: 20, fontSize: 25, color: 'white',
                                        background: 'rgb(99, 195, 165)'
                                    }}>
                                        <FontAwesomeIcon icon={faCartArrowDown} size='25px' />
                                    </button>
                                </div>
                                <div style={{ marginRight: '1%', color: 'white', fontSize: 25 }}>
                                    <button onClick={props.show} style={{
                                        borderWidth: 0, paddingLeft: 20, fontSize: 25, color: 'white',
                                        background: 'rgb(99, 195, 165)'
                                    }}>
                                                                        <FontAwesomeIcon icon={props.icon_name} size='25px' />
                                    </button>
                                </div>


                            </Navbar>
                        </div>
                        <div>
                        </div>
                    </div>
                ):(
                    null
                )
            }
        </>
    );
}
