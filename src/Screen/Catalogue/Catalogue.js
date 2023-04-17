import React, { Component } from 'react'
import card from '../CardImage.json'
import product from '../Products.json'
import './Catalogue.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronright } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import HeaderforCatalogue from './HeaderforCatalogue'
import { GetCategorys } from '../../services/CategoryService'
import { LoadEarlier } from 'react-web-gifted-chat'
import Loader from '../Loader'
import HeaderAll from '../../Layout/HeaderAll'
export default class Catalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      isOpen: false,
      ID:"",
      isLoading: false,
    };
  }


  componentDidMount() {
    this.loadCategoryList();
  }

  // routeChange = (id) => {
  //   //let path = `newPath`;
  //   console.log("fhgjgfhjgfhdata..........",id)
  //   const navigate = useNavigate();
  //   // navigate('/subcatagory', {item : item.tags} );
  //   navigate('/subcatagory', {
  //     aboutProps: {
  //       id: id
  //     }
  //   });
  // }



  loadCategoryList = () => {
    this.setState({
      isLoading: true,
    });
    GetCategorys()
      .then((response) => {
        console.log(response, "resgadsgag...");
        this.setState({
          categoryList: response.data,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {

    return (
<>
      { this.state.isLoading == true ? <div style={{ height: '100vh', alignItems: 'center', justifyContent: 'center', display: 'flex' }}><Loader /></div> :<div>
        <HeaderAll 
        all={true}
        title="Catalogue" />
        {this.state.categoryList.map((a) => {
          return (<span
            style={
              {
                display: 'flex', flex: 1,
                padding: 10,
                marginBottom: '0.5%', marginLeft: '1%', marginRight: '1%',
                borderBottom: '1px solid #ddd'
              }
            }>
            <Link style={{ width: '100%',textDecoration:"none" }}  to={
              {
              pathname:`/subcatagory`,
              search: a.id
              
            }
            }>
              <button  style={{
                alignItems: 'center', justifyContent: 'center', display: 'flex',
                width: '100%', borderWidth: 0, backgroundColor: 'white'
              }}>
                <span style={{
                  width: "20%",
                  justifyContent: "center",
                }}>
                  <img style={{
                    display: 'flex',
                    marginBottom: 10,
                    height: 40, width: 50, marginRight: ' 10px auto '

                  }}
                    src={a.image}
                  // src={`https://funworks.in/uploads/category/${a.image}`}
                  />

                </span>
                <span style={{
                  justifyContent: "center",
                  flex: 1,
                  paddingLeft: 10,
                  marginLeft: 60
                }}>
                  <text style={{
                    display: "flex", marginLeft: "-26%", marginBottom: 5, fontSize: 17
                  }}>
                    {a.name}

                  </text>
                </span>
                <span style={{
                  justifyContent: "flex-end",
                  alignItems: "center", color: '#ddd'
                }}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </button>
            </Link>
          </span>)
        })}
        
      </div>}
      </>
    )
  }
}
