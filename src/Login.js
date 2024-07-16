import React, { useState } from "react";
import './index.css';
import './animations.css';
import './Reservations.css';
import './Login.css';

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const PasswordErrorMessage = () => {
    return (
    <div className="fielderorr">
      <p className="error">Please enter a valid password, it can't contain your username, first name, last name, email address or the word 'password'</p>
    </div>
    );
  };

  const EmailErrorMessage = () => {
    return (
        <div className="fielderorr">
            <p className="error">Please enter your email address</p>
        </div>
    )
  }
  const EmailInstructionMessage = () => {
    return (
        <div className="fielderorr fieldinstruct">
            <p className="error">Your email address must be in this format: youremail@address.com (or .co.uk, .net, .org, etc.)</p>
        </div>
    )
  }

function Login() {
    const [email , setEmail] = useState({
        value2: "",
        istouched2: false,
        isclicked: false,
    });
    const [password , setPassword] = useState({
        value: "",
        isTouched: false,
    });

    function handleSubmit (e) {
        e.preventDefault();
        setEmail({
            value2: "",
            istouched2: false,
        });
        setPassword({
            value: "",
            isTouched: false,
        });
    };

    function formValid() {
        return (
            validateEmail(email.value2) &&
            password.value.length >= 8
        )
    };



    return (
        <>
        <div className="layout-form">
            <form onSubmit={handleSubmit} className="form-1" method="POST">
            <p className="form-title login_title">Log in to your account</p>
            <div className="section-wrap">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" name="email" placeholder="Email address" minLength="3" maxLength="100" autoComplete="off" autoCapitalize="off" value={email.value2}
                 onChange={e => { setEmail({...email, value2: e.target.value}); }} className={email.value2.length < 3  && email.istouched2 ? "erorr-color" : "normal-color" }
                 onBlur={() => { setEmail({...email, istouched2: true }); }}
                 onClick={() => { setEmail({...email, isclicked: true }); }} aria-required="true" aria-invalid="true" required>
                </input>
                {email.value2.length < 3  && email.istouched2 ? (
                    <EmailErrorMessage></EmailErrorMessage>
                ) : null }
                {email.isclicked && email.istouched2 === false ? (
                   <EmailInstructionMessage></EmailInstructionMessage>
                ) : null }
            </div>

            <div className="section-wrap">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="Password" minLength="8" maxLength="32" autoCorrect="off" autoComplete="off" autoCapitalize="off" value={password.value}
                onChange={e => { setPassword({ ...password, value: e.target.value }); }}
                onBlur={() => { setPassword({ ...password, isTouched: true }); }} className={password.value.length < 8 && password.isTouched ? "erorr-color" : "normal-color" } aria-required="true" aria-invalid="true" aria-describedby="passwordHint" aria-autocomplete="list" required>
                </input>
                {password.value.length < 8 && password.isTouched ? (
                    <PasswordErrorMessage></PasswordErrorMessage>
                ) : null }
            </div>
            <div className="section-wrap">
                <input type="submit" value="Login" className="button-1" disabled={!formValid()}/>
            </div>
            </form>
        </div>
        </>
    )
}
export default Login;