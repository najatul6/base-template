import wave from "../../assets/wave.svg"
import avatar from "../../assets/avatar.svg"
import bg from "../../assets/"
const LogIn = () => {
  

  return (
    <>
    <img className="wave" src={wave}/>
	<div className="container">
		<div className="img">
			<img src="img/bg.svg"/>
		</div>
		<div className="login-content">
			<form>
				<img src={avatar}/>
				<h2 className="title">Welcome</h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		<h5>Username</h5>
           		   		<input type="text" className="input"/>
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	<h5>Password</h5>
           		    	<input type="password" className="input"/>
            	   </div>
            	</div>
            	<a href="#">Forgot Password?</a>
            	<input type="submit" className="btn" value="Login"/>
            </form>
        </div>
    </div>
    </>
  );
};

export default LogIn;
