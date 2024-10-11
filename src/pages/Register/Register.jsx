const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white/10 rounded-xl shadow-lg relative overflow-hidden w-11/12 max-w-full min-h-[480px] mx-auto">
        {/* Sign UP  */}
        <div className="form-container signUp">
          <form className="flex-center-item-col">
            <h1>Create an account</h1>
            <input className="input my-2" type="text" name="" id="" placeholder="UserName" />
            <input className="input my-2" type="email" name="" id="" placeholder="Email" />
            <input className="input my-2" type="password" name="" id="" placeholder="Password" />
            <button className="btn-ctm">sign up</button>
          </form>
        </div>

        {/* Sign IN  */}
        <div className="form-container signUp">
          <form className="flex-center-item-col">
            <h1>Log In</h1>
            <input className="input my-2" type="text" name="" id="" placeholder="UserName" />
            <input className="input my-2" type="password" name="" id="" placeholder="Password" />
            <a href="#">Forget Password</a>
            <button className="btn-ctm">sign In</button>
          </form>
        </div>
        {/* toggle container */}
        <div className="toggle-container">
          <div className="toggle">
            {/* toggle left  */}
            <div className="toggle-panel toggle-left">
              <h1>Hello! </h1>
              <p className="mt-5">
                Register with your personal Details to use all of site features
              </p>
              <button className="hidd bg-transparent" id="login">
                sign in
              </button>
            </div>
            {/* toggle Right  */}
            <div className="toggle-panel toggle-Right">
              <h1>Welcome Back</h1>
              <p className="mt-5">Enter your personal Details to use all of site features</p>
              <button className="hidd bg-transparent" id="register">
                sign up 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
