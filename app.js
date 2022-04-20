function validarForm() {

  const expRegNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const expRegCorreo = /^\w+@(\w+\.)+\w{2,4}$/

  const nombre = document.getElementById("name");
  const correo = document.getElementById("email");
  const asunto = document.getElementById("asunto");
  const comentarios = document.getElementById("comentarios");

  //campo nombre

  if(nombre.value.length<3){
    alert("El nombre debe tener mas de tres letras");
    nombre.focus();
    return false;
  }

  if (!nombre.value) {
    alert("el campo nombre es requerido");
    nombre.focus();
    return false;
  }
  if (!expRegNombre.exec(nombre.value)) {
    alert("El campo nombre admite letras y espacios.")
    nombre.focus();
    return false;
  }


  //campo correo
  if (!correo.value) {
    alert("El campo correo es requerido");
    correo.focus();
    return false;
  }
  if (!expRegCorreo.exec(correo.value)) {
    alert("El campo correo no tiene el formato correcto.")
    correo.focus();
    return false;
  }

  // campo asunto
  if (!asunto.value) {
    alert("El campo asunto es requerido");
    asunto.focus();
    return false;
  }
  //campo comentarios
  if (!comentarios.value) {
    alert("El campo comentarios es requerido");
    comentarios.focus();
    return false;
  }

  return true;

}
// asociacion del boton enviar con el formulario en html//
window.onload = function () {
  var formulario = document.getElementById("form");
  formulario.onsubmit = validarForm;
  
}