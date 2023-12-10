import React, { useState, useEffect } from "react";

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

  return (
    <>
      <div className="first-step">
        <h1 className="heading-first text-center">Account Information</h1>
        <form className="first-form">
          <div className="form-group row">
            <label htmlFor="accountType" className="form-label col-25">
              Choose Account Type:
            </label>

            <select
              name="accountType"
              id="accountType"
              className="form-dropdown col-75"
              onChange={handleInputChange}
              value={data["accountType"]}
            >
              <option >..</option>
              <option value="saving">Saving</option>
              <option value="current">Current</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="form-group row">
            <label htmlFor="documentType" className="form-label col-25">
              Choose Document Type:
            </label>

            <select
              name="documentType"
              id="documentType"
              className="form-dropdown col-75"
              onChange={handleInputChange}
              value={data["documentType"]}
            >
              <option>..</option>
              <option value="citizenship">Citizenship</option>
              <option value="license">License</option>
              <option value="passport">Passport</option>
            </select>
          </div>
          {/* <div className="form-group row">
            <label for="doc-file" className="form-label col-25">
              Copy of Document:
            </label>
            <input
              type="file"
              className="form-dropdown form-file col-75"
              id="docFile"
              placeholder="Choose File"
              required></input>
          </div> */}
          <div className="form-group row">
            <label htmlFor="doa" className="form-label col-25">
              Date of Application:
            </label>
            <input
              type="date"
              className="form-input col-75"
              id="doa"
              placeholder="Enter Date of Application"
              onChange={handleInputChange}
              value={data["doa"]}
              required
            />
          </div>
          {/* <div className="form-group btn-group row flex">
          <button type="Button" className="btn-next "  >
              Previous
            </button>
            <button type="Button" className="btn-next" >
              Next
            </button>
           
          </div> */}
        </form>
      </div>
    </>
  );
}
