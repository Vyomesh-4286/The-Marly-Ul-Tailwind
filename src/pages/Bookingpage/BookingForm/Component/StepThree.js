import React, { useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import './Step.css';

// creating functional component ans getting props from app.js and destucturing them
const StepThree = ({ nextStep, handleFormData, prevStep, values }) => {
    //creating error state for validation
    const [error, setError] = useState(false);

    // after form submit validating the form data using validator
    const submitFormData = (e) => {
        e.preventDefault();

        // checking if value of first name and last name is empty show error else take to next step
        var adults = document.getElementById("number_adults");
        var ages = document.getElementById("number_ages");
        if (!adults.value) {
            alert('You must select a how many Adults come!');
            return false;
        }
        else if (!ages.value) {
            alert('You must select a Age of Children come!');
            return false;
        }
        else {
            nextStep();
        }
    };
    return (
        <div>
            <Form name="myForm" onSubmit={submitFormData}>
                <ProgressBar className="h-1 mt-3" variant="dark" now={75} />
                <h4 className="mt-5 mb-4">Who will you be travelling with?</h4>
                <Form.Group className="row">
                    <Form.Group className="col-md-6 col-12 mb-3 mt-4">
                        <Form.Label>Number of Adults*</Form.Label>
                        <Form.Select id="number_adults" aria-label="Default select example" className="p-3">
                            <option value="" selected disabled>Select number...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="3">4</option>
                            <option value="3">5</option>
                            <option value="3">6</option>
                            <option value="3">7</option>
                            <option value="3">8</option>
                            <option value="3">9</option>
                            <option value="3">10</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="col-md-6 col-12 mb-3 mt-4">
                        <Form.Label>Number of Children (ages)</Form.Label>
                        <Form.Select id="number_ages" aria-label="Default select example" className="p-3">
                            <option value="" selected disabled>Select number...</option>
                            <option value="1">1 year</option>
                            <option value="2">2 year</option>
                            <option value="3">3 year</option>
                            <option value="3">4 year</option>
                            <option value="3">5 year</option>
                            <option value="3">6 year</option>
                            <option value="3">7 year</option>
                            <option value="3">8 year</option>
                            <option value="3">9 year</option>
                            <option value="3">10 year</option>
                        </Form.Select>
                    </Form.Group>
                </Form.Group>
                <Form.Group className=" row">
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

export default StepThree;
