let productos = [
  {
    titulo: "AIR FORCE ROJAS",
    imgUrl: "./imagenes/zapatillas/travis-essinger-iOv3CqiZLtE-unsplash.jpg",
    id: 1,
    precio:10500
  },
  {
    titulo: "AIR FORCE MULTICOLOR",
    imgUrl: "./imagenes/zapatillas/ryan-plomp-jvoZ-Aux9aw-unsplash.jpg",
    id: 2,
    precio:11000
  },
  {
    titulo: "AIR FORCE ROSA",
    imgUrl: "./imagenes/zapatillas/vladimir-yelizarov-RlDOPY6rBa0-unsplash.jpg",
    id: 3,
    precio:20000
  },
  {
    titulo: "AIR JORDAN",
    imgUrl: "./imagenes/zapatillas/ryan-plomp-76w_eDO1u1E-unsplash.jpg",
    id: 4,
    precio:25000
  },
  {
    titulo: "REMERA BLANCA",
    imgUrl: "./imagenes/remeras/anomaly-WWesmHEgXDs-unsplash.jpg",
    id: 5,
    precio:6000
  },
  {
    titulo: "HOODIE NARANJA",
    imgUrl: "./imagenes/buzos/pablo-padilla-HbY4XIMKxus-unsplash.jpg",
    id: 6,
    precio:10000
  },
  {
    titulo: "REMERA FILA AZUL",
    imgUrl: "./imagenes/remeras/ahmed-sheraz-IiRqwBNVdTs-unsplash.jpg",
    id: 7,
    precio:4000
  },
  {
    titulo: "JEAN ROTURAS",
    imgUrl: "./imagenes/pantalones/alicia-petresc-BciCcl8tjVU-unsplash.jpg",
    id: 8,
    precio:7000
  },
];
let inicio = document.getElementsByClassName("mainInterno");

for (const {titulo, imgUrl,id} of productos) {
  let main = document.createElement("main");
  if (titulo && imgUrl) {
    main.innerHTML = `
      <h2>${titulo}</h2>
      <img class= 'imagenes' src=${imgUrl}>
      `;
    let section = document.createElement("section");
    section.innerHTML = `
      <button type="button" id=${id} class="boton carrito">Agregar Producto</button>
      `;

    inicio[0].append(main);
    main.appendChild(section);
  }
}

let botonesCarrito = document.getElementsByClassName("carrito")
console.log(botonesCarrito);


for (boton of botonesCarrito) {
  boton.onclick = (e) =>{
    let productoBuscado = productos.find(producto => producto.id == e.target.id)
    console.log(productoBuscado);
  }
} 

let users = [];
let validarUser = true;

const logInBtn = document.getElementById("login");
const btnRegistro = document.getElementById("btn");
const userName = document.getElementById("p-nav");
const logOut = document.getElementById("logOut");

const inputName = document.getElementById("Nombre");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");

const registrar = document.getElementById("btnContacto");
const btnLog = document.getElementById("btnLog");

const main = document.getElementById("main");
const mainLog = document.getElementById("mainLog");

const nombreLog = document.getElementById("nombreLog");
const emailLog = document.getElementById("emailLog");
const passwordLog = document.getElementById("passwordLog");

const iniciarSesion = (name, email, password) => {
  for (user of users) {
    if (
      name === user.name &&
      email === user.email &&
      password === user.password
    ) {
      userName.innerText = user.name.toUpperCase();
      Swal.fire({
        position: "center",
        icon: "success",
        title:
          "se inicio sesion correctamente para cerrar sesion haga click en el icono del usuario",
        showConfirmButton: false,
        timer: 2300,
      });
      validarUser = false;
      passwordLog.value = "";
      nombreLog.value = "";
      emailLog.value = "";

      logInBtn.className = "nav-link active oculto";
      mainLog.className = "home mainContacto oculto";
      logOut.className = "nav-link active mostrar";
      logOut.id = "btn";
      break;
    }
  }
  if (validarUser) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El email o la contraseña son incorrectos, ingreselos nuevamente!",
      confirmButtonColor: "peru",
    });
    passwordLog.value = "";
    nombreLog.value = "";
    emailLog.value = "";
    while (!validarUser) {
      iniciarSesion();
    }
  }
};

const registro = () => {
  const found = users.find((user) =>
    user.email === inputEmail.value || user.name === inputName.value
      ? true
      : false
  );
  if (
    inputName.value != "" &&
    inputEmail.value != "" &&
    inputPassword.value != "" &&
    !found
  ) {
    let user = {
      name: inputName.value,
      email: inputEmail.value,
      password: inputPassword.value,
    };

    users.push(user);

    let userJason = JSON.stringify(user);
    let userStorage = localStorage.setItem("user", userJason);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "el usuario se creo correctamente,sera redirigido al login",
      showConfirmButton: false,
      timer: 1800,
    });
    inputName.value = "";
    inputEmail.value = "";
    inputPassword.value = "";
    btnRegistro.className = "oculto";
    logInBtn.className = "mostrar btn";
    logInBtn.id = "btn";
    main.className = "oculto";
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "hubo un error, intente nuevamente!",
      confirmButtonColor: "peru",
    });
    inputName.value = "";
    inputEmail.value = "";
    inputPassword.value = "";
  }
};

const cerrarSesion = () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "la sesion se cerro con exito!",
    showConfirmButton: false,
    timer: 1800,
  });
  userName.innerText = "Iniciar Sesion";
  validarUser = true;
  logOut.className = "nav-link active oculto";
  logOut.id = "logOut";
  localStorage.removeItem("user");
  if (users.length > 0) {
    logInBtn.className = "nav-link active mostrar";
    logInBtn.id = "btn";
  } else {
    btnRegistro.className = "nav-link active mostrar";
    btnRegistro.id = "btn";
  }
};

if (localStorage.getItem("user")) {
  const userStorage = JSON.parse(localStorage.getItem("user"));
  btnRegistro.className = "home mainContacto oculto";
  logOut.className = "nav-link active mostrar";
  logOut.id = "btn";
  userName.innerText = userStorage.name.toUpperCase();
  validarUser = true;
}

btnRegistro.onclick = () => {
  if (main.classList.value === "home mainContacto oculto") {
    main.className = "home mainContacto mostrar";
  } else {
    main.className = "home mainContacto oculto";
  }
};

logInBtn.onclick = () => {
  if (mainLog.classList.value === "home mainContacto oculto") {
    mainLog.className = "home mainContacto mostrar";
  } else {
    mainLog.className = "home mainContacto oculto";
  }
};

registrar.onclick = () => {
  registro();
};

btnLog.onclick = () => {
  iniciarSesion(nombreLog.value, emailLog.value, passwordLog.value);
};

logOut.onclick = () => {
  cerrarSesion();
};

