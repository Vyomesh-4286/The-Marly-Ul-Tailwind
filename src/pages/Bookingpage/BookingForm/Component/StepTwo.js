import React, { useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import './Step.css';

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to next step
    var arrival_date = document.getElementById("arrival_date");
    var departure_date = document.getElementById("departure_date");
    var group = document.querySelector('#group');
    if (!arrival_date.value) {
      alert('You must select a Arrival Date!');
      return false;
    }
    else if (!departure_date.value) {
      alert('You must select a Departure Date!');
      return false;
    }
    else if (group.checked == false) {
      alert('You must select You must agree before submitting!');
      return false;
    }
    else {
      nextStep();
    }
  };
  return (
    <div>
      <Form onSubmit={submitFormData}>
        <ProgressBar className="h-1 mt-3" variant="dark" now={50} />
        <h4 className="mt-5 mb-4">When will you be travelling?</h4>
        <Form.Group className="row">
          <Form.Group className="col-md-6 col-12 mb-3 mt-4">
            <Form.Label>Arrival date*</Form.Label>
            <Form.Control
              style={{ border: error ? "2px solid red" : "" }}
              id="arrival_date"
              type="date"
              placeholder="Select date..."
              className="p-3 mt-2"
            />
          </Form.Group>
          <Form.Group className="col-md-6 col-12 mb-3 mt-4">
            <Form.Label>Departure date*</Form.Label>
            <Form.Control
              style={{ border: error ? "2px solid red" : "" }}
              id="departure_date"
              type="date"
              placeholder="Select date..."
              className="p-3 mt-2"
            />
          </Form.Group>
          <Form.Group id="group_label" className="col-12 mb-3 mt-4">
            <Form.Check
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
              id="group"
            />
          </Form.Group>
        </Form.Group>
        <Form.Group className="row">
          <Form.Group className="col-sm-6 col-12 d-flex justify-content-start">
            <Button id="form_btn_position" className='form_back_btn rounded-pill btn manu_title py-2 px-3 text-dark me-1' variant="primary" onClick={prevStep}>Back</Button>
          </Form.Group>
          <Form.Group className="col-sm-6 col-12 d-flex justify-content-end">
            <Button id="form_btn_position" className='form_next_btn rounded-pill btn manu_title py-2 px-3 text-dark me-1' variant="primary" type="submit">Continue</Button>
          </Form.Group>
        </Form.Group>
      </Form>
    </div>
  );
};

export default StepTwo;
