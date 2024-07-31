import React, { useState } from 'react';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import axios from 'axios';

function SignUpPage() {
  // Function to generate a default empId
  const generateEmpId = () => {
    // Generate exactly 2 random numbers and 4 random uppercase alphabets
    const numbers = (Math.floor(10 + Math.random() * 90)).toString(); // 2-digit number
    const letters = Array.from({ length: 4 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join('');
    return `${numbers}${letters}`;
  };

  const [formData, setFormData] = useState({
    empId: generateEmpId(), // Set default empId value
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    role: 'emp', // Default role
    department: 'air', // Default department
    mobileNumber: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericValue = name === 'mobileNumber' ? value.replace(/\D/g, '') : value;
    setFormData({ ...formData, [name]: numericValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordMismatch(true);
      return;
    }
    setPasswordMismatch(false);

    try {
      console.log(formData)

      const response = await axios.post('http://localhost:8082/signUp/userSignUp', formData);
      if (response.status === 200) {
        alert("Successfully Registered");
        setShowAlert(true);
        // Redirect to homepage after 3 seconds
        setTimeout(() => {
          window.location.href = "/home";
        }, 3000);
      } else {
        throw new Error('Failed to Register');
      }
    } catch (error) {
      console.error(error);
      alert("Failed to Register. Please try again later.");
    }
  };

  const textStyle = {
    fontWeight: 'bold',
    textTransform: 'uppercase'
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card style={{ width: '400px', padding: '20px' }}>
        <Card.Body>
          <h2>Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmpId" style={{ marginBottom: "10px" }}>
              <Form.Label style={textStyle}>Employee ID <span style={{ color: 'red' }}>*</span>:</Form.Label>
              <Form.Control 
                type="text" 
                name="empId" 
                value={formData.empId} 
                readOnly 
                pattern="\d{2}[A-Za-z]{4}" 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formName" style={{ marginBottom: "10px" }}>
              <Form.Label style={textStyle}>Name <span style={{ color: 'red' }}>*</span>:</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                placeholder='Enter your Name' 
                pattern="[A-Za-z ]{1,}" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formEmail" style={{ marginBottom: "10px" }}>
              <Form.Label style={textStyle}>Email <span style={{ color: 'red' }}>*</span>:</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" 
                placeholder="Enter email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formUsername" style={{ marginBottom: "10px" }}>
              <Form.Label style={textStyle}>Username <span style={{ color: 'red' }}>*</span>:</Form.Label>
              <Form.Control 
                type="text" 
                name="username" 
                placeholder='Enter Username' 
                value={formData.username} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formPassword" style={{ marginBottom: "10px" }}>
              <Form.Label style={textStyle}>Password <span style={{ color: 'red' }}>*</span>:</Form.Label>
              <Form.Control 
                type="password" 
                name="password" 
                placeholder='Enter Password' 
                value={formData.password} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword" style={{ marginBottom: "10px" }}>
              <Form.Label style={textStyle}>Confirm Password <span style={{ color: 'red' }}>*</span>:</Form.Label>
              <Form.Control 
                type="password" 
                name="confirmPassword" 
                placeholder='Confirm Password' 
                value={formData.confirmPassword} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formRole" style={{ marginBottom: "10px" }}>
              <Form.Label style={textStyle}>Role <span style={{ color: 'red' }}>*</span>:</Form.Label>
              <Form.Control 
                as="select" 
                name="role" 
                value={formData.role} 
                onChange={handleChange} 
                required
              >
                <option value="emp">Employee</option>
                <option value="hod">Head of Department</option>
                <option value="prm">Program Manager</option>
                <option value="ceo">CEO</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formDepartment" style={{ marginBottom: "10px" }}>
              <Form.Label style={textStyle}>Department <span style={{ color: 'red' }}>*</span>:</Form.Label>
              <Form.Control 
                as="select" 
                name="department" 
                value={formData.department} 
                onChange={handleChange} 
                required
              >
                <option value="air">Air</option>
                <option value="water">Water</option>
                <option value="fire">Fire</option>
                <option value="land">Land</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formMobileNumber" style={{ marginBottom: "10px" }}>
              <Form.Label style={textStyle}>Mobile Number <span style={{ color: 'red' }}>*</span>:</Form.Label>
              <Form.Control 
                type="tel" 
                name="mobileNumber" 
                pattern="[6-9][0-9]{9}" 
                maxLength="10" 
                placeholder="xxxxx xxxxx" 
                value={formData.mobileNumber} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            {passwordMismatch && (
              <Alert variant="danger" className="mt-3">
                Passwords do not match!
              </Alert>
            )}
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
          {showAlert && (
            <Alert variant="success" className="mt-3">
              Successfully Registered! Redirecting to homepage...
            </Alert>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default SignUpPage;
