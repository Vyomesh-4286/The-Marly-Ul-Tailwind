import React, { useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import './Step.css';

// creating functional component ans getting props from app.js and destucturing them
const StepFour = ({ nextStep, handleFormData, prevStep, values }) => {
    //creating error state for validation
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    // after form submit validating the form data using validator
    const submitFormData = (e) => {
        e.preventDefault();

        // checking if value of first name and last name is empty show error else take to next step
        var fname = document.getElementById("fname");
        var lname = document.getElementById("lname");
        var number = document.getElementById("number");
        var group1 = document.querySelector('input[name="group1"]:checked');
        var country = document.getElementById("country");
        if (!fname.value) {
            alert('You must Enter First Name!');
            return false;
        }
        else if (!lname.value) {
            alert('You must Enter Last Name!');
            return false;
        }
        else if (!number.value) {
            alert('You must Enter Number!');
            return false;
        }
        else if (validator.isEmpty(values.email)) {
            setError(true);
        }
        else if (group1 == null) {
            alert('You must select a Phone or Email!');
            return false;
        }
        else if (!country.value) {
            alert('You must select a Country!');
            return false;
        }
        else {
            navigate('/thankyou');
        }
    };
    return (
        <div>
            <Form onSubmit={submitFormData}>
                <ProgressBar className="h-1 mt-3" variant="dark" now={100} />
                <h4 className="mt-5 mb-4">Let’s stay in touch</h4>
                <Form.Group className="row">
                    <Form.Group className="col-md-6 col-12 mb-3">
                        <Form.Group>
                            <Form.Label>First Name*</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Type here..."
                                id="fname"
                                className="p-3"
                            />
                        </Form.Group>
                    </Form.Group>
                    <Form.Group className="col-md-6 col-12 mb-3">
                        <Form.Group>
                            <Form.Label>Last Name*</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Type here..."
                                id="lname"
                                className="p-3"
                            />
                        </Form.Group>
                    </Form.Group>
                    <Form.Group className="col-md-6 col-12 my-3">
                        <Form.Group>
                            <Form.Label>Phone Number*</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="+91 "
                                id="number"
                                maxLength={"10"}
                                className="p-3"
                            />
                        </Form.Group>
                    </Form.Group>
                    <Form.Group className="col-md-6 col-12 my-3">
                        <Form.Group>
                            <Form.Label>Email Address*</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Type here..."
                                id="email"
                                className="p-3"
                                onChange={handleFormData("email")}
                            />
                            {error ? (
                                <Form.Text style={{ color: "red" }}>
                                    This is a required field
                                </Form.Text>
                            ) : (
                                ""
                            )}
                        </Form.Group>
                    </Form.Group>
                    <Form.Group className="col-md-6 col-12 mt-3">
                        <Form.Group>
                            <Form.Label>How should we reach you?</Form.Label>
                            {['radio'].map((type) => (
                                <div key={`inline-${type}-1`} className="mb-3">
                                    <Form.Group id="group1" className="mb-3">
                                        <Form.Check
                                            inline
                                            label="Phone"
                                            name="group1"
                                            type={type}
                                            id="group1"
                                        />
                                    </Form.Group>
                                    <Form.Group id="group1" className="mb-3">
                                        <Form.Check
                                            inline
                                            label="Email"
                                            name="group1"
                                            type={type}
                                            id="group1"
                                        />
                                    </Form.Group>
                                </div>
                            ))}
                        </Form.Group>
                    </Form.Group>
                    <Form.Group className="col-md-6 col-12 mt-3">
                        <Form.Group>
                            <Form.Label>Country travelling from*</Form.Label>
                            <Form.Select id="country" aria-label="Default select example" className="p-3">
                                <option value="" selected disabled>Select country...</option>
                                <option value="INDIA">INDIA</option>
                                <option value="USA">USA</option>
                                <option value="UK">UK</option>
                            </Form.Select>
                        </Form.Group>
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

export default StepFour;
