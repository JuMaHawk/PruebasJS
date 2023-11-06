listadoProductos = [];
const listadoLS = JSON.parse(localStorage.getItem("listOfProduct"))
console.log(listadoLS)
if(listadoLS){
    listadoProductos = listadoLS;
}


const guardarLS = (clave , valor) => localStorage.setItem(clave,valor);

//-----------------------AGREGAR PRODUCTOS--------------------------
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
    listadoProductos.push(nuevoProducto)
    // const listProd = JSON.stringify(listadoProductos)  
    guardarLS("listOfProduct", JSON.stringify(listadoProductos))
  })
});

//----------------------------MOSTRAR PRODUCTOS-----------------------------
let mostrarStock = document.getElementById("botonMostrar");
mostrarStock.addEventListener("click", () => {
  let nuevoDiv = document.createElement("div");
  nuevoDiv.id = "muestreo"
  listadoProductos.forEach((item) => {
    listadoProductos = [];
    nuevoDiv.innerHTML = `
    <h2>Categoria: ${item.categoria}</h2>
    <p>Producto: ${item.nombre}</p>
    <p>Precio: ${item.precio}</p>
    `
    document.body.append(nuevoDiv)
  });
})
//TENGGO QUE AGREGAR UN MENSAJE VACIO DONDE SE VAYAN SUMANDO LOS PRODUCTOS EN CADA ITERACION DEL FOREACH DE LISTADO DE PRODUCTOS          

//-----------------------------ELIMINAR PRODUCTOS----------------------------
let botonEliminar = document.getElementById("botonEliminar");
botonEliminar.addEventListener("click", () =>{
  localStorage.clear();
  listadoProductos = [];
  let nuevoDiv = document.getElementById("muestreo")
  nuevoDiv.remove()
  console.log(listadoProductos)
})