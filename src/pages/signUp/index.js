import React,{Component} from 'react';
import './signup.css'
import {Link} from 'react-router-dom'
import {GoogleLogin} from 'react-google-login';

class signUp extends Component{

	render(){

		const responseGoogle=(response)=>{
		   console.log(response)
	    }
		return(
			<>
			  <div className="login-popup" data-aos="fade-up">

      <div className="box" >

        <div className="image-area">
       <div style={{marginTop:"17px",marginRight:"341px"}}><Link to="/" style={{textDecoration:"none",color:"black"}}>Home Page</Link></div>
        <img src="images/download.jpg" style={{marginTop:"132px"}}/>
        </div>
      
          <div className="form">
          <h3 style={{fontSize:"41px"}}> Welcome To Groww</h3>
         <form style={{marginTop:"100px"}}>
         <div  className="form-group">
          <input type="text" placeholder="email" className="form-control"/>
        </div>
        <div  className="form-group">
          <input type="password" placeholder="password" className="form-control"/>
        </div>
         <button type="button" className="btn-sign">Log In</button>
         <div style={{marginTop:"15px",marginBottom:"15px"}}><span>----OR----</span></div>
        <GoogleLogin
        clientId="564721665312-44h9c6b03q2o6o65af6tcdmn140ljoqi.apps.googleusercontent.com"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        />
        
       
         </form>
          </div>

      </div>

    </div>
			</>
			)
	}
}

export default signUp;