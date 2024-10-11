const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white/10 rounded-xl shadow-lg relative overflow-hidden w-11/12 max-w-full min-h-[480px] mx-auto">
        {/* Sign UP  */}
        <div className="form-container signUp">
          <form action="">
            <h1>Create an account</h1>
            <input type="text" name="" id="" placeholder="UserName" />
            <input type="email" name="" id="" placeholder="Email" />
            <input type="password" name="" id="" placeholder="Password" />
            <button>sign up</button>
          </form>
        </div>

        {/* Sign IN  */}
        <div className="form-container signUp">
          <form action="">
            <h1>Log In</h1>
            <input type="text" name="" id="" placeholder="UserName" />
            <input type="password" name="" id="" placeholder="Password" />
            <a href="#">Forget Password</a>
            <button>sign In</button>
          </form>
        </div>
        {/* toggle container */}
        <div className="toggle-container">
          <div className="toggle">
            {/* toggle left  */}
            <div className="toggle-panel toggle-left">
              <h1>Hello! </h1>
              <p>
                Register with your personal Details to use all of site features
              </p>
              <button className="hidden" id="login">
                sign in
              </button>
            </div>
            {/* toggle Right  */}
            <div className="toggle-panel toggle-Right">
              <h1>Welcome Back</h1>
              <p>Enter your personal Details to use all of site features</p>
              <button className="hidden" id="register">
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
