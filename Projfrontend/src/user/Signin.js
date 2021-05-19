import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import Base from "../core/Base";
import { signin, authenticate, isAuthenticated } from "../auth/helper";

const Signin = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false,
        loading: false,
        didRedirect: false,
    });
    const { name, email, password, error, success, loading, didRedirect } = values;

    const handleChange = (name) =>
      (event)  => {
        setValues({ ...values, error: false, [name]: event.target.value });
      };

    const onSumit = (event) => {
      event.preventDefault();
      setValues({...values, error: false, loading: true });

      signin({ email, password })
        .then((data) => {
          console.log("DATA", data);
          if (data.token) {
            //let sessionToken = data.token;
            authenticate(data, () => {
              console.log("TOKKEN ADDED");
              setValues({
                ...values,
                didRedirect: true,
              });
            });
          } else {
            setValues({
              ...values,
              loading: false,
            });
          }
        })
        .catch((e) => console.log(e));
    };

    const performRedirect = () => {
      if (isAuthenticated()) {
        return <Redirect to="/"/>
      }
    };

    const loadingMessage =() => {
      return(
        loading && (
          <div className="alert alert-info">
            <h2>loading...</h2>
          </div>
        ) 
      )
    }


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
    };
  
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
    };
  
    const signInForm = () => {
          return(
            <React.Fragment>
              <div class="content-top">
        <div class="container ">
          <div class="banner-top">
      <div class="container">
        <h3 >Login</h3>
        <h4><Link to="/">Home</Link><label>/</label>Login</h4>
        <div class="clearfix"> </div>
      </div>
    </div>
            <div class="login">
              <div class="main-agileits">
                <div class="form-w3agile">
                  <h3>Login</h3>    
                            <form>
                                <input 
                                    className="form-control"
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
                                    onClick={onSumit}
                                    className="btn btn-warning" 
                                     >
                                        Login
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
            <Base title="Welcome to signin in page" description="A shirt store">
        <p>Welcome to signin Page</p>
        </Base>
        {loadingMessage()}
        {signInForm()}
        <p className="text-center">
            {JSON.stringify(values)}
        </p>
        {performRedirect()}
        </div>

    )
};

export default Signin;