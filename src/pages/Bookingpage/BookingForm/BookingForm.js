import { useState, useNavigate } from "react";
import StepOne from "./Component/StepOne";
import StepTwo from "./Component/StepTwo";
import StepThree from './Component/StepThree';
import StepFour from './Component/StepFour';

function BookingForm() {
    //state for steps
    const [step, setstep] = useState(1);

    //state for form data
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        age: "",
        email: ""
    })

    // function for going to next step by increasing step state by 1
    const nextStep = () => {
        setstep(step + 1);
    };

    // function for going to previous step by decreasing step state by 1
    const prevStep = () => {
        setstep(step - 1);
    };

    // handling form input data by taking onchange value and updating our previous form data state
    const handleInputData = input => e => {
        // input value from the form
        const { value } = e.target;

        //updating for data state taking previous state and then adding new value to create new object
        setFormData(prevState => ({
            ...prevState,
            [input]: value
        }));
    }


    // javascript switch case to show different form in each step
    switch (step) {
        // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 1:
            return (
                <div className="App">
                    <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />
                </div>
            );
        // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 2:
            return (
                <div className="App">
                    <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                </div>
            );
        case 3:
            return (
                <div className="App">
                    <StepThree nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                </div>
            );
        case 4:
            return (
                <div className="App">
                    <StepFour prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                </div>
            );
        // Only formData is passed as prop to show the final value at form submit

        // default case to show nothing
        default:
            return (
                <div className="App">
                </div>
            );
    }
}

export default BookingForm;