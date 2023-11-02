const listadoProductos = [];


//Traigo del html el boton para agregar productos.
let botonAgregar = document.getElementById("botonAgregar")

//Le aplico un evento cuando le hacen click. Creando un formulario para ingresar los datos del producto.
botonAgregar.addEventListener("click", () => {
  let botones = document.getElementById("botones")
  botones.remove()
  let inputDatos = document.createElement("div");
  let saludo = document.getElementById("saludo")
  saludo.innerText = "Ingrese los datos del producto que desea agregar"
  inputDatos.innerHTML = `
    <form id="formulario">
    <input type="text" placeholder="Categoria">
    <input type="text" placeholder="Nombre">
    <input type="number" placeholder="Precio">
    <input type="submit" value="Enviar datos">
</form>`
  document.body.append(inputDatos);

  let formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", (e) => {
    let inputs = e.target.children;
    let categoria = inputs[0].value;
    let nombre = inputs[1].value
    let precio = inputs[2].value;
    listadoProductos.push({ categoria, nombre, precio });
  })
});

let mostrarStock = document.getElementById("botonMostrar");
mostrarStock.addEventListener("click", () => {
  listadoProductos.forEach((item) => {
    alert("funciona")
    let nuevoDiv = document.createElement("div");
    div.innerHTML = `
    <h2>Categoria: ${item.categoria}</h2>
    <p>Producto: ${item.nombre}</p>
    <p>Precio: ${item.precio}</p>
    `
    alert(listadoProductos)
    document.body.append(nuevoDiv)
  });
})

