import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getUser } from '../services/Api';
//import style from './css/Login.module.css'


export default function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);




  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };


  const cargarUsuario = () => {
    localStorage.setItem('user', 'true')
    return <Navigate to='/Inicio' />
  }
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    getUser(uname.value, pass.value).then(function (data) {
      // Compare user info
      console.log(data)
      if (data.message) {
        if (data.error === 1) {
          setErrorMessages({ name: "uname", message: errors.uname });
          alert('datos incorrectos')
        } else {
          setErrorMessages({ name: "pass", message: errors.pass });
        }
      } else {
        setIsSubmitted(true);
      }

    })


  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div >
      <form onSubmit={handleSubmit}>
        <h1 >LOGIN</h1>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required className='form-control' />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required className='form-control' />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <button type='submit' className='btn btn-primary'>Enviar datos</button>

        </div>
      </form>
    </div>
  );

  return (
    <div >
      <div className="login-form">
        {isSubmitted ? cargarUsuario() : renderForm}
      </div>
    </div>
  );
}