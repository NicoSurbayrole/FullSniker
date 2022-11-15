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
