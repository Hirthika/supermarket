import React, {useState} from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) =>
    (event)  => {
      setValues({ ...values, error: false, [name]: event.target.value });
    };
      
    const onSubmit = (event) => {
      event.preventDefault();
      setValues({  ...values, error: false });
      signup({ name, email, password })
        .then((data) => {
          console.log("DATA", data);
          if (data.email === email) {
            setValues({
              ...values,
              name: "",
              email: "",
              password: "",
              error: "",
              success: true,
            });
          } else {
            setValues({
              ...values,
              error: true,
              success: false,
            });
          }
        })
        .catch((e) => console.log(e));
    };

    const successMessage = () => {
      return (
        <div className="row">
          <div className="col-md-6 offset-sm-3 text-left">
            <div className="alert alert-success" style={{ display: success ? "" : "none" }}>
              New Account Created Successfully.Please  <Link to="/signin">Login Now</Link>
            </div>
          </div>
        </div>
      )
    }

    const errorMessage = () => {
      return (
        <div className="row">
          <div className="col-md-6 offset-sm-3 text-left">
            <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
              Check email and Password
            </div>
          </div>
        </div>
      )
    }

      const signUpForm = () => {
        return(
          <React.Fragment>
            <div class="content-top">
        <div class="container ">
          <div class="banner-top">
<div class="container">
<h3 >Register</h3>
<h4><Link to="/">Home</Link><label>/</label>Register</h4>
<div class="clearfix"> </div>
</div>
</div>
<div class="login">
    <div class="main-agileits">
            <div class="form-w3agile">
                <h3>Register</h3>
                <form>
                    <input 
                        className="form-control"
                        type='text'
                        placeholder='Name*'
                        value={name}
                        onChange={handleChange("name")}
                        required 
                    /><br/>
                    <input 
                        className="form-control" 
                        className='form-control'
                        type='text'
                        placeholder='Email*'
                        value={email}
                        onChange={handleChange("email")}
                        required 
                    /><br/>
                    <input 
                        className="form-control"
                        className='form-control'
                        type='password'
                        placeholder='Password*'
                        value={password}
                        onChange={handleChange("password")}
                        required 
                    /><br/>
                    <button 
                        className="btn btn-warning" 
                        onClick={onSubmit} >
                            Register
                    </button>
                    
                </form>
            </div>
            </div>
        </div>
        </div>
        </div>
    
    </React.Fragment>
          );
      };

  return (
    <div>
    <Base title="Sign Up Page" description="A signup for T-shirt User">
        
     <p>Test of signup Page</p>
     </Base>
     {signUpForm()}
     {successMessage()}
     {errorMessage()}
     <p className="text-white text-center">
       {JSON.stringify(values)}
     </p>
     </div>
  );
};

export default Signup;