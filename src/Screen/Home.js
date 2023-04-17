import React, { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import { GetCategorys } from "../services/CategoryService";
import { Row, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";




import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { getCategory, getNewArrivalsDetails, getSlider } from "../services/APIServices";
import Loader from "./Loader";
import AppContext from "../context/AppContext";
import HeaderAll from "../Layout/HeaderAll";

export default class Home extends Component {
  static contextType = AppContext
  constructor(props) {
    super(props);
    this.state = {
      sliderImage: [],
      arrivalsDetails: [],
      slider: [],
      categoryList: [],
      isOpen: false,
      isLoading: false,
      
    };
  }
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });


  componentDidMount() {
    this.loadAll();
    this.loadCategoryList();
    console.log("conText is------ ", this.context.LoginData

    )
  }


  loadAll = () => {
    this.setState({
      isLoading: true,
    });
    Promise.all([getSlider(), getNewArrivalsDetails(), getCategory()])
      .then((response) => {
        this.setState({
          sliderImage: response[0].data,
          arrivalsDetails: response[1].data,
          categoryList: response[2].data,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });

  }

  loadCategoryList = () => {
    this.setState({
      isLoading: true,
    });
    GetCategorys()
      .then((res) => {
        // console.log("......rr.......", res.data);
        if (res.is_success) {
          this.setState({
            categoryList: res.data,
            isLoading: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {

    return (
      <>
        {this.state.isLoading == true ? <div style={{ height: '100vh', alignItems: 'center', justifyContent: 'center', display: 'flex' }}><Loader /></div> :
          <div style={{ overflow: "hidden " }}>
            <Header />
            {/* <HeaderAll 
            home ={true}
            title="Home"
            />  */}
            <div className="container">
              <div style={{ marginTop: '1.2%' }}>
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
                <Carousel >
                  {this.state?.sliderImage.map((item) => {
                    return (
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={item.image}
                          // src={`https://funworks.in/uploads/slider/${item.image}`}
                          alt="First slide"
                          style={{ height: '60vh' }}
                        />
                      </Carousel.Item>
                    )
                  })}
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

              <div style={{ marginTop: 20 }}>
                <OwlCarousel items={5}
                  // loop  
                  // nav  
                  margin={8} >
                  {this.state.categoryList.map((a) => {
                    return (
                      <>
                        <Link style={{ textDecoration: "none" }} to={
                          {
                            pathname: `/subcatagory`,
                            search: a.id
                          }
                        }
                          key={a.id}>
                          <Card style={{ alignItems: "center", borderWidth: 0, display: 'inline', color: "black" }}>
                            <Card.Img
                              style={{ height: 30, width: 30, margin: ' 0px auto ' }}
                              src={a.image}
                            // src={`https://funworks.in/uploads/category/${a.image}`}
                            />
                            <Card.Text>
                              {a.name}
                            </Card.Text>
                          </Card>
                        </Link>
                      </>)
                  })}
                </OwlCarousel>
              </div>

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
              <div className="SpaceHomePage">
                <Row xs={3} md={3} className="g-4" style={{ borderRadius: 0 }}>
                  {this?.state?.arrivalsDetails.map((b) => {
                    return (
                      <>
                        <Link style={{ textDecoration: "none" }} to={
                          {
                            pathname: `/subcatagory/${b.id}`,
                            // search: b.id
                          }
                        }
                          key={b.id}>
                          <Col>
                            <Card style={{ borderWidth: 1, borderRadius: 0 }}>
                              <Card.Img style={{ borderRadius: 0 }} src={b.image} />
                            </Card>
                          </Col>
                        </Link>
                      </>
                    )
                  })}
                </Row>
              </div>
              <div style={{ marginBottom: '1%' }}>
                <br></br>

              </div>
            </div>
            <Footer />
            <div style={{ marginBottom: '0.2%', }}>
            </div>
          </div>}
      </>
    );
  }
}
