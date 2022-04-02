import React, { useState } from "react";
import Wrapper from "./Wrapper";
import Label from "./Label";
import Input from "./Input";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    city: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const SubmitData = (event) => {
    event.preventDefault();

    if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(
        formData.password
      )
    ) {
      return alert(
        "Password must be 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
      );
    } else {
      console.log(formData);

      fetch("http://localhost:5000/datasubmit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formData: formData,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            alert(data.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="signup-form">
        <form onSubmit={SubmitData}>
          <Wrapper>
            <Label
              htmlFor="inputFirstName3"
              className="col-sm-2 col-form-label"
              labelName="First Name"
            />
            <div className="col-sm-10">
              <Input
                type="text"
                className="form-control"
                id="firstname"
                name="firstName"
                onChange={handleChange}
              />
            </div>
          </Wrapper>
          <Wrapper>
            <Label
              htmlFor="inputLastName3"
              className="col-sm-2 col-form-label"
              labelName="Last Name"
            />
            <div className="col-sm-10">
              <Input
                type="text"
                className="form-control"
                id="lastname"
                name="lastName"
                onChange={handleChange}
              />
            </div>
          </Wrapper>
          <Wrapper>
            <Label
              htmlFor="inputRadio3"
              className="col-sm-2 col-form-label"
              labelName="Gender"
            />
            <div className="col-sm-10 my-auto">
              <div className="form-check form-check-inline">
                <Input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="inlineRadio1"
                  value="Male"
                  onChange={handleChange}
                />
                <Label
                  className="form-check-label"
                  htmlFor="inlineRadio1"
                  labelName="Male"
                />
              </div>
              <div className="form-check form-check-inline">
                <Input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="inlineRadio2"
                  value="Female"
                  onChange={handleChange}
                />
                <Label
                  className="form-check-label"
                  htmlFor="inlineRadio2"
                  labelName="Female"
                />
              </div>
              <div className="form-check form-check-inline">
                <Input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="inlineRadio3"
                  value="Other"
                  onChange={handleChange}
                />
                <Label
                  className="form-check-label"
                  htmlFor="inlineRadio3"
                  labelName="Other"
                />
              </div>
            </div>
          </Wrapper>
          {/* <Wrapper>
              <Label
                htmlFor="inputCheck3"
                className="col-sm-2 col-form-label"
                labelName="Hobbies"
              />
              <div className="col-sm-10 my-auto">
                <div className="form-check form-check-inline">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    name="hobbies"
                    id="inlineCheckbox1"
                    value="Singing"
                    onChange={handleChange}
                  />
                  <Label
                    className="form-check-label"
                    htmlFor="inlineCheckbox1"
                    labelName="Singing"
                  />
                </div>
                <div className="form-check form-check-inline">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    name="hobbies"
                    id="inlineCheckbox2"
                    value="Dancing"
                    onChange={handleChange}
                  />
                  <Label
                    className="form-check-label"
                    htmlFor="inlineCheckbox2"
                    labelName="Dancing"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-check form-check-inline">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    name="hobbies"
                    id="inlineCheckbox3"
                    value="Sports"
                    onChange={handleChange}
                  />
                  <Label
                    className="form-check-label"
                    htmlFor="inlineCheckbox3"
                    labelName="Sports"
                  />
                </div>
              </div>
            </Wrapper> */}
            <Wrapper>
              <Label
                htmlFor="inputSelect3"
                className="col-sm-2 col-form-label"
                labelName="City"
              />
              <div className="col-sm-10">
                <select
                  className="form-select"
                  id="form_options"
                  aria-label="Default select example"
                  name='city'
                  onChange={handleChange}
                  required
                >
                  <option value="Select Your City">Select Your City</option>
                  <option value="Rajkot">Rajkot</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Surat">Surat</option>
                  <option value="Vadodara">Vadodara</option>
                  <option value="Gandhinagar">Gandhinagar</option>
                </select>
              </div>
            </Wrapper>
          <Wrapper>
            <Label
              htmlFor="inputEmail3"
              className="col-sm-2 col-form-label"
              labelName="Email"
            />
            <div className="col-sm-10">
              <Input
                type="email"
                className="form-control"
                id="user_email"
                placeholder="name@example.com"
                name="email"
                onChange={handleChange}
              />
            </div>
          </Wrapper>
          <Wrapper>
            <Label
              htmlFor="inputPassword3"
              className="col-sm-2 col-form-label"
              labelName="Password"
            />
            <div className="col-sm-10">
              <Input
                type="password"
                className="form-control"
                id="user_password"
                name="password"
                onChange={handleChange}
              />
            </div>
          </Wrapper>
          <Wrapper>
            <Label
              htmlFor="inputPassword3"
              className="col-sm-2 col-form-label"
              labelName="Confirm Password"
            />
            <div className="col-sm-10 my-auto">
              <Input
                type="password"
                className="form-control"
                id="confirm_password"
                name="confirm_password"
                onChange={handleChange}
              />
            </div>
          </Wrapper>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
