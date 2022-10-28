let productos = [
  {
    titulo: "AIR FORCE ROJAS",
    imgUrl: "./imagenes/zapatillas/travis-essinger-iOv3CqiZLtE-unsplash.jpg",
  },
  {
    titulo: "AIR FORCE MULTICOLOR",
    imgUrl: "./imagenes/zapatillas/ryan-plomp-jvoZ-Aux9aw-unsplash.jpg",
  },
  {
    titulo: "AIR FORCE ROSA",
    imgUrl: "./imagenes/zapatillas/vladimir-yelizarov-RlDOPY6rBa0-unsplash.jpg",
  },
  {
    titulo: "AIR JORDAN",
    imgUrl: "./imagenes/zapatillas/ryan-plomp-76w_eDO1u1E-unsplash.jpg",
  },
  {
    titulo: "REMERA BLANCA",
    imgUrl: "./imagenes/remeras/anomaly-WWesmHEgXDs-unsplash.jpg",
  },
  {
    titulo: "HOODIE NARANJA",
    imgUrl: "./imagenes/buzos/pablo-padilla-HbY4XIMKxus-unsplash.jpg",
  },
  {
    titulo: "REMERA FILA AZUL",
    imgUrl: "./imagenes/remeras/ahmed-sheraz-IiRqwBNVdTs-unsplash.jpg",
  },
  {
    titulo: "JEAN ROTURAS",
    imgUrl: "./imagenes/pantalones/alicia-petresc-BciCcl8tjVU-unsplash.jpg",
  },
];

let user = [
  {
    name: "",
    password: "pantera1234",
    email: "ns@hotmail.com",
  },
];

let inicio = document.getElementsByClassName("mainInterno");

for (producto of productos) {
  let main = document.createElement("main");
  if (producto.titulo && producto.imgUrl) {
    main.innerHTML = `
      <h2>${producto.titulo}</h2>
      <img class= 'imagenes' src=${producto.imgUrl}>
      `;
    let section = document.createElement("section");
    section.innerHTML = `
      <button type="button" class="boton">Ver Producto</button>
      `;

    inicio[0].append(main);
    main.appendChild(section);
  }
}

const boton = document.getElementById("btn-Log");
let userName = document.getElementById("p-nav");
let aux = "log";
let email="";
let password="";

boton.onclick = () => {
  if (aux === "log") logIn();
  else logOut();
};

const logIn = () => {
  if (!user[0].name) {
    user[0].name = prompt("ingresa tu nombre de usuario");
    email = prompt("ingresa tu email");
    password = prompt("ingresa tu contraseña");
  } else {
    email = prompt("ingresa tu email");
    password = prompt("ingresa tu contraseña");
  }
  if (email === user[0].email && password === user[0].password) {
    userName.innerText = user[0].name.toUpperCase();
    alert("se inicio sesion correctamente para cerrar sesion haga click en el icono del usuario");
    aux = "out";
  } else {
    alert("La contraseña o el email son incorrectos, ingreselos nuevamente");
    while (email != user[0].email || password != user[0].password) {
      logIn();
    }
  }
};

const logOut = () => {
  alert("la sesion se cerro con exito!");
  userName.innerText = "Iniciar Sesion";
  user[0].name = "";
  aux = "log";
};

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
