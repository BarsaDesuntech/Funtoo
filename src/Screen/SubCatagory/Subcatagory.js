import React, { Component, useContext, useEffect, useState } from 'react'
import Subcat from './SubCat.json'
import "./Subcatagory.css"
import { Row, Card, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import SubcatHeader from './SubcatHeader'
import Header from '../../Layout/Header';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { GetCategorysByid } from '../../services/CategoryService';
import { GameListByTagId } from '../../services/APIServices';
import Loader from '../Loader';
import AppContext from '../../context/AppContext';
import HeaderAll from '../../Layout/HeaderAll';


const Subcatagory = (props) => {
  const params = useParams();
  let location = useLocation();

  const conText = useContext(AppContext)
console.log(conText,"const conText = useContext(AppContext)");

  const [waterGame, setWaterGame] = useState(false)
  const [category_id, setCategory_id] = useState(location.search.split("?")[1])
  const [categoryData, setCategoryData] = useState("")
  const [Tag_id, setTag_id] = useState("")
  const [gameListdata, setGameListData] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  //  const [active, setActive] = useState()


  const handleClick = (id) => {
    // setWaterGame(true)
    const tag_id = id;
    gameListData(id)
    setTag_id(tag_id);
  };

  // const  RouteChange = (id) => {
  //     //let path = `newPath`;
  //     console.log("fhgjgfhjgfhdata",id )
  //     const navigate = useNavigate();
  //     navigate('/subcatagory' );
  //   }


  useEffect(() => {
    // console.log("Value_id", sendtag_id)
    setIsLoading(true)
    GetCategorysByid(category_id)
      .then((response) => {
        setCategoryData(response.data[0].tags)
        gameListData(response.data[0].tags[0].tag_id)
        setTag_id(response.data[0].tags[0].tag_id);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  const gameListData = (id) => {
    GameListByTagId(id).then((res) => {
      // console.log("gamelistdata",res);
      setGameListData(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }


  return (
    <>
    { isLoading == true ? <div style={{height:'100vh', alignItems:'center', justifyContent:'center', display:'flex'}}><Loader/></div>:<div>
      {/* <SubcatHeader /> */}
      <HeaderAll allGames={true} title=""/>
      <div style={{
        overflow: 'hidden', justifyContent: "center",
        alignSelf: "center", alignItems: "center", marginTop: '1%'
      }}>

        <div style={{ paddingLeft: 30, paddingRight: 30 }}>
          <OwlCarousel items={6} margin={8}>
            {
              categoryData && categoryData.map((a, index) => {
                return (
                  <p className='OWL' key={index}>
                    {/* { index === 0 ?
                   setSendTag_id(a.tag_id) :"" 
                   
                  } */}

                    <button onClick={() => handleClick(a.tag_id)}
                      style={{
                        height: 37, width: 140,
                        marginRight: "", marginLeft: 5, marginTop: 7,
                        borderWidth: 1,
                        borderColor: 'rgb(99, 195, 165)',
                        backgroundColor: a.tag_id !== Tag_id ? "white" : "#63c3a5",
                        color: a.tag_id == Tag_id ? "white" : "teal",
                        borderBottomColor: "rgb(99, 195, 165)",
                        borderBottomWidth: 1, borderRadius: 6,
                      }}
                    >
                      <text className='heading'>{a.tag_name}</text>
                    </button>

                  </p>
                )
              })}
          </OwlCarousel>


          {/* <Nav.Link style={{ width: '100%' }} as={Link} to="/subcatagory">
          {Subcat.Games.map((a) => 
        <button  onClick={this.handleClick} 
       // className="selected"
        //className={this.state.clicked ? "selected" : "deselected"}
        style={{ 
        marginRight:5,marginLeft:5,marginTop:7,
        borderWidth:1,
        borderColor:'rgb(99, 195, 165)' ,
        backgroundColor:'white',
        color:"rgb(99, 195, 165)",
        borderBottomColor:"rgb(99, 195, 165)",
        borderBottomWidth:1,borderRadius:4

        // backgroundColor:'rgb(99, 195, 165)',borderColor:'rgb(99, 195, 165)' , 
        // borderBottomColor:"rgb(99, 195, 165)",
        //   borderBottomWidth:1,borderRadius:4,color:'white'

         }}
        >
            <text className='heading'>{a.title}</text>
        </button>
       
          )}
          </Nav.Link> */}
        </div>
        <div style={{ justifyContent: "center", alignItems: "center", marginTop: -25 }}>
          <Carousel style={{ paddingLeft: 20, paddingRight: 20, }}>
            {gameListdata.map((item) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100 h-100"
                    src={item.image}
                    alt="First slide"
                  />

                </Carousel.Item>
              )
            })}

          </Carousel>
        </div>
        <div style={{ marginTop: '3%', paddingLeft: 20, paddingRight: 20, }}>

          <Row xs={2} md={3} className="g-4">
            {gameListdata.map((a) => {
              return (
                <Link to={`/subcatagory/${a.id}`} style={{ textDecoration: 'none' }}>
                  <Col>
                    <Card className='Game'  >
                      <Card.Img style={{ marginTop: 10, marginBottom: 7, paddingRight: 5, paddingLeft: 5, borderRadius: 0 }}
                        src={a.image} />
                      <Card.Text style={{
                        //paddingTop: 7,
                        textDecoration: 'none', color: 'black'
                        //paddingBottom: 10, 
                      }}>
                        <text style={{ fontWeight: 'bold' }}> {a.name}</text><br></br>
                        $ {a.rent}
                      </Card.Text>
                    </Card>
                  </Col>
                </Link>)
            })}
          </Row>
        </div>
        <div style={{ marginBottom: '2%' }}>

        </div>

      </div>
      </div>}
    </>
  )
}
export default Subcatagory;
