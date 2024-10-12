import wave from "../../assets/wave.svg";
import avatar from "../../assets/avatar.svg";
import bg from "../../assets/userImg.svg";
const LogIn = () => {
  return (
    <div className=" min-h-screen overflow-hidden relative">
      <img className="fixed" src={wave} />

      {/* form  */}
      <div className="flex justify-center items-center min-h-screen">
        {/* <img src={bg} className="w-full" /> */}
        <div className=" flex justify-center items-center  gap-6 w-6/12 h-[640px] bg-white/10 rounded-xl backdrop-blur-lg shadow-xl">
          <div className="w-full">
            <form className="flex flex-col justify-center items-center gap-6 border">
              <img src={avatar} className="rounded-full w-[100px]" />
              <h2 className="lg:text-3xl text-xl uppercase font-bold tex">Welcome</h2>
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
