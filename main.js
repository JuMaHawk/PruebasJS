listadoProductos = [];
const listadoLS = JSON.parse(localStorage.getItem("listadoProductos"))
console.log(listadoLS)
if(listadoLS){
    listadoProductos = listadoLS;
}



const guardarLS = (clave , valor) => localStorage.setItem(clave,valor);

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
    <input type="submit" value="Agregar producto">
</form>`
  document.body.append(inputDatos);

  let formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", (e) => {
    // e.preventDefault()
    let inputs = e.target.children;
    let categoria = inputs[0].value;
    let nombre = inputs[1].value;
    let precio = inputs[2].value;
    nuevoProducto = {categoria, nombre, precio};
    console.log(nuevoProducto);
    // const newProd = JSON.stringify(nuevoProducto);
    // localStorage.setItem("PUTO", newProd)

    listadoProductos.push(nuevoProducto)
    const listProd = JSON.stringify(listadoProductos)  
    guardarLS("listadoProdcutos", JSON.stringify(listadoProductos))
  })
});


let mostrarStock = document.getElementById("botonMostrar");
mostrarStock.addEventListener("click", () => {
    console.log(listadoProductos);
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