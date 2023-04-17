import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Data from '../SubCatagory/SubCat.json'
import Subcat from '../SubCatagory/SubCat.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './Gamedetails.css'
import { Modal, Button } from "react-bootstrap";
import { faCartArrowDown, faCircleXmark, faHeart, faHouse, } from '@fortawesome/free-solid-svg-icons'
import GameHeader from './GameHeader'
import { Row, Card, Col } from "react-bootstrap";
import Subcatagory from '../SubCatagory/Subcatagory';
import AppContext from '../../context/AppContext';
import context from 'react-bootstrap/esm/AccordionContext';
import Wishlist from '../WishList/WishList'
import { addToCart, addWishList, gamedetails } from '../../services/APIServices';
import { faCirclePlay, faPlus } from '@fortawesome/free-regular-svg-icons';
import ReactPlayer from 'react-player';
import { useRef } from 'react';
import WishListModal from '../WishList/WishListModal';
import { WishlistCategory, WishlistCategoryCreate } from '../../services/WishlistCategoryService';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody
} from 'mdb-react-ui-kit';
import Loader from '../Loader';
import HeaderAll from '../../Layout/HeaderAll';
import ReactToPdf from 'react-to-pdf';
import jsPDF from 'jspdf';


export default function Gamedetails({ countPlus }) {
    const context = useContext(AppContext)
    let location = useLocation();
    const slide = useRef();
    const value = useParams();
    const [arr, setArr] = useState([])
    const [name, setName] = useState(null);
    const [wishlistAdd, setwishlistAdd] = useState('')
    const [gID] = useState(value.gid ?? "");
    const [gameDetailsData, setGameDetailsData] = useState([]);
    const [images, setImages] = useState();
    const [showVideo, setShowVideo] = useState(false);
    const [showModal, setShow] = useState(false);
    const [showModalOuter, setShowModalOuter] = useState(false);
    const [wishListAlert, setWishListAlert] = useState(false);
    const [gameID, setGameID] = useState();
    const [wishListData, setWishListData] = useState();
    const [createwishListData, setCreateWishListData] = useState();
    const [wishListId, setWishListId] = useState();
    const [qty, setQty] = useState(1);
    const [optSmModal, setOptSmModal] = useState(false);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const toggleShow = () => setOptSmModal(!optSmModal);


    const ref = React.createRef();

    const handleChanges = (e) => {
        // setwishlistAdd([...wishlistAdd])
        tmpName = e.target.value;
    }
    let tmpName;



    function wishlistfun() {
        //setwishlistAdd((prevState)=>[...prevState],{wishlistAdd}) 
        setwishlistAdd(wishlistAdd)

    }
    const WishlistCategoryCreatefunc = () => {
        let model = {
            name: wishlistAdd,
            customer_id: context.userData,
            game_id: gID,
        };
        setGameID(model?.customer_id)
        WishlistCategoryCreate(model)
            .then((res) => {
                console.log(res.data[0].id, "res")
                if (res.is_success == true) {
                    setMessage(res.message)
                    toggleShow()

                }


            })
            .catch((error) => {
                alert("Server Error", error.message);
            })
    };
    useEffect(() => {
        setIsLoading(true)
        gamedetails(gID)
            .then((response) => {
                setGameDetailsData(response);
                console.log(response)
                setImages(response?.data?.image)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    function toPdf() {
        const doc = new jsPDF();
        const img = new Image();
        img.src = gameDetailsData?.data?.game[0].image;
        img.onload = function () {
            const width = doc.internal.pageSize.width * 0.8;
            const height = (img.height / img.width) * width;
            doc.addImage(img, 'JPEG', (doc.internal.pageSize.width - width) / 2, 10, width, height);

            doc.setFontSize(20);
            doc.setTextColor(0, 0, 0);
            doc.text(gameDetailsData?.data?.game[0].name, doc.internal.pageSize.width / 2, height + 20, { align: 'center' });

            doc.setFontSize(12);
            doc.setTextColor(0, 0, 0);
            doc.text(`(Product ID:${gameDetailsData?.data?.image[0]?.game_id})`, doc.internal.pageSize.width / 2, height + 25, { align: 'center' });

            doc.setFontSize(10);
            doc.setTextColor(0, 0, 0);
            const descriptionLines = doc.splitTextToSize(gameDetailsData?.data?.game[0].description, 180);
            doc.text(descriptionLines, 20, height + 40);

            const rentY = height + 40 + (descriptionLines.length * 10) + 5;
            const sizeY = rentY + 5;

            doc.setFontSize(12);
            doc.setTextColor(0, 0, 0);
            doc.text(`Rent:${gameDetailsData.data?.game[0]?.rent}`, 20, rentY);

            doc.setFontSize(12);
            doc.setTextColor(0, 0, 0);
            doc.text(`Size:${gameDetailsData.data?.game[0]?.size}`, 20,sizeY);
            doc.save('GameDetails.pdf');
        }
    }

    useEffect(() => {
        setIsLoading(true)
        WishlistCategory(context.userData)
            .then((response) => {
                console.log(response, "response.................")
                setWishListData(response.data)
                setIsLoading(false)
            })
            .catch((err) => {
                alert("Warning", "Network error");
            })

    }, [])

    const handleShow = () => setShowModalOuter(true);

    const handleShowAlert = () => {
        setWishListAlert(true)
        setShowModalOuter(false);
    }

    const handleClose = () => {
        setShow(false)
        setShowModalOuter(false);
        setWishListAlert(false);
    }

    const handleShowInner = () => {
        setShow(true);
        setShowModalOuter(false);
    }

    const addToWishlist = () => {
        setWishListAlert(false);
        let customer_id = context.userData;
        addWishList(
            {
                game_id: gID,
                wishlist_id: wishListId,
                customer_id
            }
        )
            .then((response) => {
                setWishListAlert(false);
                setCreateWishListData(response.data)
                setMessage(response.message)
                toggleShow()
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const WishlistCreateHandle = () => {

        return (
            <>
                <Modal show={wishListAlert} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Are you sure?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to add this game?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            No
                        </Button>
                        <Button variant="primary" onClick={() => addToWishlist()}>
                            Yes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    };



    const addToCartlist = () => {
        let data = {

            game_id: gID,
            cust_id: context.userData,
            price: gameDetailsData?.data?.game[0].rent,
            qty: gameDetailsData?.data?.game[0].quantity,

        };

        addToCart(data)
            .then((response) => {
                console.log(response, "res")
                if (response.is_success) {
                    setMessage(response.message)
                    toggleShow()
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const WishListModal = () => {
        return (
            <>
                <Modal show={showModalOuter} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <Button style={{ backgroundColor: "white", color: "black", border: "none" }} onClick={handleShowInner}>
                                + Add
                            </Button>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body >{wishListData?.map((item) => {
                        //    console.log(item.id,"highglygfglfuyufrifyifiy");
                        return <div style={{ borderBottom: "0.3px solid lightgrey" }}
                            onClick={() => handleShowAlert()}>
                            <div onClick={() => [setWishListId(item.id)]}>{item.name}
                            </div>
                        </div>
                    })}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        {/* <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button> */}
                    </Modal.Footer>
                </Modal>
            </>
        )
    }


    //setArr((prevState)=>[...prevState,{...product}])}}

    const navigate = useNavigate();
    const lgn = () => {
        navigate('/EventDetailsforGSTbill')
    }
    return (
        <>
            {isLoading == true ? <div style={{ height: '100vh', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                <Loader /></div> :
                <div style={{ width: '100%' }} ref={ref}>
                    {/* <GameHeader /> */}
                    {/* <ReactToPdf targetRef={ref} filename="mypdf.pdf">
                        {({ toPdf }) => ( */}
                    <HeaderAll pdfFormat={() => toPdf()} gameDetails={true} />

                    {/* )}
                    </ReactToPdf> */}
                    <div style={{}}>
                        {showVideo == true ?
                            <>
                                <div style={{ width: '100%', display: 'flex' }}>
                                    <ReactPlayer url={gameDetailsData?.data?.game[0].video_file}
                                        playing={true}
                                        volume={1}
                                        ref={slide}
                                        style={{ justifyContent: "center", borderWidth: 5, }}
                                        onPause={true}
                                        width={'100%'}
                                        height={'480px'}
                                        controls={true}
                                    />

                                    <FontAwesomeIcon icon={faCircleXmark}
                                        onClick={() => setShowVideo(false)}
                                        size={'2x'}
                                        color='#000'
                                        style={{ position: 'absolute', right: 10, marginTop: 10 }}
                                    />
                                </div>
                            </>
                            : <img style={{ paddingTop: 15, height: 560, width: "100%" }}
                                src={gameDetailsData?.data?.game[0].image}
                            />}
                    </div>
                    <div >
                        <h5 style={{ paddingTop: 15 }}>{gameDetailsData?.data?.game[0].name}</h5>
                        <text>(Product ID: {gameDetailsData?.data?.image[0]?.game_id})</text>
                        <div style={{}}>
                            <text >{gameDetailsData?.data?.game[0].description}</text>
                        </div>
                    </div>

                    <div style={{
                        width: '100%', display: "flex"
                    }}>
                        {/* image section ================== */}
                        <Row xs={3} md={3} className="g-4" style={{
                            // paddingLeft: 20,
                            // paddingRight: 20, 
                            paddingTop: 15,
                            borderWidth: 0,
                            // display:'flex'
                        }} >
                            {images?.map((a, index) => {
                                // console.log('a length=========', a.length);
                                return (
                                    <Col key={a.id} style={{ width: "20%" }}>
                                        <Card style={{ borderWidth: 1, borderRadius: 0 }}>
                                            <Card.Img
                                                style={{
                                                    alignSelf: "center", paddingTop: 20, borderRadius: 0,
                                                    paddingBottom: 22, paddingLeft: 5, paddingRight: 5,
                                                }}
                                                src={a.image} />
                                        </Card>
                                    </Col>
                                )
                            })}
                            <Col style={{ width: "20%" }}>
                                <Card style={{ borderWidth: 1, borderRadius: 0, }} >
                                    <Card.Img
                                        style={{
                                            alignSelf: "center", paddingTop: 20, borderRadius: 0,
                                            paddingBottom: 22, paddingLeft: 5, paddingRight: 5, borderWidth: 0,
                                        }}
                                        src={gameDetailsData?.data?.game[0].video_thumbnail} />
                                    {/* ref={slide} */}
                                    <FontAwesomeIcon icon={faCirclePlay}
                                        style={{
                                            color: "white",
                                            position: "absolute",
                                            left: "47%",
                                            top: "45%",
                                            fontSize: "32px"
                                        }}
                                        onClick={() => {
                                            setShowVideo(true)
                                            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
                                        }}
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </div>



                    <div style={{ marginTop: 10, marginLeft: 15, marginRight: 15, textAlign: 'left' }}>
                        <text style={{ fontWeight: 'bold', fontSize: 17, marginLeft: 20 }}> Rent:
                            ₹{gameDetailsData.data?.game[0]?.rent}</text>
                    </div>
                    <div style={{ marginTop: 10, marginLeft: 15, marginRight: 15, textAlign: 'left' }}>
                        <text style={{ fontWeight: 'bold', fontSize: 17, marginLeft: 20 }}>Size: {gameDetailsData.data?.game[0]?.size}</text>
                    </div>


                    <div style={{ justifyContent: "space-between", paddingTop: 100 }}>
                        <button className='wishlist'
                            style={{ marginRight: "12%" }}
                            onClick={() => handleShow()}
                        >
                            <FontAwesomeIcon icon={faHeart} />
                            &nbsp;
                            Add to Wishlist </button>

                        <span style={{ width: "200%" }}> </span>
                        <Link >
                            <button className='addCart'
                                // style={{marginLeft:"10%"}}
                                onClick={() => addToCartlist()}
                            >
                                <FontAwesomeIcon icon={faCartArrowDown} />&nbsp;

                                Add to Cart </button>
                        </Link>
                    </div>

                    <Modal style={{ left: 0 }} show={showModal} onHide={handleClose}>
                        <Modal.Body>
                            <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", marginTop: '3%' }} >
                                <h5>Item Added to your Wishlist</h5>
                            </div>
                            <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }} >
                                <input
                                    style={{ width: 280, height: 42, marginTop: '6%', borderRadius: 5, borderWidth: 1 }}
                                    onClick={wishlistfun}
                                    value={wishlistAdd}
                                    //onChange={handleChanges}
                                    onChange={(event) => setwishlistAdd(event.target.value)}
                                    placeholder="Enter Your Wishlist Name"
                                >
                                </input>
                            </div>
                            <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", marginTop: '5%' }} >
                                <Link >
                                    <button onClick={() => [WishlistCategoryCreatefunc(), setShow(false)]}
                                        style={{ width: 100, height: 42, marginTop: '5%', borderRadius: 6, borderWidth: 0, backgroundColor: "rgb(99, 195, 165)" }}>
                                        +Add
                                    </button></Link>
                            </div>

                        </Modal.Body>
                    </Modal>



                    {/* <MDBBtn onClick={toggleShow}></MDBBtn> */}
                    <MDBModal show={optSmModal} tabIndex='-1' setShow={setOptSmModal}>
                        <MDBModalDialog size='sm'>
                            <MDBModalContent>
                                <MDBModalHeader>
                                    <MDBModalTitle>Succes</MDBModalTitle>
                                    <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                </MDBModalHeader>
                                <MDBModalBody>{message}</MDBModalBody>
                                <Link to={"/Home"}><Button style={{ width: "50px", backgroundColor: "gray", border: "none" }}>OK</Button></Link>
                            </MDBModalContent>

                        </MDBModalDialog>
                    </MDBModal>


                    {showModalOuter ? WishListModal() : null}
                    {wishListAlert ? WishlistCreateHandle() : null}


                    {/* <Wishlist add={wishlistAdd} /> */}
                    <div style={{ marginBottom: '2%' }}>
                        <br></br>
                        <br></br><br></br>
                    </div>
                </div>}
        </>
    )
}

