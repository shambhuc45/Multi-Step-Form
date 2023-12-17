import React, { useState, useEffect } from "react";
import Input from "./form-inputs/Input";

export default function ThirdStep({ data, setData }) {
  const [isValid, setIsValid] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    nomName: "",
  });
  useEffect(() => {
    const isNameValid = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(data.nomName);

    setFieldErrors({
      nomName: isNameValid ? "" : "Please enter a valid name",
    });

    const formIsValid =
      isNameValid && Object.values(data).every((value) => value !== "");

    setIsValid(formIsValid);
  }, [data]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };
  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setData({ ...data, [id]: checked });
  };
  return (
    <>
      <div className="steps">
        <h1 className="heading-first text-center">Nominee Details</h1>
        <form className="forms">
          <Input
            htmlFor="nomName"
            label="Nominee's Full Name:"
            type="text"
            id="nomName"
            placeholder="Enter Nominee's Full Name"
            onChange={handleInputChange}
            value={data["nomName"]}
            errormsg={fieldErrors.nomName}
          />
          <Input
            htmlFor="nomAge"
            label="Nominee's Age:"
            type="number"
            id="nomAge"
            placeholder="Enter Nominee's Age"
            onChange={handleInputChange}
            value={data["nomAge"]}
            errormsg={fieldErrors.nomAge}
          />
          <div className="form-group row group-check">
            <div className="top-margin">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="check-label"
                value="Accepted Terms and Conditions"
                checked={data.terms || false}
                onChange={handleCheckboxChange}
                required
              />
              <label htmlFor="terms" className="form-label check-label">
                Accept Terms and Conditions
              </label>
              <br />
            </div>
            <div className="top-margin">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                className="check-label"
                value="Accepted Privacy Policy"
                checked={data.privacy || false}
                onChange={handleCheckboxChange}
                required
              />
              <label htmlFor="privacy" className="form-label check-label">
                Accept Privacy Policy
              </label>
              <br />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
