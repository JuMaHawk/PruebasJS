listadoProductos = [];


//-------------TRAIGO DEL LOCALSTORAGE LOS PRODUCTOS GUARDADOS-----------------
const listadoLS = JSON.parse(localStorage.getItem("listOfProduct"))
console.log(listadoLS)


//-------SI HAY ALGO EN EL LS LO GUARDO DENTRO DE LA VARIABLE LISTADOPRODUCTOS----
if(listadoLS){
    listadoProductos = listadoLS;
}


//---------FUNCION PARA GUARDAR LOS DARTOS EN EL STRORAGE------
const guardarLS = (clave , valor) => localStorage.setItem(clave,valor);



//-----------------------AGREGAR PRODUCTOS--------------------------
//Traigo del html el boton de agregar productos y lo guardo en la variable botonAgregar
let botonAgregar = document.getElementById("botonAgregar")

//Le aplico un evento cuando le hacen click.
botonAgregar.addEventListener("click", () => {
  
//Me traigo el div #botones que contiene los botones del html y lo borro.
  let botones = document.getElementById("botones");
  botones.remove();

//Me traigo en div #mostrarProdcutos que contiene los productos del listado y lo borro.
  if(document.getElementById("muestraProductos")){
    let muestraProductos = document.getElementById("muestraProductos");
    muestraProductos.remove();
  }

//Me traigo el h1 del html que contiene el saludo y lo modifico.
  let saludo = document.getElementById("saludo")
  saludo.innerText = "Ingrese los datos del producto que desea agregar"
  
//Creo un div #inputDatos al que le agrego mediante inneHTML un formulario para pasar los datos del nuevo producto.
  let inputDatos = document.createElement("div");
  inputDatos.innerHTML = `
    <form id="formulario">
    <input type="text" placeholder="Categoria">
    <input type="text" placeholder="Nombre">
    <input type="number" placeholder="Precio">
    <input type="submit" value="Agregar producto">
    </form>`

//Agrego al body el formulario.
  document.body.append(inputDatos);

//Me traigo del html el formulario.  
  let formulario = document.getElementById("formulario");

//Le agrego un evento al boton submit del formulario para guardarme los datos ingresados en un nuevo objeto.  
  formulario.addEventListener("submit", (e) => {
    // e.preventDefault()
    let inputs = e.target.children;
    let categoria = inputs[0].value;
    let nombre = inputs[1].value;
    let precio = inputs[2].value;
    nuevoProducto = {categoria, nombre, precio};

//El nuevo objeto creado por el usuario lo meto dentro del array listadoProductos.    
    listadoProductos.push(nuevoProducto)

//Transformo el listado de objetos en JSON, lo guardo con el nombre de listOfProdct y lo subo al storage mediante la funcion guardarLS.    
    guardarLS("listOfProduct", JSON.stringify(listadoProductos))
  })
});
console.log(listadoProductos)


//----------------------------MOSTRAR PRODUCTOS-----------------------------
//Me traigo del html el boton #botonMostrar y lo guardo en la variable mostrarStock.
let mostrarStock = document.getElementById("botonMostrar");
let muestraProductos = document.getElementById("muestraProductos");

//Le agrego un evento al hacer click en este boton.
mostrarStock.addEventListener("click", () => {
  
//Creo un nuevo div #muestreo donde voy a agregar los productos a mostrar.  

//Recorro con el forEach el listado de productos. 
listadoProductos.forEach((item) => {
  let nuevoDiv = document.createElement("div");
    nuevoDiv.id = "muestreo"
    listadoProductos = [];
    nuevoDiv.innerHTML = `
    <h2>Categoria: ${item.categoria}</h2>
    <p>Producto: ${item.nombre}</p>
    <p>Precio: ${item.precio}</p>
    `
  muestraProductos.append(nuevoDiv)
  });
})
//TENGGO QUE AGREGAR UN MENSAJE VACIO DONDE SE VAYAN SUMANDO LOS PRODUCTOS EN CADA ITERACION DEL FOREACH DE LISTADO DE PRODUCTOS          

//-----------------------------ELIMINAR PRODUCTOS----------------------------
let botonEliminar = document.getElementById("botonEliminar");
botonEliminar.addEventListener("click", () =>{
  localStorage.clear();
  listadoProductos = [];
  let nuevoDiv = document.getElementById("muestraProductos")
  nuevoDiv.remove()
  console.log(listadoProductos)
})