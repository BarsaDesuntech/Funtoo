import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { updateUserDetails } from '../../services/APIServices';
import './Update.css'


function UpdateContect() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameValidationFailed, setNameValidationFailed] = useState(false);
  const [emailValidationFailed, setEmailValidationFailed] = useState(false);
  const context = useContext(AppContext);

  let data = localStorage.getItem("loginData");
  let objectData = JSON.parse(data);
  let mobile = objectData.mobile;
  let navigate = useNavigate();

  const HandleSubmit = () => {
    if (name.trim().length == 0) {
      setNameValidationFailed(true)
      return false;
    }
    else if (email.trim().length == 0) {
      setEmailValidationFailed(true)
      return false;
    }
    else {
      let UserData = {
        name: name,
        email: email,
        mobile: mobile
      }
      updateUserDetails(UserData)
        .then((res) => {
          console.log(res);
          localStorage.setItem('UserData', JSON.stringify(UserData));
          context.getLoginData(res)
        })
        .catch(err => {
          console.log(err);
        })
        .finally(navigate('/Home'))  
    }
  }
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        HandleSubmit();
    }
} 

  return (
    <div>

      <Form className='p-3  d-flex flex-column w-50 ' style={{ marginLeft: "24%", marginTop: "10%" }}>
        <span style={{ marginBottom: "10%", marginTop: "-10%", fontSize: 20 }}>Please update your contact details</span>
        <Form.Group className="mb-3 " controlId="formBasicEmail" >
          <Form.Label className='d-flex'>Name:</Form.Label>
          <Form.Control className={ nameValidationFailed ? "RightName" : "WrongName" }
             value={name} onChange={(event) => setName(event.target.value)} 
             onKeyPress={handleKeyPress}
             type="text" placeholder="Enter Your Name" style={{ marginBottom: "4%", backgroundColor: "#f9f9f9" }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='d-flex'>Email ID:</Form.Label>
          <Form.Control className={ emailValidationFailed ? "RightName" : "WrongName" }
             value={email} onChange={(event) => setEmail(event.target.value)} 
             onKeyPress={handleKeyPress}
             type="email" placeholder="Enter your email" style={{ marginBottom: "4%", backgroundColor: "#f9f9f9" }} />
        </Form.Group>

        <Button onClick={() => HandleSubmit()} style={{ backgroundColor: "#63c3a5", border: "none" }} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UpdateContect;