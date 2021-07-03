import { useState, useRef, useContext } from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios'

import classes from './AuthForm.module.css';
import AuthContext from '../../store/auth-context';

const AuthForm = () => {
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const history = useHistory()
  const authCtx = useContext(AuthContext)

  const SIGN_UP_URL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
  const SIGN_IN_URL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
  const API_KEY = "AIzaSyC77zuPw5Jy2WqrcfXfoYVXexbr02j2go4"


  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = event => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const options = {headers: {"Content-Type":"application/json"}}
    
    let url;
    if(isLogin) url = SIGN_IN_URL + API_KEY
    else url = SIGN_UP_URL + API_KEY
    
    setIsLoading(true)
    axios.post(url,
      { 
        "email": enteredEmail,
        "password": enteredPassword,
        "returnSecureToken": true
      }, options
      ).then(res => {
        setIsLoading(false)
        alert(`Status: ${res.status} - ${!isLogin ? "User Created" : "Successful Login"}`)
        return res.data
      }).then(data => {
        // console.log(data.idToken)
        const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000))
        authCtx.login(data.idToken, expirationTime.toISOString())
        history.replace('/')
      }).catch(err => {
        setIsLoading(false)
        console.log(err)
        alert(err.response.data.error.message)
      })
  }


  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef}/>
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending Request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
