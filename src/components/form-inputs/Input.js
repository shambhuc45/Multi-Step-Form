import React, { useState } from "react";

export default function Input({
  htmlFor,
  label,
  type,
  id,
  placeholder,
  onChange,
  value,
  errormsg,
}) {
  const [touched, setTouched] = useState(false); // State to track if the input has been touched

  const handleInputChange = (e) => {
    setTouched(true); // Set touched to true when input changes
    onChange(e);
  };

  return (
    <>
      <div className="form-group row">
        <label htmlFor={htmlFor} className="form-label col-25">
          {label}
        </label>
        <input
          type={type}
          className="form-input col-75"
          id={id}
          placeholder={placeholder}
          onChange={handleInputChange}
          value={value}
          required
        />
        {touched && errormsg && (
          <span className="error-message">{errormsg}</span>
        )}{" "}
      </div>
    </>
  );
}
