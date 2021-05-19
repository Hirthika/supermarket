import React from "react";
import { Link } from "react-router-dom";


const Footer =()=> {
    return(
        

<div class="footer">
<div class="container">
<div class="footer-bottom">
<h2 ><Link to="/"><b>T<br/><br/>H<br/><br/>E</b>&nbsp;Wondem Store<span>The Best Supermarket</span></Link></h2>
		<br/>
		<br/>
				<ul class="social-fo">
					<li><a href="https://www.facebook.com/samuel.wondem" class=" face"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
					<li><a href="https://www.linkedin.com/in/samuel-wondem" class=" twi"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
					<li><a href="https://github.com/wondem12" class=" pin"><i class="fa fa-github" aria-hidden="true"></i></a></li>
					<li><a href="https://www.instagram.com/samuel_wondem/" class=" dri"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
				</ul>
			</div>
            <div class="copy-right">
			<p> &copy; 2019 Wondem store. All Rights Reserved | Design by  <a href="https://www.linkedin.com/in/samuel-wondem"> Samuel Wondem</a></p>
		</div>
	</div>
</div>
    )
};

export default Footer;