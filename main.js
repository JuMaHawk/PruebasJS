productos = [];

function mostrarProductos (producto){
  productos.forEach(element => {
        
  });
}
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
</form>
`
document.body.append(inputDatos);
});

formulario.addEventListener(submit, (e)=> {
  e.preventDefault(); 
  let inputs = e.target.children
  let categoria = inputs[0].value;
  let nombre = inputs[1].value
  let precio = inputs[2].value;

  productos.push({categoria, nombre, precio})
console.log(productos)
})