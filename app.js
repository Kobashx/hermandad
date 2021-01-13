import Carros from './carros.js'
// import Chevrolet from './chevrolet.js'

// FORMULARIO
const producto = document.getElementById('producto')
const marca = document.getElementById('marca')
const precio = document.getElementById('precio')


// BOTONES
// submit
const boton_ingresar_product = document.getElementById('boton_ingresar_product')




const chevrolet = new Carros('chevrolet', 'v8', '2008')



boton_ingresar_product.onclick = () => { document.write(chevrolet.informacion()) }