
const Register = () => {
 

  return (
    <div>

    {/* Sign UP  */}
    <div className="form-container signUp">
      <form action="">
        <h1>Create an account</h1>
        <input type="text" name="" id="" placeholder="UserName" />
        <input type="email" name="" id=""  placeholder="Email"/>
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
    </div>
  );
};

export default Register;
