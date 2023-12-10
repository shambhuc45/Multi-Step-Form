import React,{ useState, useEffect } from "react";

export default function Firstform({ data, setData }) {
  const [isValid, setIsValid] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    gender:'',
    dob:''
  });

  useEffect(() => {
    const isNameValid = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(data.name); 
    const isEmailValid = /\S+@\S+\.\S+/.test(data.email); 
    const isAddressValid = data.address.trim() !== ""; 
    const isPhoneValid = /^(\+977)?(97|98)\d{8}$/.test(data.phone); 
    const isGenderValid = ['male', 'female', 'other'].includes(data.gender);
    const isDOBValid = new Date(data.dob) <= new Date();


    setFieldErrors({
      name: isNameValid ? '' : 'Please enter a valid name',
      email: isEmailValid ? '' : 'Please enter a valid email address',
      address: isAddressValid ? '' : 'Please enter your address',
      phone: isPhoneValid ? '' : 'Please enter a valid phone number',
      gender: isGenderValid?'': 'Please select a Gender',
      dob: isDOBValid ? '' : 'Please enter a valid date of birth',
    });
    
    const formIsValid =
      isNameValid &&
      isEmailValid &&
      isAddressValid &&
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
            <span className="error-message">{fieldErrors.name}</span>
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
            <span className="error-message">{fieldErrors.email}</span>
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
            <span className="error-message">{fieldErrors.address}</span>
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
            <span className="error-message">{fieldErrors.phone}</span>
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
            <span className="error-message">{fieldErrors.gender}</span>
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
            <span className="error-message">{fieldErrors.dob}</span>
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
