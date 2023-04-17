import React, { Component } from "react";
//import { Nav, Navbar, Container } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Icon from "@mui/material/Icon";
import "./Footer.css";
import iconS from './Footer.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/fontawesome-free-solid'
import { faAtom, faBookOpen, faCalendarWeek, faCartArrowDown, faHeart, faPerson, faSms, faUser } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
//import { Row, Card, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };

  }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  routeChange = () => {
    //let path = `newPath`;
    const navigate = useNavigate();
    navigate('/Login_Path');
  }
  render() {
    // let navigate = useNavigate();
    // const routeChange = () => {
    //   let path = `newPath`;
    //   navigate(path);
    // }
    // landingPage = () => {
    //   const openLoginPage = () => {
    //     history.push('/login'); //this will open login page on click of login button
    //   }
    // }

    const element = <FontAwesomeIcon icon={faAtom} />
    return (
      <div>
        {/* <Row xs={4} sm={4} md={6} lg={6} className="g-4">
          <Col>
            <Card>
              <Navbar className="footer" fixed="bottom">
                <Nav className="me-auto">
                  <Card style={{ marginLeft: '40%', borderWidth: 0, backgroundColor: 'rgb(99, 195, 165)' }}>
                    <Nav.Link as={Link} to="/Home">
                      <span style={{ marginLeft: 10 }} onClick={this.handleClick} >
                        <FontAwesomeIcon className="Icons"
                      //  className={this.state.clicked ? "deselect" : "select"} 
                        icon={faHouse} size='x' />
                      </span>
                    </Nav.Link>
                  </Card>
                  <Card style={{ marginLeft: '85%', borderWidth: 0, backgroundColor: 'rgb(99, 195, 165)' }}>
                    <Nav.Link as={Link} to="/Catalogue">
                      <span style={{ marginLeft: 10 }} onClick={this.handleClick} >
                        <FontAwesomeIcon className="Icons"
                        //className={this.state.clicked ? "select" : "deselect"} 
                        icon={faBookOpen} />
                      </span>
                    </Nav.Link>
                  </Card>
                  <Card style={{ marginLeft: '85%', borderWidth: 0}}>
                    <Nav.Link as={Link} to="/manageOrder">
                      <FontAwesomeIcon className="Icons"
                     // style={{color:'red',height:20,width:20}}
                      icon={faCalendarWeek} />
                    </Nav.Link>
                  </Card>
                 
                  <Card style={{ marginLeft: '85%', borderWidth: 0, backgroundColor: 'rgb(99, 195, 165)' }}>
                    <Nav.Link as={Link} to="/">
                      <FontAwesomeIcon className="Icons" icon={faCartArrowDown} />
                    </Nav.Link>
                  </Card>


                  <Card style={{ marginLeft: '85%', borderWidth: 0, backgroundColor: 'rgb(99, 195, 165)' }}>
                    <Nav.Link as={Link} to="/">

                    <FontAwesomeIcon className="Icons" icon={faUser} />

                    </Nav.Link>
                  </Card>

                  <Card style={{ marginLeft: '90%', borderWidth: 0, backgroundColor: 'rgb(99, 195, 165)' }}>
                    <Nav.Link as={Link} to="/">

                      <FontAwesomeIcon className="Icons" icon={faSms}  />


                    </Nav.Link>
                  </Card>

                </Nav>

              </Navbar>
        </Card>
          </Col>
        </Row> */}

        <div class="d-flex" style={{ backgroundColor: 'rgb(99, 195, 165)', padding: 10 }}>
          <div class="p-2 flex-fill">
            <Nav.Link as={Link} to="/Home">
              <span style={{ marginLeft: 10 }} onClick={this.handleClick} >
                <FontAwesomeIcon style={{ fontSize: 23, color: 'white' }}
                  //  className={this.state.clicked ? "deselect" : "select"} 
                  icon={faHouse} size='x' />
              </span>
            </Nav.Link>
          </div>
          <div class="p-2 flex-fill">
            <Nav.Link as={Link} to="/Catalogue">
              <span style={{ marginLeft: 10 }} onClick={this.handleClick} >
                <FontAwesomeIcon style={{ fontSize: 23, color: 'white' }}
                  //className={this.state.clicked ? "select" : "deselect"} 
                  icon={faBookOpen} />
              </span>
            </Nav.Link>
          </div>
          <div class="p-2 flex-fill">
            <Nav.Link as={Link} to="/manageOrder">
              <FontAwesomeIcon style={{ fontSize: 23, color: 'white' }}
                // style={{color:'red',height:20,width:20}}
                icon={faCalendarWeek} />
            </Nav.Link>
          </div>

          <div class="p-2 flex-fill">
            <Nav.Link as={Link} to="/billing">
              <FontAwesomeIcon style={{ fontSize: 23, color: 'white' }} icon={faUser} />
            </Nav.Link>
          </div>
          <div class="p-2 flex-fill">
            <Nav.Link as={Link} to="/chat">
              <FontAwesomeIcon style={{ fontSize: 23, color: 'white' }} icon={faSms} />
            </Nav.Link>
          </div>
        </div>
      </div>
    );
  }
}

