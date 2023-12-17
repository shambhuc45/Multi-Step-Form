import React from "react";

export default function GenderRadioGroup({
  onChange,
  errormsg,
  radiobutton,
  value,
}) {
  return (
    <div className="form-group row">
      <p className="form-label col-25">Gender:</p>
      <div className="radio-group flex">
        {radiobutton.map((radiobutton) => (
          <div key={radiobutton.value}>
            <input
              type="radio"
              id={radiobutton.value}
              name="gender"
              value={radiobutton.value}
              className="radio-button"
              onChange={onChange}
              checked={value}
            />
            <label
              htmlFor={radiobutton.value}
              className="form-label label-radio"
            >
              {radiobutton.label}
            </label>
            <br />
          </div>
        ))}
        <span className="error-message">{errormsg}</span>
        <br />
      </div>
    </div>
  );
}
