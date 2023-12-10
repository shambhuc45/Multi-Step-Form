import React ,{useState,useEffect} from 'react'

export default function ThirdStep({ data, setData }) {
    const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const formIsValid = Object.values(data).every((value) => value !== "");
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
      <div className="first-step">
        <h1 className="heading-first text-center">Nominee Details</h1>
        <form className="first-form">
          <div className="form-group row">
            <label htmlFor="nomName" className="form-label col-25">
              Nominee's Full Name:{" "}
            </label>
            <input
              type="text"
              className="form-input col-75"
              id="nomName"
              placeholder="Enter Nominee's Full Name"
              onChange={handleInputChange}
              value={data["nomName"]}
              required
            />
          </div>
          <div className="form-group row">
            <label htmlFor="nomAge" className="form-label col-25">
              Nominee's Age:{" "}
            </label>
            <input
              type="number"
              className="form-input col-75"
              id="nomAge"
              placeholder="Enter Nominee's Age"
              onChange={handleInputChange}
              value={data["nomAge"]}
              required
            />
          </div>
          <div className="form-group row">
            <label htmlFor="relation" className="form-label col-25">
              Relation:{" "}
            </label>
            <input
              type="text"
              className="form-input col-75"
              id="relation"
              placeholder="Enter your Relation"
              onChange={handleInputChange}
              value={data["relation"]}
              required
            />
          </div>
          <div className="form-group row">
            <label htmlFor="nomPhone" className="form-label col-25">
              Nominee's Phone:
            </label>
            <input
              type="tel"
              className="form-input col-75"
              pattern="^9[7-8]\d{8}$"
              id="nomPhone"
              placeholder="Enter Phone"
              onChange={handleInputChange}
              value={data["nomPhone"]}
              required
            />
          </div>
          <div className="form-group row">
            <label htmlFor="nomAdd" className="form-label col-25">
              Nominee's Address:{" "}
            </label>
            <input
              type="text"
              className="form-input col-75"
              id="nomAdd"
              placeholder="Enter Nominee's Address"
              onChange={handleInputChange}
              value={data["nomAdd"]}
              required
            />
          </div>
          <div className="form-group row">
            <label htmlFor="nomCitizenship" className="form-label col-25">
              Nominees's Citizenship No.:{" "}
            </label>
            <input
              type="number"
              className="form-input col-75"
              id="nomCitizenship"
              pattern="^\d{11,}$"
              placeholder="Enter Nominee's Citizenship No."
              onChange={handleInputChange}
              value={data["nomCitizenship"]}
              required
            />
          </div>
          <div className="form-group row group-check">
            <div>
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
            <div>
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
  )
}
