import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import Swal from 'sweetalert2'
import styled from "styled-components";


const cookies = new Cookies();

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
});

const Login = () => {
  const [Loading, setLoading] = useState(false);

  return (
    <FormContainer>

      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          setLoading(true);
            // set configurations
        const configuration = {
          method: "post",
          url: "https://ohms.onrender.com/login",
          data: values,
        };

            // make the API call
        axios(configuration)
        .then((result) => {
          setLoading(false);
          // set the cookie
          console.log(result)
          cookies.set("TOKEN", result.data.token, {
            path: "/",
          });
          cookies.set("USER", result.data.companyName, {
            path: "/",
          });
          
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Login Successful',
            showConfirmButton: false
          })

          // redirect user to the dashboard page
          window.location.href = "/company";
        })
        .catch((error) => {
          error = new Error();
          setLoading(false);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'User does not exist!'
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
                <span>Login</span>
        
               <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>

                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="email"
                />
             
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
                
                <button type="submit">{Loading ? "Loading..." : "Login"}</button>
              </form>
              <p className="account">Dont have an account? <a href="/create-ohm">Sign Up</a></p>
            </div>
          </div>
        )}
      </Formik>
    </FormContainer>
  );
}

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
  margin: 15% auto;
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
      color: #277da1;
    }
  }
} 



`;

export default Login;