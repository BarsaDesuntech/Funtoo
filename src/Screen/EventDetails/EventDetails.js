import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Data from '../SubCatagory/SubCat.json'
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from "react-bootstrap";
import './EventDetails.css'
import EventDetHeader from './EventDetHeader'
import Card from 'react-bootstrap/Card';
import AppContext from '../../context/AppContext';
import context from 'react-bootstrap/esm/AccordionContext';




const EventDetails = () => {

  const conTexts = AppContext;


  const value = useParams();
  console.log("in subtrtrcat", value);
  let product = Data.Games.find((data) => data.title === value.cart)
  console.log('jkjjkj', product);

  //
  const [showModal, setShow] = useState(false);
  const handleClose = () => { setShow(false) }
  const handleShow = () => { setShow(true) }

  const navigate = useNavigate();
  const lgn = () => {

    navigate('/EventDetailsforGSTbill')
  }

  return (
    <>
      <div style={{ backgroundColor: '#eee', }}>
        <EventDetHeader />

        <div style={{
          marginTop: '0%', marginRight: 15, marginLeft: '21%',
          marginRight: '18%'
        }}>
          {/* <div>
            <div style={{
              alignItems: 'center', justifyContent: 'center', display: 'flex',
              alignItems: 'center', marginTop: '1%',
              justifyContent: 'center',
              flex: 1, marginLeft: '1%', backgroundColor: 'white',
              padding: 10, borderBottomWidth: 1, borderBottom: '1px solid #ddd'
              
            }}>
              <span style={{
                width: "20%",
                justifyContent: "center", marginLeft: '2%'
              }}>
                <text style={{
                  display: 'flex',
                  marginLeft: '1%', marginBottom: 15
                }}> Event Start: </text>
              </span>
              <span style={{
                justifyContent: "center",
                flex: 1,
                paddingLeft: 10,
                marginLeft: 80
              }}>
                <input style={{
                  display: "flex", marginBottom: 15, marginLeft: "-55%",
                  width: "90%", borderWidth: 0

                }} />
              </span>
              <span style={{
                width: "20%",
                justifyContent: "center",
              }}>
                <text style={{
                  display: 'flex',
                  marginLeft: '40%', marginBottom: 15
                }}> Time: </text>
              </span>
              <span style={{
                justifyContent: "center",
                flex: 1,
                paddingLeft: 10,
                marginLeft: 80
              }}>
                <input style={{
                  display: "flex", marginBottom: 15, marginLeft: "-85%",
                  width: "80%", borderWidth: 0,

                }} />
              </span>
            </div>
          </div> */}
          {/* // */}
          {/* <div>
            <div style={{
              alignItems: 'center', justifyContent: 'center', display: 'flex',
              flex: 1, marginLeft: '1%', backgroundColor: 'white',
              padding: 10, borderBottom: '1px solid #ddd'
            }}>
              <span style={{
                width: "20%",
                justifyContent: "center", marginLeft: '2%',
              }}>
                <text style={{
                  display: 'flex',
                  marginLeft: '1%', marginBottom: 15
                }}> Event End: </text>
              </span>
              <span style={{
                justifyContent: "center", marginLeft: '20%',
                flex: 1,
                paddingLeft: 10,
                marginLeft: 80
              }}>
                <input style={{
                  display: "flex", marginBottom: 15, marginLeft: "-55%", width: "80%", borderWidth: 0
                }} />
              </span>
              <span style={{
                width: "20%",
                justifyContent: "center",
              }}>
                <text style={{
                  display: 'flex',
                  marginLeft: '40%', marginBottom: 15
                }}> Time: </text>
              </span>
              <span style={{
                justifyContent: "center",
                flex: 1,
                paddingLeft: 10,
                marginLeft: 80
              }}>
                <input style={{
                  display: "flex", marginBottom: 15, marginLeft: "-85%", width: "80%", borderWidth: 0
                }} />
              </span>
            </div>
          </div> */}
          {/* // */}
          {/* <div>
            <div style={{
              alignItems: 'center', justifyContent: 'center', display: 'flex',
              flex: 1, marginLeft: '1%', backgroundColor: 'white', borderBottom: '1px solid #ddd',
              padding: 10,
            }}>
              <span style={{
                width: "20%",
                justifyContent: "center", marginLeft: '2%',
              }}>
                <text style={{
                  display: 'flex',
                  marginLeft: '1%', marginBottom: 15
                }}> Set up: </text>
              </span>
              <span style={{
                justifyContent: "center",
                flex: 1,
                paddingLeft: 10,
                marginLeft: 80
              }}>
                <input style={{
                  display: "flex", marginBottom: 15, marginLeft: "-55%", width: "80%",
                  borderWidth: 0,
                }} />
              </span>
              <span style={{
                width: "20%",
                justifyContent: "center",
              }}>
                <text style={{
                  display: 'flex',
                  marginLeft: '40%', marginBottom: 15
                }}> Time: </text>
              </span>
              <span style={{
                justifyContent: "center",
                flex: 1,
                paddingLeft: 10,
                marginLeft: 80
              }}>
                <input style={{
                  display: "flex", marginBottom: 15, backgroundColor: 'white', marginLeft: "-85%", width: "80%", borderWidth: 0
                }} />
              </span>
            </div>
          </div> */}
          {/* // */}
          {/* <div>
            <div style={{
              alignItems: 'center', justifyContent: 'center', display: 'flex',
              flex: 1, marginLeft: '1%', backgroundColor: 'white', borderBottom: '1px solid #ddd',
              padding: 10,
            }}>
              <span style={{
                width: "20%",
                justifyContent: "center", marginLeft: '2%',
              }}>
                <text style={{
                  display: 'flex',
                  marginLeft: '1%', marginBottom: 15
                }}> # of Guests: </text>
              </span>
              <span style={{
                justifyContent: "center", marginLeft: '20%',
                flex: 1,
                paddingLeft: 10,
                marginLeft: 80
              }}>
                <input style={{
                  display: "flex", marginBottom: 15, marginLeft: "-55%", width: "266%", borderWidth: 0

                }} />
              </span>
              <span style={{
                width: "20%",
                justifyContent: "center",
              }}>
                <text style={{
                  display: 'flex',
                  marginLeft: '1%', marginBottom: 15
                }}></text>
              </span>
              <span style={{
                justifyContent: "center",
                flex: 1,
                paddingLeft: 10,
                marginLeft: 80
              }}>

              </span>
            </div>
          </div> */}
          {/* // */}
          {/* <div>
            <div style={{
              alignItems: 'center', justifyContent: 'center', display: 'flex',
              flex: 1, marginLeft: '1%', backgroundColor: 'white',
              borderBottom: '1px solid #ddd',
              padding: 10,
            }}>
              <span style={{
                width: "20%",
                justifyContent: "center", marginLeft: '2%',
              }}>
                <text style={{
                  display: 'flex',
                  marginLeft: '1%', marginBottom: 15
                }}> Event Type: </text>
              </span>
              <span style={{
                justifyContent: "center",
                flex: 1,
                paddingLeft: 10,
                marginLeft: 80
              }}>
                <input style={{
                  display: "flex", marginBottom: 15, marginLeft: "-55%", width: "266%", borderWidth: 0
                }} />
              </span>
              <span style={{
                width: "20%",
                justifyContent: "center",
              }}>
                <text style={{
                  display: 'flex',
                  marginLeft: '1%', marginBottom: 15
                }}></text>
              </span>
              <span style={{
                justifyContent: "center",
                flex: 1,
                paddingLeft: 10,
                marginLeft: 80
              }}>

              </span>
            </div>
          </div> */}
        </div>

        {/* // */}
        <div>
          <div style={{ marginRight: 11, marginLeft: '15%', marginRight: '15%' }}>
            <div style={{
              alignItems: 'center', justifyContent: 'center', display: 'flex',
              flex: 1, marginLeft: '1%',
              padding: 10,
            }}>
              <span style={{
                width: "20%",
                justifyContent: "center",
              }}>
                <text style={{
                  display: 'flex',
                  marginLeft: '1%', marginBottom: 15
                }}>  </text>
              </span>

              <span style={{
                justifyContent: "center",
                flex: 1,
                paddingLeft: 10,
                marginLeft: 80
              }}>
                <text style={{
                  display: "flex", marginBottom: 15, marginLeft: "-25%"
                }}></text>
              </span>
              <span style={{

                justifyContent: "flex-end",
                alignItems: "center",
              }}>


              </span>
            </div>
          </div>
        </div>
        {/* // */}



        {/* // */}

        {/* <div style={{ marginRight: 10, marginLeft: '21%', marginRight: '18%' }}>
          <div style={{
            alignItems: 'center', justifyContent: 'center', display: 'flex',
            flex: 1, marginLeft: '1%', backgroundColor: 'white', marginTop: -15,
            padding: 10, borderBottom: '1px solid #ddd',
          }}>
            <span style={{
              width: "40%",
              justifyContent: "center", marginLeft: '2%'
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '1%', marginBottom: 15
              }}> Special Instructions: </text>
            </span>
            <span style={{
              justifyContent: "center",
              flex: 1,
              paddingLeft: 10,
              marginLeft: 80
            }}>
              <input style={{
                display: "flex", marginBottom: 15, marginLeft: "-55%",
                borderWidth: 0
              }} /><input style={{
                display: "flex", marginBottom: 15, marginLeft: "-55%",
                borderWidth: 0
              }} />
            </span>
            <span style={{
              width: "20%",
              justifyContent: "center",
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '1%', marginBottom: 15
              }}></text>
            </span>
            <span style={{
              justifyContent: "center",
              flex: 1,
              paddingLeft: 10,
              marginLeft: 80
            }}>

            </span>
          </div>
        </div> */}


        {/* // */}
        {/* <div style={{ marginRight: 11, marginLeft: '15%', marginRight: '15%', }}>
          <div style={{
            alignItems: 'center', justifyContent: 'center', display: 'flex',
            flex: 1, marginLeft: '1%',
            padding: 10,
          }}>
            <span style={{
              width: "20%",
              justifyContent: "center", marginLeft: '20%'
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '1%', marginBottom: 15
              }}>  </text>

            </span>
            <span style={{
              justifyContent: "center",
              flex: 1,
              paddingLeft: 10,
              marginLeft: 80
            }}>
              <text style={{
                display: "flex", marginBottom: 15, marginLeft: "-25%"
              }}></text>
            </span>
            <span style={{

              justifyContent: "flex-end",
              alignItems: "center",
            }}>


            </span>
          </div>
        </div> */}





        {/* <div style={{
          alignItems: 'center', justifyContent: 'center', display: 'flex',
          flex: 1, marginLeft: '21.7%', marginRight: '18%',
          padding: 10, backgroundColor: "white",
          borderBottom: '1px solid #ddd',
        }}>
          <span style={{
            width: "20%", marginLeft: '15%', marginRight: '15%', 
            justifyContent: "center", marginLeft: '2%'
          }}>
            <img style={{
              display: 'flex', marginLeft: '15%', marginRight: '15%',
              marginLeft: '1%', marginBottom: 15
            }} src={product.image}></img>
          </span>
          <span style={{
            justifyContent: "center",
            flex: 1,
            paddingLeft: 10,
            marginLeft: 80
          }}>
            <text style={{
              display: "flex", marginBottom: 15,
              marginLeft: "-140%"
            }}>{product.title}</text></span>
          <span style={{

            //justifyContent: "flex-end",
            //alignItems: "center",
          }}>
            <text style={{ marginRight: 50 }}> $ {value.price}</text>

          </span>
          <span style={{
            width: "15%",
            justifyContent: "center",
          }}></span>
        </div> */}

        {/* // */}

        {/* // */}

        {/* <div style={{ marginRight: 10, marginLeft: '21%', marginRight: '18%', }}>
          <div style={{
            alignItems: 'center', justifyContent: 'center', display: 'flex',
            flex: 1, marginLeft: '1%', backgroundColor: 'white', marginTop: -15,
            padding: 10, borderBottom: '1px solid #ddd',
          }}>

            <span style={{
              width: "20%",
              justifyContent: "center", paddingBottom: '1%',
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '1%', marginBottom: 15
              }}>Payment Method:</text>
              <span style={{ marginRight: '0%' }}>
                <input type="radio" id="Cheque" name="fav_language" value="Cheque"></input>
                <label style={{marginLeft:5}} for="Cheque">Cheque</label></span>
            </span>
            <span style={{
              justifyContent: "center",
              flex: 1,
              paddingLeft: 10,
              marginLeft: 80
            }}>
              
              <text style={{
                display: 'flex',
                marginLeft: '10%', marginBottom: 15, marginTop: 15
              }}> </text>
              <span style={{ marginRight: '50%' }}>
                <input type="radio" id="Online" name="fav_language" value="Online"></input>
                <label style={{ marginLeft: 5,marginTop:4 }} for="Online">Online</label>
              </span>
            </span>
            <span style={{
              width: "20%",
              justifyContent: "center", paddingBottom: '1%'
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '10%', marginBottom: 15, marginTop: 35
              }}></text>
              <span style={{ marginRight: '0%' }}>
                <input type="radio" id="Cash" name="fav_language" value="Cash"></input>
                <label style={{ marginLeft: 5 }} for="Cash">Cash</label></span>

            </span>
            <span style={{
              justifyContent: "center",
              flex: 1,
              paddingLeft: 10,
              marginLeft: 80, marginTop: 22
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '1%', marginBottom: 15,
              }}></text>
              <span style={{ marginRight: '50%' }}>
                <input type="radio" id="UPI" name="fav_language" value="UPI"></input>
                <label style={{ marginLeft: 5 }} for="UPI"> UPI</label></span>
            </span>
          </div>

          <span style={{ marginRight: -80 }}></span>
        </div> */}


        {/* // */}

        {/* // */}

        {/*     */}


        {/* // */}

        {/* <div style={{display:"flex",alignItems:"center",
justifyContent:'center',marginLeft:45,borderWidth:0}}>
<Card style={{ width: '63%',borderWidth:0,borderRadius:0 }}>
      
      <Card.Body>
       <div style={{jusitfyContent:'space-between'}}>
        <text style={{float:'left'}}>Sub Total:</text>
        <text style={{marginLeft:40}}>$ {value.price}</text>
       </div>
       
       <div style={{marginTop:10}}>
        <text style={{float:'left'}}>Transport Charges: </text>
        <text  style={{marginRight:58}}>$ 0 </text>
       </div>
        
       <div style={{marginTop:10}}>
        <text style={{float:'left'}}>GST Ammount: </text>
        <text style={{marginRight:35}}>$ 0 </text>
       </div>

       <div style={{marginTop:10}}>
        <text style={{float:'left',fontWeight:'bold'}}>Total Ammount: </text>
        <text style={{fontWeight:'bold',marginRight:11}}>$ {value.price}  </text>
       </div>
      </Card.Body>
    </Card>
</div> */}




        {/* // */}


        <div style={{
          backgroundColor: 'white', marginLeft: '5%', marginRight: '5%', borderBottom: '1px solid #ddd',
        }}>

          <div class="d-flex" style={{
            padding: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #ddd',
          }}>
            <div class="p-2 flex-fill">
              <text style={{ float: 'left' }}> Event Start: </text>
            </div>

            <div class="p-2 flex-fill">
              <input style={{ width: 100, borderWidth: 0 }}></input>
            </div>


            <div class="p-2 flex-fill"> Time:  </div>
            <div class="p-2 flex-fill">
              <input style={{ width: 100, borderWidth: 0 }}></input>
            </div>
          </div>

          <div class="d-flex" style={{
            padding: 5, display: 'flex', alignItems: 'center',
            justifyContent: 'center', borderBottom: '1px solid #ddd',
          }}>
            <div class="p-2 flex-fill">
              <text style={{ float: 'left' }}> Event End: </text>
            </div>

            <div class="p-2 flex-fill">
              <input style={{ width: 100, borderWidth: 0 }}></input>
            </div>


            <div class="p-2 flex-fill"> Time:  </div>
            <div class="p-2 flex-fill">
              <input style={{ width: 100, borderWidth: 0 }}></input>
            </div>
          </div>

          <div class="d-flex" style={{
            padding: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #ddd',
          }}>
            <div class="p-2 flex-fill">
              <text style={{ float: 'left', marginLeft: 2, }}> Set Up: </text>
            </div>

            <div class="p-2 flex-fill">
              <input style={{ width: 100, borderWidth: 0 }}></input>
            </div>


            <div class="p-2 flex-fill" style={{ marginLeft: 15, }}> Time:</div>
            <div class="p-2 flex-fill">
              <input style={{ width: 100, borderWidth: 0 }}></input>
            </div>
          </div>

          <div class="d-flex" style={{
            padding: 2, display: 'flex', alignItems: 'center',
            justifyContent: 'center', borderBottom: '1px solid #ddd',
          }}>
            <div class="p-2 flex-fill" style={{ marginLeft: 0 }}>
              <text style={{ float: 'left' }}>#of Guests: </text>
            </div>

            <div class="p-2 flex-fill">
              <input style={{ borderWidth: 0 }}></input>
            </div>



          </div>

          <div class="d-flex" style={{
            padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #ddd',
          }}>
            <div class="p-2 flex-fill" style={{ marginLeft: 2 }}>
              <text style={{ float: 'left' }}> Event Type: </text>
            </div>

            <div class="p-2 flex-fill">
              <input style={{ borderWidth: 0 }}></input>
            </div>



          </div>
        </div>

        <div style={{
          backgroundColor: 'white', marginLeft: '5%', marginRight: '5%', borderBottom: '1px solid #ddd', marginTop: '4%'
        }}>
          <div class="d-flex" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div class="p-2 flex-fill" style={{ width: '40%' }}> <text style={{ float: "left" }}>Special Instructions :</text> </div>
            <div class="p-2 flex-fill"> <input style={{ height: 50, borderWidth: 0, width: 100 }}></input></div>
            {/* <div class="p-2 flex-fill">Flex item</div> */}
          </div></div>
        {/* //item */}
        <div style={{
          backgroundColor: 'white', marginLeft: '5%', marginRight: '5%', borderBottom: '1px solid #ddd', marginTop: '3%'
        }}>
          <div class="d-flex">
            <div class="p-2 flex-fill" >
              <img style={{
                display: 'flex', marginLeft: '15%', marginRight: '15%',
                marginLeft: '1%', marginBottom: 15
              }} src={product.image}></img>
            </div>
            <div class="p-2 flex-fill">
              <text style={{
                display: "flex", marginBottom: 15,
                marginLeft: "-0%"
              }}>{product.title}</text>
            </div>
            <div class="p-2 flex-fill">
              <text style={{ marginRight: 0 }}> $ {value.price}</text>
            </div>
          </div>
        </div>
        {/* //Pay */}
        <div style={{
          backgroundColor: 'white', marginLeft: '5%', marginRight: '5%', borderBottom: '1px solid #ddd', marginTop: '3%'
        }}>

          <div class="d-flex mb-3">
            <div class="me-auto p-2"> Payment Method: </div>

          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label class="form-check-label" for="inlineRadio1"> Cheque</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label class="form-check-label" for="inlineRadio2"> Online </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label class="form-check-label" for="inlineRadio2"> Cash </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label class="form-check-label" for="inlineRadio2"> UPI </label>
          </div>
        </div>

        {/* //Addd */}

        <div style={{
          backgroundColor: 'white', marginLeft: '5%', marginRight: '5%', borderBottom: '1px solid #ddd',
        }}>
          <div class="d-flex mb-3" style={{ marginTop: '4%', }}>
            <div class="p-2" style={{ width: '29%' }}> <text style={{ float: 'left' }}>Sub Total</text></div>
            <div class="p-2" style={{ width: '29%' }}> </div>
            <div class="ms-auto p-2" style={{ width: '27%' }}> $ {value.price}</div>
          </div>
          <div class="d-flex mb-3" style={{ marginTop: '0%', }}>
            <div class="p-2" style={{ width: '25%' }}><text style={{ float: 'left' }}> Transport Charges: </text></div>
            <div class="p-2" style={{ width: '29%' }}> </div>
            <div class="ms-auto p-2" style={{ width: '29%' }}> $ 0</div>
          </div>
          <div class="d-flex mb-3" style={{ marginTop: '0%', }}>
            <div class="p-2" style={{ width: '25%' }}><text style={{ float: 'left', }}> GST Ammount: </text></div>
            <div class="p-2" style={{ width: '29%' }}> </div>
            <div class="ms-auto p-2" style={{ width: '29%' }}> $ 0</div>
          </div>
          <div class="d-flex mb-3" style={{ marginTop: '0%', }}>
            <div class="p-2" style={{ width: '25%' }}><text style={{ float: 'left', fontWeight: 'bold' }}> Total Ammount: </text></div>
            <div class="p-2" style={{ width: '29%' }}> </div>
            <div class="ms-auto p-2" style={{ width: '27%', fontWeight: 'bold' }}>  $ {value.price}</div>
          </div>
        </div>







        <div style={{ backgroundColor: '#eee', }}>
          {/* <Link to={`/EventDetails/${product.title}`}> */}

          {/* </Link> */}
        </div>

        <Button className='SendEnquiry' onClick={handleShow}
        >
          <text style={{ fontSize: 20, color: 'white', textAlign: "center" }}> Send Enquiry </text>
        </Button>



        {/* <div style={{display:'flex'}}>
<input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">HTML</label><br></br>
  <input type="radio" id="css" name="fav_language" value="CSS"></input>
  <label for="css">CSS</label><br></br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript"></input>
  <label for="javascript">JavaScript</label>
</div> */}


        <Modal style={{ left: 0 }} show={showModal} onHide={handleClose}>


          <Modal.Body>
            <div style={{ marginTop: '10%', marginBottom: '10%' }} >
              <div style={{ marginLeft: "32%", marginRight: "32%" }}>
                <text> Do you need GST bill ? </text>
              </div>
              <br></br>
              <div style={{ display: "flex", alignItems: 'center', justifyContent: "center" }}>
                <button onClick={lgn} className='GSTbill'> Yes </button>
                <button onClick={lgn} className='GSTbill'> No</button>
              </div>
            </div>

          </Modal.Body>
          {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
        </Modal>



        {/* 
      /// */}
        <div style={{ marginBottom: '2%', backgroundColor: '#eee' }}>
          <br></br>
          <br></br><br></br>
        </div>
      </div>




    </>
  )
}


// import React, { Component } from 'react'
// import EventDetHeader from './EventDetHeader'
// import './EventDetails.css'
// export default class EventDetails extends Component {

// constructor (props){
//   super(props);
//   this.state={
//     mode: "",
//     selectedate: "",
//     changetime: "",
//   }
// }


//   showDatePicker = (mode, data) => {
//     this.setState({ isDatePickerVisible: true, mode: mode, changetime: data });
//   };
//   showTimePicker = (mode, data, date) => {
//     this.setState({
//       isTimePickerVisible: true,
//       mode: mode,
//       selectedate: date,
//       changetime: data,
//     });
//   };
//   hideDatePicker = () => {
//     this.setState({ isDatePickerVisible: false, isTimePickerVisible: false });
//   };

//   render() {
//    return (
//       <div>
//         <EventDetHeader />
//         <div style={{display: "flex", flexDirection:"column", height: "100vh"}}>
//        <div style={{flex:1,backgroundColor:'#eee'}}>
//      <div style={{paddingHorizontal: 8,
//     backgroundColor: "white",
//     borderRadius: 4,
//     margin: 10,
//     marginHorizontal: 5,}}>
//       <div style={{display:'flex',
//       marginTop: 0,
//     flexDirection: "row",
//     marginBottom: 0,
//     borderBottomWidth: 0.6, height: 45,
//     borderBottomColor: "#cfcfcf",}}>

//         <div style={{ width: "47%",
//     backgroundColor: "#fff",
//     paddingLeft: 10,
//     justifyContent: "center",borderTopLeftRadius: 5,
//     marginTop: 0,}}>
//           <text style={{fontSize: 16,alignSelf: "center",
//     color: 'black',
//     marginBottom: 0,}}> Event Start: </text>
//         </div>

//         <div style={{ flexDirection: "row",display:"flex",
//     width: "37%",
//     marginLeft: 0,
//     backgroundColor: "#fff",
//     marginTop: 0,
//     justifyContent: "space-evenly",
//     // paddingTop: 6,
//     paddingBottom: 6,}}>
// <button style={{width: "10%",marginRight:150,borderWidth:0,backgroundColor:'white',
//     paddingTop: 2,}}
//     //onClick={() => this.showDatePicker("date", "setup")}
//     >
//       <input/>
// <text style={{ alignSelf: "center",
//     marginVertical: 2,}}>
//        {/* {showDateAsClientWant(this.state.setup_timestamp)} */}
//     </text>
// </button>
// <div style={{  width: "2%",
//     borderRightWidth: 0.3,
//     alignSelf: "center",
//     height: 23,marginRight:35,
//     borderLeftColor: "#444",
//     opacity: 0.4,}}></div>

//      <text style={{ alignSelf: "center",
//     marginVertical: 2,}}>Time</text>

// <button style={{width: "20%", marginLeft:15,borderWidth:0,backgroundColor:'white',
//     paddingTop: 2,}}>
//   {/* <text style={{ alignSelf: "center",
//     marginVertical: 2,}}>time</text> */} <input/>
// </button>
//     </div>
//       </div>


// /
// <div style={{ marginTop: 0,
//     flexDirection: "row",display:'flex',
//     marginBottom: 0,
//     borderBottomWidth: 6,height: 45,borderBottom:'1px solid black',
//     borderBottomColor: "#cfcfcf", }}>

// <div style={{ width: "47%",
//     backgroundColor: "#fff",
//     paddingLeft: 10,
//     justifyContent: "center",borderBottomLeftRadius: 5 ,
//     marginTop: 0,}}>
// <text style={{ marginBottom: 0,}}># of Guest:</text>
// </div>
// <div style={{display:'flex',
//     width: "53%",
//     marginLeft: 0,
//     backgroundColor: "#fff",
//     marginTop: 0,
//     justifyContent: "space-evenly",
//     // paddingTop: 6,
//     paddingBottom: 6,  justifyContent: "flex-start",
//     paddingLeft: 2,
//     paddingTop:  8}}>
//  <input style={{width: "100%",
//     borderWidth: 0,
//     // borderRadius: 4,
//     borderColor: "#fff",
//     backgroundColor: "#fff",
//     marginBottom: 0,}}></input>
// </div>

// </div>

// /
// <div style={{ marginTop: 0,
//     flexDirection: "row",display:'flex',
//     marginBottom: 0,
//     borderBottomWidth: 6,height: 45,borderBottom:'1px solid black',
//     borderBottomColor: "#cfcfcf", }}>

// <div style={{ width: "47%",
//     backgroundColor: "#fff",
//     paddingLeft: 10,
//     justifyContent: "center",borderBottomLeftRadius: 5 ,
//     marginTop: 0,}}>
// <text style={{ marginBottom: 0,}}>Event Type:</text>
// </div>
// <div style={{display:'flex',
//     width: "53%",
//     marginLeft: 0,
//     backgroundColor: "#fff",
//     marginTop: 0,
//     justifyContent: "space-evenly",
//     // paddingTop: 6,
//     paddingBottom: 6,  justifyContent: "flex-start",
//     paddingLeft: 2,
//     paddingTop:  8}}>
//  <input style={{width: "100%",
//     borderWidth: 0,
//     // borderRadius: 4,
//     borderColor: "#fff",
//     backgroundColor: "#fff",
//     marginBottom: 0,}}></input>
// </div>

// </div>

// {/* /* */}


//     </div>
//       </div>

//       <div style={{flex:1,backgroundColor:'#eee'}}>
//       <div style={{ marginTop: -110,
//     flexDirection: "row",display:'flex',
//     marginBottom: 0,
//     borderBottomWidth: 6,height: 45,borderBottom:'1px solid black',
//     borderBottomColor: "#cfcfcf", }}>

// <div style={{ width: "47%",
//     backgroundColor: "#fff",
//     paddingLeft: 10,
//     justifyContent: "center",borderBottomLeftRadius: 5 ,
//     marginTop: 0,}}>
// <text style={{ marginBottom: 0,}}>Event Type:</text>
// </div>
// <div style={{display:'flex',
//     width: "53%",
//     marginLeft: 0,
//     backgroundColor: "#fff",
//     marginTop: 0,
//     justifyContent: "space-evenly",
//     // paddingTop: 6,
//     paddingBottom: 6,  justifyContent: "flex-start",
//     paddingLeft: 2,
//     paddingTop:  8}}>
//  <input style={{width: "100%",
//     borderWidth: 0,
//     // borderRadius: 4,
//     borderColor: "#fff",
//     backgroundColor: "#fff",
//     marginBottom: 0,}}></input>
// </div>

// </div>
//       </div>
//       </div>

//         </div>
//     )
//   }
// }

export default EventDetails