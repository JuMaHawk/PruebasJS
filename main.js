<<<<<<< HEAD
const productos = [
    { categoria: "MTB", producto: "llanta", precio: 8000 },
    { categoria: "CARRERA", producto: "manubrio", precio: 1400 },
    { categoria: "PASEO", producto: "contrapedal", precio: 3600 },
    { categoria: "MTB", producto: "cubierta", precio: 4500 },
    { categoria: "CARRERA", producto: "cadena", precio: 650 },
    { categoria: "PASEO", producto: "pedales", precio: 3100 },
    { categoria: "MTB", producto: "disco de freno", precio: 5500 },
    { categoria: "CARRERA", producto: "shifter", precio: 6750 },
    { categoria: "PASEO", producto: "pedalines", precio: 2730 }
];


//Pedido de datos al usuario para hacer el filtro, mediante prompt.
let categoria = prompt("Ingrese la categoria del producto buscado");
let producto = prompt("Ingrese el nombre del producto buscado");
let precio = Number(prompt("Ingrese el valor maximo que desea pagar por su producto"));

//Modifico las entradas para evitar que no coincidan con los valores.
categoria = categoria.toUpperCase();
producto = producto.toLowerCase();

//Filtro segun los datos ingresados por el usuario.
let prodFiltrados = productos.filter(
    (item) =>
        item.categoria === categoria &&
        item.producto === producto &&
        item.precio <= precio    
);
=======
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
>>>>>>> 9ec47c6ac814fca938427695053b1fe9bac954b5
