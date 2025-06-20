

function saludar(){ // función para saludar según la hora del día
  let now= new Date(); //obtiene la fecha y hora actual
  let hours= now.getHours();  //obtiene la hora actual
  let saludo; //variable para almacenar el saludo
console.log(hours) // imprime la hora actual en la consola


if (hours >= 5 && hours < 12) { // verifica si la hora está entre 5 y 12
  saludo= "Good morning!"; // asigna el saludo de buenos días
} else if (hours >= 12 && hours < 18) { // verifica si la hora está entre 12 y 18
  saludo= "Good afternoon!"; // asigna el saludo de buenas tardes
} else {
  saludo= "Good evening!"; // asigna el saludo de buenas noches
} 

document.getElementById("saludar").textContent = saludo; // actualiza el contenido del elemento con id "saludar" con el saludo correspondiente
}
