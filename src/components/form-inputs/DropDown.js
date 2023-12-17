import React from "react";

export default function DropDown({
  htmlFor,
  label,
  name,
  id,
  options,
  onChange,
  value,
}) {
  return (
    <div>
      <div className="form-group row">
        <label htmlFor={htmlFor} className="form-label col-25">
          {label}
        </label>

        <select
          name={name}
          id={id}
          className="form-dropdown col-75"
          onChange={onChange}
          value={value}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
