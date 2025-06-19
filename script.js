// Logica Boton Mensaje Aleatorio - (Ticket Felipe)

// Estructura de datos para almacenar los mensajes
let arrayMessages = [
  "La vida es corta, sonríe mientras aún tienes dientes.",
  "Haz lo que te haga feliz.",
  "Vive, ríe, ama.",
  "El tiempo cura todas las heridas.",
  "La felicidad está en las pequeñas cosas.",
  "Sé tú mismo, todos los demás ya están ocupados.",
  "Cree en ti mismo.",
  "La vida es un viaje, no un destino."
]

// Obtener los elementos del DOM
const message = document.getElementById("randomMessage")
const btnRandom = document.getElementById("btnRandom")

// Escuchar el click del usuario en el boton y ejecutar una funcion
btnRandom.addEventListener("click", showMessage)

// Por defecto se define el ultimo indice en -1
let lastIndex = -1

// Funcion que muestra el mensaje
function showMessage() {
  let index

  do {
    // Generar un indice random hasta que sea diferente del ultimo indice generado
    index = Math.floor(Math.random() * arrayMessages.length)
  } while (index === lastIndex)
  
  /* 
  Se asgina el indice generado a la variable ultimo indice
  para compararlo con el indice que se genera la siguiente ocasion
  */
  lastIndex = index

  // Asignar el mensaje obtenido mediante el indice al parrafo del DOM
  message.textContent = `"${arrayMessages[index]}"`
}

// --- Contador ---
const counterValue = document.getElementById("counterValue")
const btnIncrement = document.getElementById("increment")
const btnDecrement = document.getElementById("decrement")
const btnReset = document.getElementById("reset")

let count = 0

btnIncrement.addEventListener("click", () => {
  count++
  counterValue.textContent = count
})

btnDecrement.addEventListener("click", () => {
  count--
  counterValue.textContent = count
})

btnReset.addEventListener("click", () => {
  count = 0
  counterValue.textContent = count
})