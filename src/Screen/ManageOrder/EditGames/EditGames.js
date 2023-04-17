import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Header from './EditGameHeader'
import "./EditGames.css"
import { Modal } from 'react-bootstrap'
import { border, color } from '@mui/system'
import { SearchGameForUpdateOrder } from '../../../services/GameApiService'
import { UpdateOrderItems } from '../../../services/OrderService'
import { message_and_notify } from '../../../services/ChatServices'
import HeaderAll from '../../../Layout/HeaderAll'

let dataDeepCopy;
function EditGames() {
  const [showModal, setShow] = useState(false);
  const [showModal2, setShow2] = useState(false);
  const [gameData, setGameData] = useState();

  const [list, setList] = useState([])
  const [searchinput, setSearchInput] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [addItem, setAddItem] = useState([])
  const location = useLocation();
  // const value = location.state
  console.log("THIS IS LOCATION", location)
  const [data, setData] = useState(location.state)
  console.log(data, "....................................");
  const [saveData, setSaveData] = useState([])
  const navigate = useNavigate()
  // console.log(arr,"this is array")
  useEffect(() => {
    setData(location.state)
    // console.log(saveData,"save data-----------------")
  }, [])

  const handleClose = () => {
    setShow(false)
  }
  const handleShow = () => { setShow(true) }
  const handleClose2 = () => { setShow2(false) }
  const handleShow2 = () => { setShow2(true) }

  const liveSearch = (e) => {
    setSearchInput(e.target.value)
    setIsSearching(true)
    SearchGameForUpdateOrder({ q: e.target.value })
      .then(res => {
        console.log(res.data, "-------------->data----------")
        if (res.is_success) {
          setList(res.data)
          console.log(list, "--------------->list")
        }
        else {
          setList([])
        }
        setIsSearching(false)
      }).catch((error) => {
        // setList([])
        setIsSearching(false)
        alert("404, page not found", error.message)
      })
  }

  const AddItemUpdate = (item) => {
    console.log("THIS IS CALLED ARRAY", data.orderDetails.line_items)
    const index = data.orderDetails.line_items.findIndex((val) => val.game_id == item.game_id)
    console.log("find index''''''''''''", index)
    if (index == -1) {
      data.orderDetails.line_items.push(item);
    }
    else {
      alert("Look out ! , Game is already exist !")
    }
    console.log("THIS IS INDEX VALUE----------", index)
    handleClose2()
  }

  const goback = () => {
    navigate(`/confirmorder/${data.orderDetails.id}`,
    )
  }

  // FOR INCREMENT QUANTITY BY VALUE
  const updateQuantity = (itemId, value) => {
    let dataDeepCopy = JSON.parse(JSON.stringify(data));

    for (let i = 0; i < data.orderDetails.line_items.length; ++i) {
      let item = data.orderDetails.line_items[i];
      // console.log('THIS IS TEH ITEM:', item);

      if (item.game_id === itemId) {
        const updatedItem = {
          ...item,
          game: { ...item.game },
          quantity: Number(item.quantity) + value
        };
        // console.log('THIS IS THE UPDATED ITEM: ', updatedItem);
        dataDeepCopy.orderDetails.line_items[i] = updatedItem;
      }
    }
    // console.log('THIS IS THE UPDATED DEEPCOPY: ', dataDeepCopy);
    setData(dataDeepCopy);
  };

  // For DECREMENT QUANTITY BY VALUE AND DELETE IF QUANTITY < 1
  const decrementQuantity = (item, value) => {
    console.log("THIS IS itemId", item.quantity)
    let dataDeepCopy = JSON.parse(JSON.stringify(data));

    // Dlete Item if quantity is less than 1
    if (item.quantity <= 1) {
      const allData = dataDeepCopy.orderDetails.line_items
      const removeItems = allData.filter((obj) => obj.game_id != item.game_id)
      dataDeepCopy.orderDetails.line_items = removeItems.slice(0)
      setData(dataDeepCopy)
    }
    else {
      // Decrement Item Quantity by value if Quantity is greater than 1
      for (let i = 0; i < data.orderDetails.line_items.length; ++i) {
        let itemData = data.orderDetails.line_items[i];
        console.log('THIS IS THE ITEMDATA:', itemData);

        if (itemData.game_id === item.game_id) {
          const updatedItem = {
            ...itemData,
            game: { ...itemData.game },
            quantity: Number(itemData.quantity) - value
          }
          console.log('THIS IS THE UPDATED ITEM: ', updatedItem);
          dataDeepCopy.orderDetails.line_items[i] = updatedItem;
        }
        // console.log("--------THIS IS DATADEEPCOPY_________", dataDeepCopy)
        setData(dataDeepCopy);
      }
    }
  }

  // THIS IS FOR SAVE ALL CHANGES IN QUANTITY ON SAVE BUTTON
  const updateOrderGames = () => {
    let games = []
    let dataDeepCopy = JSON.parse(JSON.stringify(data));
    console.log("THIS IS DATADEEPCOPY--------------", dataDeepCopy)
    let arr = Array.from(dataDeepCopy.orderDetails.line_items);
    console.log(arr, "This arrray----------")
    arr.forEach((item) => {
      // setGameData(item)
      // console.log(item.price,item.quantity,"88888888888888888888888888888888")
      games.push({
        game_id: item.game_id,
        quantity: item.quantity,
        price: item.price
      })
    })

    let userData = {
      order_id: dataDeepCopy.orderDetails.id,
      customer_id: dataDeepCopy.orderDetails.customer_id,
      games: JSON.stringify(games),
      requestedBy: "user"
    }
    // if(userData){
    //   handleShow()
    // }

    let userDataMessage = {
      sender_id: "U00001",
      receiver_id: "R00003",
      title: "New Message",
      content: "You have successfully made the changes admin will review and confirm the order",
      type: "user"
    }

    let adminDataMessage = {
      sender_id: "U00001",
      receiver_id: "R00003",
      title: "New Message",
      content: "You have successfully made the changes admin will review and confirm the order",
      type: "admin"
    }
    UpdateOrderItems(userData)
      .then((result) => {
        if (result.is_success) {
          console.log("This is save res -----", result)
          handleShow()
          // message_and_notify(userDataMessage)
          // .then((res)=>{
          //   console.log("................send res notification..............", res)
          // })
          // .catch(err => {console.log("..........send notification......", err)})
          // message_and_notify(adminDataMessage)
          // .then((res) => {
          //   console.log("..........send notification.........", res)
          // })
          // .catch(err => {console.log(".........send notification..........", err)})
        }
        else {
          alert("Error")
        }
      })
      .catch((err) => console.log(err))


    console.log(games, "------------games------------")
    console.log("+++++++++++THIS IS USERDATA+++++++++++", userData)
    console.log("----------THIS IS USERDATAMESSAGE------", userDataMessage)
    console.log("**********THIS IS ADMINDATAMESSAGE*****", adminDataMessage)
  }
  console.log('THIS IS THE DATA: ', data);
  // console.log(gameData,"222222222222222222222222222")
  // console.log(addItem, "THIS IS ADD ITEM_____++++")

  return (
    <>
      <div>
        {/* <Header title={"Edit Games"} icon_name={faCirclePlus} show={() => handleShow2()} goback={goback} /> */}
        <HeaderAll title={"Edit Games"} icon_name={faCirclePlus} show={() => handleShow2()} goback={goback}  editGames={true} />
      </div>
      {
        data === undefined ? <text>Data is showing..... </text> :

          <div style={{ marginTop: "1%" }}>
            <div className='bodyContainer'>
              <div className='subtitle'>
                <text>Games</text>
              </div>
              {
                data.orderDetails.line_items.map((item) => {
                  return (
                    <>
                      <div className='subContainer' key={item.game.id}>
                        <div className='imageContainer'>
                          <img src={item.game.image_url} alt='image clicked' className="imageStyle" />
                        </div>
                        <div className='textContainer'>
                          <div>
                            <text >{item.game.name}</text>
                          </div>

                          <div className="btn__container">
                            <button
                              className="control__btn1"
                              onClick={() => decrementQuantity(item, 1)}
                              style={{ textAlign: "center" }}
                            >
                              -
                            </button>
                            <input
                              className='inputText'
                              type="text"
                              value={item.quantity}
                              // onChange={(value)=>deleteItem(value,item)}
                              style={{ textAlign: "center" }}
                            />
                            <button
                              className="control__btn2"
                              onClick={() => updateQuantity(item.game.id, 1)}
                              style={{ textAlign: "center", alignItems: "center" }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className='priceText'>
                          <text>{"₹"}{item.game.rent}</text>
                        </div>

                      </div>
                      <hr style={{ width: "98%", margin: "auto" }} />
                    </>
                  )
                })
              }
            </div>
          </div>
      }
      <div className='saveButton'>
        <button
          className='savebutton'
          onClick={() => updateOrderGames()}
        >
          Save
        </button>
      </div>
      <>
        <Modal style={{ margin: "auto", border: "none" }} show={showModal} onHide={handleClose}>
          <Modal.Body style={{ margin: "auto", border: "none", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Modal.Title style={{ margin: "auto", border: "none", paddingTop: "5px", paddingBottom: "10px" }}>
              <text style={{ alignContent: "center", textAlign: "center", fontWeight: "400" }}>Success</text>
            </Modal.Title>
            <div>
              <text>Order Updated Succesfully</text>
            </div>
          </Modal.Body>
          <Modal.Footer style={{ margin: "auto", border: "none" }}>
            <button onClick={() => goback()} style={{ backgroundColor: 'rgb(99, 195, 165)', border: "none", borderRadius: "5px", width: "50px", color: "white" }}>OK</button>
          </Modal.Footer>
        </Modal>
      </>
      <>
        <Modal style={{ margin: "auto", border: "none", }} show={showModal2} onHide={handleClose2}>
          <Modal.Body className='modalBodyDiv' style={{ backgroundColor: "white" }}>
            <div className='searchModal' >
              <div className="Modaltext" show={showModal2} s >
                <text>Find Games :</text>
              </div>
              <div className="ModalInput">
                <input
                  type="text"
                  placeholder="Type to search..."
                  className="ModalInput"
                  onChange={(e) => liveSearch(e)}
                  style={{ border: ".5px solid grey", borderRadius: "5px", }}

                />
              </div>
              <div>
                {
                  list.length > 0 ? (
                    isSearching ? (
                      <text style={{
                        fontSize: 18,
                        // color: "grey",
                        alignSelf: "center",
                        marginTop: 40,
                        marginBottom: 30
                      }}>Searching...</text>
                    ) : (
                      <>
                        <div
                          // style={{ margin: "auto", display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "18px", }}
                          style={{ textAlign: "center", paddingTop: "5%", paddingBottom: "3%" }}
                          className="modaSubText"
                        >
                          <text style={{ fontWeight: 500 }}>Matched Games</text>
                        </div>
                        {list && list.map((item) => {
                          //  console.log(item,">>>>***")
                          return <div
                          // style={{ display: 'flex', flexDirection: 'column', borderBottomWidth: '1px', borderBottomColor: '#ddd', borderBottomStyle: 'solid' }}
                          >
                            <div>
                              <div className=" searchItem" style={{
                                backgroundColor: "white",
                                marginTop: 10,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                              }}
                                onClick={() => AddItemUpdate(item)}
                              >
                                <div>
                                  <img
                                    src={item.game.image_url}
                                    // src={`https://funworks.in/uploads/game/${item.image}`}
                                    style={{ height: 40, width: 50, }}
                                    className='imgStyle'
                                  />
                                </div>
                                <div style={{ width: "40%" }} className="resText">
                                  <text>{item.game.game_slug}</text>
                                </div>
                                <div className="resText">
                                  <text>{"₹"}{item.game.rent}</text>
                                </div>

                              </div>
                            </div>
                          </div>
                        })}
                      </>
                    )) : null}
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    </>
  )
}

export default EditGames