import React, { useState } from 'react';
import { Container, Form, Card, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
    });

  const [showAlert, setShowAlert] = useState(false);                                                                                                                                
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    try {
      const inputs = new FormData();
      inputs.append('username', formData.username);
      inputs.append('password', formData.password);
  
      // Make sure to use await with axios.post to handle the asynchronous response
      const response = await axios.post('http://localhost:8082/login/userlogin', inputs);
      
      console.log("Response from server:", response);
  
      // Since response is an Axios response object, the actual response data is available in response.data
      if (response.data === "hod") {
        // Handle successful login
        setLoginSuccess(true);
        setShowAlert(true);
        setTimeout(() => {
          window.location.href = "/mainhod"; // Redirect after successful login
        }, 5000);
      }  // Since response is an Axios response object, the actual response data is available in response.data
      else if (response.data === "emp") {
        // Handle successful login
        setLoginSuccess(true);
        setShowAlert(true);
        setTimeout(() => {
          window.location.href = "/mainemp"; // Redirect after successful login
        }, 5000);
      }  // Since response is an Axios response object, the actual response data is available in response.data
      else if (response.data === "prm") {
        // Handle successful login
        setLoginSuccess(true);
        setShowAlert(true);
        setTimeout(() => {
          window.location.href = "/mainprm"; // Redirect after successful login
        }, 5000);
      }  // Since response is an Axios response object, the actual response data is available in response.data
      else if (response.data === "ceo") {
        // Handle successful login
        setLoginSuccess(true);
        setShowAlert(true);
        setTimeout(() => {
          window.location.href = "/CEO"; // Redirect after successful login
        }, 5000);
      } else {
        // Handle failed login
        setError("Login failed. Please check your credentials and try again.");
        setShowAlert(true);
        setTimeout(() => {
          setError(null); // Clear error message
          setShowAlert(false); // Hide error message
        }, 5000); // Hide error message after 5 seconds
        // Clear form fields
        setFormData({ ...formData, password: '' }); // Clear password field
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Error during login:", error);
      setFormData({ ...formData, password: '' }); // Clear password field
      setError("Failed to sign in. Please try again later.");
      setShowAlert(true);
    }
  };
  
  const textStyle = {
    fontWeight: 'bold',
    textTransform: 'uppercase'
  };

  const cardStyle = {
    width: '100%', // Full width of container
    maxWidth: '400px', // Max width of 400px
    padding: '20px', // Padding around the card
    margin: 'auto', // Center horizontally
    marginTop: '20px' // Space from top
  };

  return (
    <>
      <Container className="mt-5 d-flex justify-content-center align-items-center">
        <div style={cardStyle}>
          <Card>
            <Card.Body>
              {showAlert && (
                <Alert variant={error ? "danger" : "success"} className="mt-3">
                  {error || (loginSuccess ? "Login Successful! Redirecting to homepage..." : "Login failed! Please try again...")}
                </Alert>
              )}
              <Card.Title className="text-center"><b>LOGIN</b></Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername" style={{ marginBottom: "10px" }}>
                  <Form.Label style={textStyle}>Username <span style={{ color: 'red' }}>*</span>:</Form.Label>
                  <Form.Control type="text" name="username" placeholder="Enter Username" value={formData.username} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formPassword" style={{ marginBottom: "10px" }}>
                  <Form.Label style={textStyle}>Password <span style={{ color: 'red' }}>*</span>:</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} required />
                </Form.Group>
                {/* <Form.Group controlId="role" style={{ marginBottom: "10px" }}>
                  <Form.Label style={textStyle}>who are you <span style={{ color: 'red' }}>*</span>:</Form.Label>
                  <Form.Control as="select" name="role" value={formData.role} onChange={handleChange} required>
                    <option value="">Select role</option>
                    <option value="emp">emp</option>
                    <option value="hod">hod</option>
                    <option value="prm">prm</option>
                    <option value="ceo">ceo</option>
                  </Form.Control>
                </Form.Group> */}
                <Button variant="primary" type="submit">Login</Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default LoginPage;
