import React, { useState, useEffect } from "react";
import Input from "./form-inputs/Input";
import GenderRadioGroup from "./form-inputs/GenderRadioGroup";

export default function Firstform({ data, setData }) {
  const radiobutton = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];
  const [isValid, setIsValid] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
  });

  useEffect(() => {
    const isNameValid = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(data.name);
    const isEmailValid = /\S+@\S+\.\S+/.test(data.email);
    const isPhoneValid = /^(\+977)?(97|98)\d{8}$/.test(data.phone);
    const isGenderValid = ["male", "female", "other"].includes(data.gender);
    const isDOBValid = new Date(data.dob) <= new Date();

    setFieldErrors({
      name: isNameValid ? "" : "Please enter a valid name",
      email: isEmailValid ? "" : "Please enter a valid email address",
      phone: isPhoneValid ? "" : "Please enter a valid phone number",
      gender: isGenderValid ? "" : "Please select a Gender",
      dob: isDOBValid ? "" : "Please enter a valid date of birth",
    });

    const formIsValid =
      isNameValid &&
      isEmailValid &&
      isPhoneValid &&
      isGenderValid &&
      isDOBValid &&
      Object.values(data).every((value) => value !== "");

    setIsValid(formIsValid);
  }, [data]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <div className="steps">
        <h1 className="heading-first text-center">Personal Information</h1>
        <form className="forms">
          <Input
            htmlFor="name"
            label="Full Name:"
            type="text"
            id="name"
            placeholder="Enter Your Full Name"
            onChange={handleInputChange}
            value={data["name"]}
            errormsg={fieldErrors.name}
          />

          <Input
            htmlFor="email"
            label="Email Address:"
            type="email"
            id="email"
            placeholder="Enter Your Email"
            onChange={handleInputChange}
            value={data["email"]}
            errormsg={fieldErrors.email}
          />
          <Input
            htmlFor="phone"
            label="Phone:"
            type="tel"
            id="phone"
            placeholder="Enter Your Phone"
            onChange={handleInputChange}
            value={data["phone"]}
            errormsg={fieldErrors.phone}
          />
          <GenderRadioGroup
            onChange={handleRadioChange}
            errormsg={fieldErrors.gender}
            radiobutton={radiobutton}
            value={data["gender" === radiobutton.value]}
          />
          <Input
            htmlFor="dob"
            label="Date of Birth:"
            type="date"
            id="dob"
            placeholder="Enter Your Date of Birth"
            onChange={handleInputChange}
            value={data["dob"]}
            errormsg={fieldErrors.dob}
          />
        </form>
      </div>
    </>
  );
}
