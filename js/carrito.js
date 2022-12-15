const carritoNav = document.getElementById("carrito")  
const mainInternoCarrito = document.getElementById("mainInternoCarrito")

let mainCarrito = document.getElementById('mainCarrito')
let carritoStorage = JSON.parse(localStorage.getItem("carrito"))


  if(localStorage.getItem("carrito")){
    for (const {titulo,precio,imgUrl} of carritoStorage) {
        let mainInterno = document.createElement("main");
        mainInterno.innerHTML = `
      <h2>PRODUCTO: ${titulo}</h2>
      <img class= 'img' src=.${imgUrl}>
      <p class='precio'>PRECIO: ${precio}$</p>
      `;
      mainInternoCarrito.append(mainInterno)
    }
}else{
    mainCarrito.innerHTML = `<h2 calass="carritoCentro">EL CARRITO ESTA VACIO</h2>`
}


const vaciarCarrito = document.getElementById("carrito")

vaciarCarrito.onclick = () =>{ 
    localStorage.removeItem("carrito");
    location.reload()
}
