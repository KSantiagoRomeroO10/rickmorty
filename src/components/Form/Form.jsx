import './style.css';
import validate from '../Validation/validation';

import { useState } from "react";

const Form = ({ login }) => {

  const [error, setError] = useState({
    email: '',
    pass: ''
  });

  const [form, setForm] = useState({
    email: '',
    pass: ''
  });

  const handleForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setError(validate({
      ...form,
      [event.target.name]: event.target.value,
    }));
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    login(form);
  }

  return (
    <form onSubmit={handleSubmit}>

      <h1>Form</h1>

      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id='email' placeholder="Ingrese su email:" value={form.email} onChange={handleForm}/>
      <br/>
      {error.email && <p>{error.email}</p>}
      <label htmlFor="pass">Contraseña:</label>
      <input type="pass" name="pass" id="pass" placeholder="Ingrese su contraseña:" value={form.pass} onChange={handleForm}/>
      {error.pass && <p>{error.pass}</p>}
      <br/>
      <br/>
      <input type="submit" className='enviar' disabled={!form.email || !form.pass || error.email || error.pass} value='Enviar'/>

    </form>
  )
}

export default Form;
