import { Navbar } from "react-bootstrap";
import { faArrowLeft ,faCartArrowDown, faHome } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TrackOrderHeader() {
    return (
        <>
            <Navbar className="navCont" variant="light">
                <div className="navCont">
                    <div>
                        <button
                            style={{
                                borderWidth: 0, paddingLeft: 20, fontSize: 25,
                                background: 'rgb(99, 195, 165)'
                            }} >
                            <FontAwesomeIcon icon={faArrowLeft} size='10px' style={{
                                marginLeft: '2%',
                                color: 'white'
                            }} />
                        </button>
                    </div>
                    <div className="textDiv">
                        <text
                            placeholder=" Search.."
                            style={{
                                marginBottom: 5,
                                marginTop: 5,
                                borderRadius: 5,
                                marginRight: '5%',
                                marginLeft: '10%',
                                color: 'white',
                            }}
                            className="HeaderSubTitle"
                        >
                            Track Order
                        </text>
                    </div>
                    <div className="btnDiv">
                        <div style={{ marginRight: '1%', color: 'white' }}>
                            <button className="btnSize"
                                style={{
                                    borderWidth: 0, paddingLeft: 20, color: 'white',
                                    background: 'rgb(99, 195, 165)'
                                }}>
                                <FontAwesomeIcon icon={faHome} />
                            </button>
                        </div>
                        <div style={{ marginRight: '1%', color: 'white', }}>
                            <button className="btnSize" style={{
                                borderWidth: 0, paddingLeft: 20, color: 'white',
                                background: 'rgb(99, 195, 165)'
                            }}
                            >
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                        </div>
                        <div style={{ marginRight: '1%', color: 'white' }}>
                            <button className="btnSize" style={{
                                borderWidth: 0, paddingLeft: 20, color: 'white',
                                background: 'rgb(99, 195, 165)'
                            }}>
                                <FontAwesomeIcon icon={faCartArrowDown} />
                            </button>
                        </div>
                    </div>
                </div>
            </Navbar>
        </>
    )
}