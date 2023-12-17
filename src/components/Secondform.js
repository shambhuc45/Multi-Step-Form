import React, { useState, useEffect } from "react";
import DropDown from "./form-inputs/DropDown";
// import Input from "./Input";

export default function Secondform({ data, setData }) {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const formIsValid = Object.values(data).every((value) => value !== "");
    setIsValid(formIsValid);
  }, [data]);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };
  const acctypes = [
    { label: ".." },
    { label: "Saving", value: "saving" },
    { label: "Current", value: "current" },
    { label: "Others", value: "others" },
  ];
  const doctypes = [
    { label: ".." },
    { label: "Citizenship", value: "citizenship" },
    { label: "License", value: "license" },
    { label: "Passport", value: "passport" },
  ];

  return (
    <>
      <div className="steps">
        <h1 className="heading-first text-center">Account Information</h1>
        <form className="forms">
          <DropDown
            htmlFor="accountType"
            label=" Choose Account Type:"
            name="accountType"
            id="accountType"
            options={acctypes}
            onChange={handleInputChange}
            value={data["accountType"]}
          />
          <DropDown
            htmlFor="documentType"
            label=" Choose Document Type:"
            name="documentType"
            id="documentType"
            options={doctypes}
            onChange={handleInputChange}
            value={data["documentType"]}
          />
          {/* <Input
            htmlFor="document"
            label="Copy of Document:"
            type="file"
            id="document"
          /> */}
          {/* <Input
            htmlFor="doa"
            label="Date of Application:"
            type="date"
            id="doa"
            onChange={handleInputChange}
            value={data["doa"]}
          /> */}
        </form>
      </div>
    </>
  );
}
