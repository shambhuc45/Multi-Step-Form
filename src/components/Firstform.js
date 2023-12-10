import React,{ useState, useEffect } from "react";

export default function Firstform({ data, setData }) {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const formIsValid = Object.values(data).every((value) => value !== "");
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
      <div className="first-step">
        <h1 className="heading-first text-center">Personal Information</h1>
        <form className="first-form">
          <div className="form-group row">
            <label htmlFor="name" className="form-label col-25">
              Full Name:{" "}
            </label>
            <input
              type="text"
              className="form-input col-75"
              id="name"
              placeholder="Full Name"
              onChange={handleInputChange}
              value={data['name']}
              required
              
            />
          </div>
          <div className="form-group row">
            <label htmlFor="email" className="form-label col-25">
              Email Address:{" "}
            </label>
            <input
              type="email"
              className="form-input col-75"
              id="email"
              placeholder="Enter Email"
              onChange={handleInputChange}
              value={data['email']}
              required
            />
          </div>
          <div className="form-group row">
            <label htmlFor="address" className="form-label col-25">
             Current Address:{" "}
            </label>
            <input
              type="text"
              className="form-input col-75"
              id="address"
              placeholder="Enter Current Address"
              onChange={handleInputChange}
              value={data['address']}
              required
            />
          </div>
          <div className="form-group row">
            <label htmlFor="phone" className="form-label col-25">
              Phone:
            </label>
            <input
              type="tel"
              className="form-input col-75"
              pattern="^9[7-8]\d{8}$"              
              id="phone"
              placeholder="Enter Phone"
              onChange={handleInputChange}
              value={data['phone']}
              required
            />
          </div>
          <div className="form-group row">
            <p className="form-label col-25">Gender:</p>
            <div className="radio-group flex">
              <div>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  className="radio-button"
                  onChange={handleRadioChange}
                  checked={data['gender'] === 'male'}
                />
                <label htmlFor="male" className=" form-label label-radio">
                  Male
                </label>
                <br />
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  className="radio-button"
                  onChange={handleRadioChange}
                  checked={data['gender'] === 'female'}
                />
                <label htmlFor="female" className="form-label label-radio">
                  Female
                </label>
                <br />
              </div>
              <div>
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                  className="radio-button"
                  onChange={handleRadioChange}
                  checked={data['gender'] === 'other'}
                />
                <label htmlFor="other" className="form-label label-radio">
                  Other
                </label>
                <br />{" "}
              </div>
            </div>
            </div>
          <div className="form-group row">
            <label htmlFor="dob" className="form-label col-25">
              Date of Birth:{" "}
            </label>
            <input
              type="date"
              className="form-input col-75"
              id="dob"
              placeholder="Enter Date of Birth"
              onChange={handleInputChange}
              value={data['dob']}
              required
            />
          </div>
          
            {/* <div className="form-group first row flex">
            <button type="Button" className="btn-next" >
              Next
            </button>
          </div> */}
        </form>
      </div>
    </>
  );
}
