import React, { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import Configs from "../config/Configs";
import { GetCategorys } from "../services/CategoryService";
import { Row, Card, Col } from "react-bootstrap";
import pro from '../Images/banner1.png'
import products from './Products.json'
import card from './CardImage.json'
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";



import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

export default class Home extends Component {
  static contextType = AppContext
  constructor(props) {
    super(props);
    this.state = {
      sliderImage: [],
      slider: "",
      categoryList: [],
      isOpen: false
    };
  }
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });


  componentDidMount() {
    this.loadCommitHistory();
    this.loadCategoryList();
console.log(this.context.userData);
    // console.log("....", this.state.sliderImage);
  }

  loadCommitHistory() {
    let url = Configs.CORS_URL;
    let headers = {
      // "X-RapidAPI-Host": "motorcycle-specs-database.p.rapidapi.com",
      // "X-RapidAPI-Key": "MyAPIKey",
    };
    axios
      .get(
        `https://ehostingguru.com/stage/funtoo/api/api/get_slider`,
        " X-Requested-With"
      )
      .then((res) => {
        console.log("Axios response", res.data);
        this.setState({ sliderImage: res.data.data });
      })
      .catch((err) => {
        console.log("axios Error", err);
      });
  }

  loadCategoryList = () => {
    GetCategorys()
      .then((res) => {
        console.log("......rr.......", res.data);
        this.setState({
          categoryList: res.data,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };



  render() {
    console.log(".map.................", this.state.sliderImage);
    return (
      <div style={{ overflow: "hidden "}}>
      <Header />
      <div className="container">
        <div style={{marginTop:'1.2%'}}>
          <FontAwesomeIcon icon="check-square" />
          {/* <Carousel variant="dark">
            {this.state.sliderImage.map((img) => (
              <Carousel.Item>
                <img
                  style={{
                    width: "30%",
                    height: "30%",
                    flexDirection: "row",
                  }}
                  src={Configs.SLIDER_URL + img.image}
                  alt="car"
                />
              </Carousel.Item>
            ))}
          </Carousel> */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../Images/banner1.png"
                alt="First slide"
              />
              
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../Images/banner1.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../Images/banner1.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
     
          {/* <Carousel variant="dark">
            <Carousel.Item>
              {this.state.categoryList.map((food) => (
                <img
                  style={{
                    width: "10%",
                    height: "10%",
                    flexDirection: "row",
                  }}
                  src={Configs.CATEGORY_IMAGE_URL + food.image}
                  alt="car"
                />
              ))}
            </Carousel.Item>
          </Carousel> */}
          {/* <div style={{height:'15%'}}>
           
                {products.product.map((a) =>
                  <div style={{
                    flex: 1,
                    marginLeft: '4%', marginRight: '2%',
                    float: "left", alignItems: 'center', justifyContent: "center", alignSelf: "center"
                  }}>
                    <Row xs={1} md={3} >
                      <Card style={{
                        width: '5rem',
                        backgroundColor: 'white', borderWidth: 0,
                      }}>
                        <Card.Img style={{ flex: 1, alignSelf: 'center', height: '50%', width: '50%' }} variant="top" src={a.image} />

                      </Card>
                    </Row>
                    <img
                    style={{
                      float: "left",
                      width: "13 %",
                      height: "auto",
                      marginLeft: '4%'
                    }}
                    src={a.image}
                    alt="First slide"
                  /> 
                     <div
                   style={{ float: "left", marginTop: 10, }}
                 >
                   <text>{a.title}</text>
                 </div>
                    <br></br>
                  </div>
                )}

          </div> */}

<div style={{marginTop:20}}>
<OwlCarousel items={5}  
          // loop  
          // nav  
          margin={8} >   
            {products.product.map((a) =>
                <Card style={{ alignItems: "center", borderWidth: 0,display:'inline' }}>
                  <Card.Img style={{ height: 30, width: 30,margin:' 0px auto ' }} src={a.image} />
                  <Card.Text>
                  {a.title}
                  </Card.Text>
                </Card> 
            )}         
       </OwlCarousel>
</div>

        <br></br>
        {/* <div style={{ marginTop: '2%',
        direction:'ltr',overflow:'auto', }}>
          <Row xs={4} sm={4} md={6} lg={6} className="g-4">
            {products.product.map((a) =>
              <Col>
                <Card style={{ alignItems: "center", borderWidth: 0,display:'inline' }}>
                  <Card.Img style={{ height: 30, width: 30 }} src={a.image} />
                  <Card.Text>
                  {a.title}
                  </Card.Text>
                </Card>
              </Col>
            )}
          </Row>
        </div> */}
          <div style={{ marginTop: '0%'}}>   
            <Row xs={3}  md={3} className="g-4" style={{borderRadius:0}}>
              {card.Card.map((b) =>
                <Col>
                  <Card style={{borderWidth:1,borderRadius:0}}>
                    <Card.Img style={{borderRadius:0}}  src={ b.image} />
                  </Card>
                </Col>
              )}
            </Row>
          </div>

        <div style={{marginBottom:'1%'}}>
          <br></br>
        
       </div>
      </div>
      <Footer />
      <div style={{marginBottom:'0.2%',}}>
          
       </div>
      </div>
    );
  }
}
