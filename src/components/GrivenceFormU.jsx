import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import "./GrievanceForm.css";

function GrievanceForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    address: "",
    villageName: "",
    tehsilName: "",
    aadharNo: "",
    grievance: "",
  });

  const [grievanceId, setGrievanceId] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [emailEntered, setEmailEntered] = useState(false);
  const [fullNameEntered, setFullNameEntered] = useState(false);

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    setFormattedDate(formattedDate);

    const grievanceId = generateAlphanumericId();
    setGrievanceId(grievanceId);
  }, []);

  const generateAlphanumericId = () => {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    let result = "";

    for (let i = 0; i < 2; i++) {
      result += alphabets.charAt(Math.floor(Math.random() * alphabets.length));
    }

    for (let i = 0; i < 4; i++) {
      result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    result = result.split("").sort(() => 0.5 - Math.random()).join("");

    return result;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email" && value !== "") {
      setEmailEntered(true);
    }

    if (name === "fullName" && value !== "") {
      setFullNameEntered(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8082/grievance/submitGrievance",
        { grievanceId, date: new Date(), ...formData }
      );

      if (response.status === 200) {
        setShowAlert(true);
        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          address: "",
          villageName: "",
          tehsilName: "",
          aadharNo: "",
          grievance: "",
        });

        setTimeout(() => {
          window.location.href = "/home";
        }, 3000);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit grievance. Please try again later.");
    }
  };

  return (
    <div className="grievance-form-container">
      <Form onSubmit={handleSubmit}>
        {showAlert && (
          <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
            Grievance submitted successfully!
          </Alert>
        )}

        <Form.Group controlId="formFullName" className="mb-3">
          <Form.Label className="required" >Full Name <span style={{ color: "red" }}>*</span>:</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            placeholder="Enter your Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            pattern="[A-Za-z\s]+"
            title="Full Name should contain only letters and spaces."
          />
          <Form.Text className="text-muted">
           Enter full name and should not have numbers .
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label className="required" >Email <span style={{ color: "red" }}>*</span>:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="e.g., abc@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        {emailEntered && fullNameEntered && (
          <>
            <Form.Group controlId="formGrievanceId" className="mb-3">
              <Form.Label>Grievance ID<span style={{ color: "red" }}>*</span>:</Form.Label>
              <Form.Control
                type="text"
                name="grievanceId"
                value={grievanceId}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="formDate" className="mb-3">
              <Form.Label>Date <span style={{ color: "red" }}>*</span>:</Form.Label>
              <Form.Control
                type="text"
                name="date"
                value={formattedDate}
                readOnly
              />
            </Form.Group>
          </>
        )}

        <Form.Group controlId="formMobile" className="mb-3">
          <Form.Label className="required" >Mobile<span style={{ color: "red" }}>*</span>:</Form.Label>
          <Form.Control
            type="tel"
            pattern="[6-9][0-9]{9}"
            maxLength="10"
            placeholder="e.g., xxxxx xxxxx"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            title="Mobile number should start with numbers ranging from 6 to 9 and be exactly 10 digits long."
          />
          <Form.Text className="text-muted">
            Mobile number should start with numbers ranging from 6 to 9 only.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formAddress" className="mb-3">
          <Form.Label className="required" >Address <span style={{ color: "red" }}>*</span>:</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="Enter your Address"
            value={formData.address}
            onChange={handleChange}
            required
            pattern="^[a-zA-Z0-9\s,'-]+(\s*(Apt|Suite|Unit|#)\s*\d+)?(\s*,\s*[a-zA-Z\s]+,\s*[a-zA-Z]{2}\s*\d{5})?$"

            title="Address can contain letters, numbers, spaces, and the characters , . -"
          />
        </Form.Group>

        <Form.Group controlId="formVillageName" className="mb-3">
          <Form.Label className="required" >Village Name <span style={{ color: "red" }}>*</span>:</Form.Label>
          <Form.Control
            type="text"
            name="villageName"
            placeholder="Enter your Village Name"
            value={formData.villageName}
            onChange={handleChange}
            required
            pattern="[A-Za-z\s]+"
            title="Village Name should contain only letters and spaces."
          />
        </Form.Group>

        <Form.Group controlId="formTehsilName" className="mb-3">
          <Form.Label className="required" >Tehsil Name<span style={{ color: "red" }}>*</span>:</Form.Label>
          <Form.Control
            type="text"
            name="tehsilName"
            placeholder="Enter your Tehsil Name"
            value={formData.tehsilName}
            onChange={handleChange}
            required
            pattern="[A-Za-z\s]+"
            title="Tehsil Name should contain only letters and spaces."
          />
        </Form.Group>

        <Form.Group controlId="formAadharNo" className="mb-3">
          <Form.Label className="required" >Aadhar Number <span style={{ color: "red" }}>*</span>:</Form.Label>
          <Form.Control
            type="text"
            name="aadharNo"
            pattern="[0-9]{12}"
            maxLength="12"
            placeholder="e.g., xxxx xxxx xxxx"
            value={formData.aadharNo}
            onChange={handleChange}
            required
            title="Aadhar Number should be exactly 12 digits long."
          />
        </Form.Group>

        <Form.Group controlId="formGrievance" className="mb-3">
          <Form.Label className="required" >Enter your Problem <span style={{ color: "red" }}>*</span>:</Form.Label>
          <Form.Control
            as="textarea"
            name="grievance"
            placeholder="Enter your problem here"
            value={formData.grievance}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default GrievanceForm;