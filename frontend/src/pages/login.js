import styles from "@/styles/Login.module.scss";
import { login } from "@/utils/login";
import { useRef } from "react";

const Login = () => {
  const passRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      username: "admin",
      password: "abc123/-",
    }).then((res) => console.log(res));
  };

  const handleViewPassword = (e) => {
    if (passRef.current.type === "password") {
      passRef.current.type = "text";
    } else {
      passRef.current.type = "password";
    }
  };
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div></div>
        <div>
          <header className={styles.header}>
            <img src="" />
            <h2>Login</h2>
            <p>
              Login in the tickets system for create or manage the tickets
              report
            </p>
          </header>
          <form onSubmit={handleSubmit}>
            <div className={styles.input_group}>
              <input type="text" required />
              <label>email</label>
              <button type="button">@</button>
            </div>
            <div className={styles.input_group}>
              <input ref={passRef} type="password" required />
              <label>password</label>
              <button type="button" onClick={handleViewPassword}>
                @
              </button>{" "}
            </div>
            <button className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
