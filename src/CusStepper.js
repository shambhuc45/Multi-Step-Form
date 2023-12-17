import React, { useState, useEffect } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Firstform from "./components/Firstform";
import Secondform from "./components/Secondform";
// import Thirdform from './components/Thirdform';
import Reviewform from "./components/Reviewform";
import ThirdStep from "./components/ThirdStep";

const stepStyle = {
  boxShadow: 2,
  padding: 2,

  "& .Mui-active": {
    "&.MuiStepIcon-root": {
      color: "#2AD882",
      fontSize: "2rem",
    },
  },
  "& .Mui-completed": {
    "&.MuiStepIcon-root": {
      color: "#2AD882",
      fontSize: "2rem",
    },
  },

  "& .MuiStepIcon-text": {
    color: "#fff",
    fontSize: "1.5rem",
    fontFamily: "'Roboto Condensed', sans-serif",
  },
  "& .MuiStepLabel-alternativeLabel": {
    "& .Mui-active": {
      color: "#2AD882",
      fontSize: "1.5rem",
      fontWeight: "600",
      fontFamily: "'Roboto Condensed', sans-serif",
    },
    "& .Mui-disabled": {
      color: "#fff",
      fontSize: "1.5rem",
      fontWeight: "600",
      fontFamily: "'Roboto Condensed', sans-serif",
    },
    "& .Mui-completed": {
      color: "#2AD882",
      fontSize: "1.5rem",
      fontWeight: "600",
      fontFamily: "'Roboto Condensed', sans-serif",
    },
  },
};

export default function CusStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    accountType: "",
    documentType: "",
    nomName: "",
    nomAge: "",
    terms: false,
    privacy: false,
  });
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    let validFields = [];
    switch (activeStep) {
      case 0:
        validFields = ["name", "email", "phone", "gender", "dob"];
        break;
      case 1:
        validFields = ["accountType", "documentType"];
        break;
      case 2:
        validFields = ["nomName", "nomAge"];
        break;
      default:
        break;
    }
    const isValid = validFields.every((field) => userData[field] !== "");
    setIsValid(isValid);
  }, [activeStep, userData]);

  const handleFirstFormNext = (isValid) => {
    if (isValid) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setIsValid(false);
    }
  };
  const handleSecondFormNext = (isValid) => {
    if (isValid) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setIsValid(false);
    }
  };
  const handleThirdFormNext = (isValid) => {
    const { terms, privacy } = userData;
    if (isValid && terms && privacy) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setIsValid(false);
    }
  };
  const handleSubmitForm = () => {
    setUserData({
      name: "",
      email: "",
      phone: "",
      gender: "",
      dob: "",
      accountType: "",
      documentType: "",
      nomName: "",
      nomAge: "",
      terms: false,
      privacy: false,
    });
    setIsValid(false);
    setActiveStep(0);
    alert("Your data have been Submitted.");
  };

  const handleBack = () => {
    if (activeStep !== 0) {
      setActiveStep((activeStep) => activeStep - 1);
      setIsValid(false);
    }
  };

  const handleNext = () => {
    switch (activeStep) {
      case 0:
        handleFirstFormNext(isValid);
        break;
      case 1:
        handleSecondFormNext(isValid);
        break;
      case 2:
        handleThirdFormNext(isValid);
        break;
      case 3:
        handleSubmitForm();
        break;
      default:
        break;
    }
  };
  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <Firstform
            data={userData}
            setData={setUserData}
            onNext={handleFirstFormNext}
          />
        );
      case 1:
        return (
          <Secondform
            data={userData}
            setData={setUserData}
            onNext={handleSecondFormNext}
          />
        );
      case 2:
        return (
          <ThirdStep
            data={userData}
            setData={setUserData}
            onNext={handleThirdFormNext}
          />
        );
      case 3:
        return <Reviewform userData={userData} />;
      default:
        break;
    }
  };
  let buttonNext;

  if (activeStep === 2) {
    buttonNext = "Review";
  } else if (activeStep === 3) {
    buttonNext = "Submit";
  } else {
    buttonNext = "Next";
  }
  let buttonPrevious;
  if (activeStep === 3) {
    buttonPrevious = "Edit";
  } else {
    buttonPrevious = "Previous";
  }
  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel sx={stepStyle}>
        {[
          "Personal Details",
          "Account Information",
          "Nominees Details",
          "Review Details",
        ].map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div>
        <div>
          {getStepContent(activeStep)}
          <div className="form-group btn-group row flex">
            <button
              type="Button"
              className="btn-next"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              {buttonPrevious}
            </button>

            <button
              type="Button"
              className="btn-next"
              color="primary"
              onClick={handleNext}
              disabled={!isValid}
            >
              {buttonNext}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
