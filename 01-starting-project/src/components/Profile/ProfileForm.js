import { useContext, useRef } from 'react';
import classes from './ProfileForm.module.css';
import axios from 'axios';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
  const newPasswordInput = useRef();
  const authCtx = useContext(AuthContext)

  const URL = "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC77zuPw5Jy2WqrcfXfoYVXexbr02j2go4"

  const passwordChangeHandler = (event) => {
    event.preventDefault();
    const newPassword = newPasswordInput.current.value
    const options = {headers: {"Content-Type":"application/json"}}

    axios.post(URL, {
      idToken: authCtx.token,
      password: newPassword,
      returnSecureToken: true 
    }, options
      ).then(res => {
        alert(`Status: ${res.status}`)
        return res.data
      }).then(data => {
        console.log(data)
      }).catch(err => {
        console.log(err.response.status)
        alert(err.response)
      })
  }

  return (
    <form className={classes.form} onSubmit={passwordChangeHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordInput}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
