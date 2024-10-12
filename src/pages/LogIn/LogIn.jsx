import wave from "../../assets/wave.svg";
import avatar from "../../assets/avatar.svg";
import bg from "../../assets/userImg.svg";
const LogIn = () => {
  return (
    <>
      <img className="fixed bottom-0 left-0 h-full z-[1]" src={wave} />
      <div className="w-screen h-screen grid grid-cols-2 gap-[7rem] px-[2rem]">
        <div className="img">
          <img src={bg} />
        </div>
        <div className="login-content">
          <form>
            <img src={avatar} className="rounded-full" />
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
    </>
  );
};

export default LogIn;
