import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import styled from "styled-components";

// Creating schema
const schema = Yup.object().shape({
  name: Yup.string().required("Full name is a required field"),

  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is required")
    .min(5, "Your password is too short.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  confirmpassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});

const SignUp = () => {
  const [Loading, setLoading] = useState(false);
  return (
    <FormContainer>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", name: "", password: "", role:"admin" }}
        onSubmit={(values) => {
          setLoading(true);
    // set configurations
    const configuration = {
      method: "post",
      url: "https://ohms.onrender.com/admin/register",
      data: values,
    };
    console.log(values)

    // make the API call
    axios(configuration)
      .then((result) => {
        setLoading(false);
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Registration Successful',
          showConfirmButton: false
        })
  // redirect user to the login page
  window.location.href = "/login";
      })
      .catch((error) => {
        error = new Error();
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Something went wrong.. please try again later!"
        })
      });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login">
            <div className="form">
              <form noValidate onSubmit={handleSubmit}>
                <span>Create Ohm</span>

                <p className="error">
                  {errors.name && touched.name && errors.name}
                </p>

                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Enter Admin name"
                  className="form-control inp_text"
                  id="name"
                />

                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>

                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Admin email address"
                  className="form-control inp_text"
                  id="email"
                />
{/* 
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>

                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Create password"
                  className="form-control"
                />

                <p className="error">
                  {errors.confirmpassword &&
                    touched.confirmpassword &&
                    errors.confirmpassword}
                </p>

                <input
                  type="password"
                  name="confirmpassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmpassword}
                  placeholder="Confirm password"
                  className="form-control"
                /> */}

                <button type="submit">{Loading ? "Loading..." : "Signup"}</button>
              </form>
              {/* <p className="account">
                Already have an account? <a href="/login">Log In</a>
              </p> */}
            </div>
          </div>
        )}
      </Formik>
    </FormContainer>
  );
};

const FormContainer = styled.main`
background-color: #FCF4EA;
height: 100vh;


.login {
  width: 420px;
  padding: 8% 0 0;
  margin: auto;
}


.form {
  position: relative;
  z-index: 1;
  background: #fff;
  border-radius: 10px;
  max-width: 400px;
  margin: 5% auto;
  padding: 45px;
  text-align: center;
 
  input {
    outline: 0;
    background: #DEDBD6;
    width: 100%;
    border: 0;
    border-radius: 5px;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    
  }
  
  button {
    text-transform: uppercase;
    outline: 0;
    background: #ED8850;
    width: 100%;
    border: 0;
    border-radius: 5px;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
    
    &:active {
      background: #b08968;
    }
  }
  
  span {
    font-size: 40px;
    color: #277da1;
    margin-bottom: 25px;
    display: block;
  }
  
  p.error {
    margin-top: 10px;
    margin-bottom: 5px;
    text-align: left;
    font-size: 14px;
    color: red;
  }

  p.account{
    margin-top: 15px;
    font-size: 14px;

    a{
      font-weight: 600;
      color:#277da1;
    }
  }
} 

`;

export default SignUp;
