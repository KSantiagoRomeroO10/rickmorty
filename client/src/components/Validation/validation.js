const validate = (form) => {

  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const error = {};

  if(!(form.email && form.email.length <= 35 && validEmail.test(form.email))) {
    error.email = "No es correcto el email, debe ser menor a 35 carácteres.";
  }

  if(!(/\d/.test(form.pass) && form.pass.length >= 6 && form.pass.length <= 10)){
    error.pass = "No es correcta la contraseña, debe estar entre 6 y 10 caracteres, y tener al menos 1 número";
  }

  return error;

}

export default validate;