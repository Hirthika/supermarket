import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Base  = () => { 
  return (
    <div>
    <Menu/>
      <div className="header">
      <div className="container">
      <div className="logo">
        <h1>
          <Link to="/">
            <b>
              T<br />
              <br />H<br />
              <br />E
            </b>
            &nbsp;Wondem Store<span>The Best Supermarket</span>
          </Link>
        </h1>
      </div>       
<div className="header-ri">
<ul className="social-top">
  <li>
    <a href="https://www.facebook.com/samuel.wondem" className="icon facebook">
      <i className="fa fa-facebook" aria-hidden="true" />
      <span />
    </a>
  </li>
  <li>
    <a href="https://www.linkedin.com/in/samuel-wondem" className="icon twitter">
      <i className="fa fa-linkedin" aria-hidden="true" />
      <span />
    </a>
  </li>
  <li>
    <a href="https://github.com/wondem12" className="icon pinterest">
      <i className="fa fa-github" aria-hidden="true" />
      <span />
    </a>
  </li>
  <li>
    <a href="https://www.instagram.com/samuel_wondem/" className="icon dribbble">
      <i className="fa fa-instagram" aria-hidden="true" />
      <span />
    </a>
  </li>
</ul>
</div>
</div>
</div>
</div>
    );
};

export default Base;