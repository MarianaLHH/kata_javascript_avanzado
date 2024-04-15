// alert("archivo cargado");--> Viendo que se conecto correctamente html y js
const testButton = document.getElementById("testButton");
//Obtener al div con id contenedor
const container = document.getElementById("contenedor");
/*
function pruebaBloqueo() {
  setTimeout(() => {
    console.log("pasaron 5 segundos");
  }, 5000); //Se espera tres segundos antes de realizar la funcion
}
testButton.addEventListener("click", () => {
  // Hacemos que el boton tenga funcionalidad
  pruebaBloqueo();
  //console.log("Hola esto es un click");
});
*/
/*function bloquear() {
  setTimeout(() => {
    console.log("bloqueado por 5 s");//despues aparece este console
  }, 5000);
}
bloquear();
console.log("mensaje despues de bloquear");//primero aparece este console
*/
//INFORMACION COLORES
/*
CELESTES=PARAMETROS
VERDE=TIPOS DE DATO
AMARILLO=
PALITO( )=OR
?: =PARAMETRO OPCIONAL
*/
//Convierte un objeto pokemon a un div.card
function pokemonToDiv(pokemon) {
  //Crear un div que represente una carta
  const card = document.createElement("div");
  card.classList.add("card");
  //Rellenar con informacion
  const image = document.createElement("img");
  image.src = pokemon.sprites.other["official-artwork"].front_default;
  card.appendChild(image);

  const name = document.createElement("p");
  name.textContent = pokemon.name;
  card.appendChild(name);
  // SE DEBE CONVERTIR UN ARREGLO DE TYPES A SPAM
  const types = pokemon.types.map((type) => {
    const typeSpan = document.createElement("span");
    typeSpan.textContent = type.type.name; //PREGUNTA¿XQ (type.type.name) y no types.type.name?
    return typeSpan;
  });

  card.append(...types); // En vez de foreach ¿COMO FUNCIONA EL ...?

  /*pokemon.types->[{
      slot:number
      type:{
        name: string
        url: string
      }
  }]
  SE DEBE CONVERTIR UN ARREGLO DE TYPES A SPAM
  */
  //Meter la carta en el contenedor
  container.appendChild(card);
}

// INICIO--->Hata ahi ya puedo consumir mi API de pokemon dito y trabajar con ello
testButton.addEventListener("click", () => {
  fetch(" https://pokeapi.co/api/v2/pokemon/ditto") //Si no se especifica(get,post,update,delete) automaticamnete hace un GET
    .then((response) => {
      //.then((response-->es la respuesta))-->recibe el callback y se ejecuta cuando se resuelva ("http...lo de arriba en fetch")
      return response.json(); //transformamos nuestro(response) a un json
    })
    .then((data) => {
      //(data->es el json)
      //console.log(data.sprites.other["official-artwork"].front_default); //official-artwork--> el uso del (-)lo lee como un operador asi q' se aplica de distinta forma usando [ ]
      console.log(data);
      pokemonToDiv(data);
    });
});
//......................FIN........................................
