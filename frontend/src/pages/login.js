import Styles from "@/styles/Login.module.css";
import { login } from "@/utils/login";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      username: "admin",
      password: "abc123/-",
    }).then((res) => console.log(res));
  };
  return (
    <>
      <div className={Styles.container}>
        <form onSubmit={handleSubmit}>
          <div>
            <label>email</label>
            <input type="text" />
          </div>
          <div>
            <label>password</label>
            <input type="password" />
          </div>
          <button>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
