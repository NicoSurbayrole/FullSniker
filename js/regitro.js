// let users = [];
// const inputName = document.getElementById("Nombre");
// const inputEmail = document.getElementById("email");
// const inputPassword = document.getElementById("password");
// const registrar = document.getElementById("btnContacto");

// registrar.onclick = () => {
//     const found = users.find((user) =>
//     user.email === inputEmail.value || user.name === inputName.value ? true : false
//   );
 
//   if (inputName && inputEmail && inputPassword && !found) {
//     users.push({
//       name: inputName.value,
//       email: inputEmail.value,
//       password: inputPassword.value,
//     });
//     Swal.fire({
//       position: "center",
//       icon: "success",
//       title: "el usuario se creo correctamente,sera redirigido al login",
//       showConfirmButton: false,
//       timer: 1800,
//     });
//     inputName.value = "";
//     inputEmail.value = "";
//     inputPassword.value = "";
//   } else {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "hubo un error, intente nuevamente!",
//       confirmButtonColor: "peru",
//     });
//     inputName.value = "";
//     inputEmail.value = "";
//     inputPassword.value = "";
//   }
// };

// const logIn = () => {
//   let email = prompt("ingresa tu email");
//   let password = prompt("ingresa tu contraseña");
//   for (user in users) {
//     if (email === users[user].email && password === users[user].password) {
//       userName.innerText = users[user].name.toUpperCase();
//       Swal.fire({
//         position: "center",
//         icon: "success",
//         title:
//           "se inicio sesion correctamente para cerrar sesion haga click en el icono del usuario",
//         showConfirmButton: false,
//         timer: 2300,
//       });
//       validarUser = false;
//       break;
//     }
//   }
//   if (validarUser) {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "El email o la contraseña son incorrectos, ingreselos nuevamente!",
//       confirmButtonColor: "peru",
//     });
//     while (validarUser) {
//       logIn();
//     }
//   }
// };

// const iniciarSesion = document.getElementById("btn-Log");
// const registro = document.getElementById("registro");
// let userName = document.getElementById("p-nav");
// let validarUser = true;

// iniciarSesion.onclick = () => {
//   if (users.length != 0 && validarUser) logIn();
//   else if (!validarUser) logOut();
//   else {
//     alert("el usuario no esta registrado, seras redirigido al registro");
//     registrar();
//   }
// };

// registro.onclick = () => {
//   let name = prompt("ingreasa tu nombre de usuario");
//   let email = prompt("ingresa tu email");
//   let password = prompt("ingresa tu contraseña");
// const found = users.find((user) =>
//   user.email === email && user.name === name ? true : false
// );

// if (found || !name || !password || !email)
// Swal.fire({
//   icon: "error",
//   title: "Oops...",
//   text: "los datatos ya fueron registrados, intente nuevamente!",
//   confirmButtonColor: "peru",
// });
// else {
// Swal.fire({
//   position: 'center',
//   icon: 'success',
//   title: 'el usuario se creo correctamente',
//   showConfirmButton: false,
//   timer: 1800
// })
//   users.push({ name: name, email: email, password: password });
// }

// const logOut = () => {
// Swal.fire({
//   position: 'center',
//   icon: 'success',
//   title: 'la sesion se cerro con exito!',
//   showConfirmButton: false,
//   timer: 1800
// })
// userName.innerText = "Iniciar Sesion";
// validarUser = true;
// };

//------------------------------------------------------------------------

//el verProductos despues lo voy a usar para modificarlo y que sea ver precio del producto y cuando aprete se cambie el boton x el precio.

// let verProducto = document.getElementById("verProducto");

//lo guardo como guia por las dudas

// boton.addEventListener("click", () => {
//   if (!aux) boton.innerText = "registrarse";
//   else {
//     user[0].name = prompt("ingresa tu nombre de usuario")
//     let email = prompt("ingresa tu email");
//     let password = prompt("ingresa tu contraseña");
//     if(email === user[0].email && password === user[0].password) boton.innerText = user[0].name.toUpperCase()
//     else{
//       alert("La contraseña o el email son incorrectos, ingreselos nuevamente")
//       email = prompt("ingresa tu email");
//       password = prompt("ingresa tu contraseña");
//     }
//   }
// });

// boton.onclick = () => {
//   if (aux === "out") {
//     alert("la sesion se cerro con exito!")
//     userName.innerText = "Iniciar Sesion";
//     aux === "log"
//   } else {
//     user[0].name = prompt("ingresa tu nombre de usuario");
//     let email = prompt("ingresa tu email");
//     let password = prompt("ingresa tu contraseña");
//     if (email === user[0].email && password === user[0].password) {
//       userName.innerText = user[0].name.toUpperCase();
//       alert("se inicio sesion correctamente para cerrar sesion haga click en el icono del usuario")
//       aux = "out";
//     } else {
//       alert("La contraseña o el email son incorrectos, ingreselos nuevamente");
//       email = prompt("ingresa tu email");
//       password = prompt("ingresa tu contraseña");
//     }
//   }
// };

//---------------------------------------STORAGE Y JASON--------------------------------------------

//los metodos son iguales para el sesionStorage como para el localStorage

// //setea un storage
// localStorage.setItem(key,value)

// //busca y trae un valor
// localStorage.getItem(key)

// //agarra la key
// localStorage.key(param);

// //elimina un solo elemento
// localStorage.removeItem(key)

// //elimina toda la info del local storage
// localStorage.clear()

// //para pasar de obj.js a jason
// let persona = {
//   edad:30,
//   name:"nicolas"
// }

// let personaJason = JSON.stringify(persona)

// localStorage.setItem("persona",personaJason)

// //para pasar de jason a obj.js
// let personaRecuperada = JSON.parse(localStorage.getItem("persona"))
// personaRecuperada.apellido = "surbayrole"

// personaJason = JSON.stringify(personaRecuperada)
// localStorage.setItem("persona", personaJason)