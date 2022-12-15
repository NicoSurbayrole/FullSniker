//perdon por usar alert pero es solo para dejarlo mostrado en algun lada,lo voy a estar haciendo igual para q cuado aprete renderice el carrito de de la misma forma en la q se ven los productos.

//los productos se ven una vez registrado.


const pedirProductos = async () => {
  try {
    const res = await fetch("../db/productos.json");
    const productos = await res.json();
    miCodigo(productos);
  } catch (error) {
    console.log(error);
  }
};
pedirProductos();

let agregarCarrito = [];
let carritoProducto;
let carritoStorage;

const miCodigo = (productos) => {
  let inicio = document.getElementsByClassName("mainInterno");

  for (const { titulo, imgUrl, id } of productos) {
    let main = document.createElement("main");
    if (titulo && imgUrl) {
      main.innerHTML = `
          <h2>${titulo}</h2>
          <img class= 'imagenes' src=${imgUrl}>`;
      let section = document.createElement("section");
      section.innerHTML = `
          <button type="button" id=${id} class="boton carrito">Agregar Producto</button>
          `;

      inicio[0].append(main);
      main.appendChild(section);
    }
  }

  let botonesCarrito = document.getElementsByClassName("carrito");

  for (boton of botonesCarrito) {
    boton.onclick = (e) => {
      let productoBuscado = productos.find(
        (producto) => producto.id == e.target.id
      );
      if (agregarCarrito.length === 0) {
        if (productoBuscado.stock === 0) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "el producto no cuenta con el stok suficiente",
            showConfirmButton: false,
            timer: 1800,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "el producto se agrego correctamente",
            showConfirmButton: false,
            timer: 1800,
          });
          productoBuscado.stock--;
          agregarCarrito.push(productoBuscado);
          carritoProducto =  JSON.stringify(agregarCarrito)
          carritoStorage = localStorage.setItem("carrito", carritoProducto);

        }
      } else {
        let productoRepetido = agregarCarrito.find(
          (producto) => productoBuscado.id == producto.id
        );
        if (!productoRepetido) {
          if (productoBuscado.stock === 0) {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "el producto no cuenta con el stok suficiente",
              showConfirmButton: false,
              timer: 1800,
            });
          } else {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "el producto se agrego correctamente",
              showConfirmButton: false,
              timer: 1800,
            });
            productoBuscado.stock--;
            agregarCarrito.push(productoBuscado);
            carritoProducto =  JSON.stringify(agregarCarrito)
            carritoStorage = localStorage.setItem("carrito", carritoProducto);
          }
        } else {
          if (productoRepetido.stock === 0) {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "el producto no cuenta con el stok suficiente",
              showConfirmButton: false,
              timer: 1800,
            });
          } else {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "el producto se agrego correctamente",
              showConfirmButton: false,
              timer: 1800,
            });
            productoBuscado.stock--;
            productoBuscado.cantidad ? productoBuscado.cantidad++ : (productoBuscado.cantidad = 2);
          }
        }
      }
    };
  }

  // let navCarrito = document.getElementById("carrito");

  // navCarrito.onclick = () => {
  //   if (agregarCarrito.length === 0) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: "el carrito esta vacio!",
  //       confirmButtonColor: "peru",
  //     });
  //   } else {
  //     for (const { titulo, cantidad, stock, precio } of agregarCarrito){
  //       !cantidad ? alert(`${titulo}, cantidad: 1, stock: ${stock}, precio: ${precio}`) : alert(`${titulo}, cantidad: ${cantidad}, stock: ${stock}, precio: ${precio}`);
  //     }
  //   }
  // };

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

  const home = document.getElementById("main");
  const mainLog = document.getElementById("mainLog");

  const nombreLog = document.getElementById("nombreLog");
  const emailLog = document.getElementById("emailLog");
  const passwordLog = document.getElementById("passwordLog");
  const mainProducto = document.getElementById("mainProducto");

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
        mainProducto.classList.toggle("mostrar");
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
      home.className = "oculto";
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
    mainProducto.className = "home mostrar";
    validarUser = true;
  }

  btnRegistro.onclick = () => {
    if (home.classList.value === "home mainContacto oculto") {
      home.className = "home mainContacto mostrar";
    } else {
      home.className = "home mainContacto oculto";
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
    mainProducto.className = "home oculto";
  };

}
