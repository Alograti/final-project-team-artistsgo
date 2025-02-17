import Google from "./img/google.png";
import Facebook from "./img/facebook.png";
import Github from "./img/github.png";
import "./Login.css";

const Login = () => {
  const google = () => {
    window.open("http://192.241.146.229:3001/auth/google", "_self");
  };

  const github = () => {
    window.open("http://192.241.146.229:3001/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://192.241.146.229:3001/auth/facebook", "_self");
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
