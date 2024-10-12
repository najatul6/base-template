import wave from "../../assets/wave.svg";
import avatar from "../../assets/avatar.svg";
import bg from "../../assets/userImg.svg";
const LogIn = () => {
  return (
    <div className=" min-h-screen ">
      <div className="">
        <div className="relative border">
          <img className="border" src={wave} />
          <div className="absolute w-1/3 top-[20%] right-0 bottom-0 border flex justify-center items-center">
          <img src={bg} className="w-full" />
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center min-h-screen">
        <div className=" flex justify-center items-center  gap-6 w-6/12 h-[640px] bg-white/5 rounded-xl backdrop-blur shadow-xl">
          <div className="login-content">
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
      </div> */}
    </div>
  );
};

export default LogIn;
