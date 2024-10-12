import wave from "../../assets/wave.svg";
import avatar from "../../assets/avatar.svg";
import bg from "../../assets/userImg.svg";
const LogIn = () => {
  return (
    <div className="overflow-hidden min-h-screen relative ">
      <img className="fixed bottom-0 left-0 -z-10" src={wave} />
      <div className="flex justify-center items-center min-h-screen">
        <div className="border flex justify-center items-center bg-white/5 rounded-xl backdrop-blur shadow-xl">
        <div className="">
          <img src={bg} />
        </div>
        <div className="login-content border">
          <form>
            <img src={avatar} className="rounded-full w-[100px]" />
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <h5>Username</h5>
                <input type="text" className="input" />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <h5>Password</h5>
                <input type="password" className="input" />
              </div>
            </div>
            <a href="#">Forgot Password?</a>
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
