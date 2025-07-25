import { Helmet } from 'react-helmet-async';

import styles from './Login.module.css';

const Login = () => {
  return (
    <>
      <Helmet>
          <title>Visionary | Login</title>
          <meta name="description" content="See clearly, live boldly." />
      </Helmet>

      <div className={styles.loginContainer}>
        {/* Title */}
        <h1 className={styles.loginTitle}>Login</h1>

        {/* Login form */}
        <form className={styles.loginForm}>
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Password" required />

          <div className={styles.loginActions}>
            {/* Login btn */}
            <button type="submit">Login</button>
            
            {/* Login links */}
            <div className={styles.loginLinks}>
              <p className={styles.forgotPassword}>
                Forgot your password?
              </p>
              <p className={styles.registerLink}>
                New client? Register here
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

