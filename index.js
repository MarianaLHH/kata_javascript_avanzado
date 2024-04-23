// alert("archivo cargado");--> Viendo que se conecto correctamente html y js
const testButton = document.getElementById("testButton");

//Boton promise
const promesasButton = document.getElementById("promesas");
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
//---------------------------------------------------------TODO ESTE CODIGO ESTA EN  LA CLASE Pokemno.js-->toDiv()-----------------------------------------------------------------------
/*
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
    typeSpan.textContent = type.type.name; 
    return typeSpan;
  });

  card.append(...types);
  container.appendChild(card);
}
*/
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------INICIO--->Hata ahi ya puedo consumir mi API de pokemon dito y trabajar con ello
testButton.addEventListener("click", () => {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => {
      return response.json(); // Convertir a un Json
    })

    //Respuesta Data
    .then((data) => {
      //console.log(data.results);

      //Convertir a Arrgelo de Promesas
      const arregloPromesas = data.results.map((pokelink) => {
        return fetch(pokelink.url);
      });
      //console.log(arregloPromesas);
      //Resolver con un promise.all y se tiene un arreglo de response
      Promise.all(arregloPromesas).then((resultado) => {
        //Convertir el arreglo de response a json
        const arregloPromesasJson = resultado.map((response) => {
          return response.json();
        });
        //Resuleve y lo ordena
        Promise.all(arregloPromesasJson).then((arregloPokemon) => {
          //Promise se resueleve con un -->.then
          const arregloClasesPokemon = arregloPokemon.map((pokemon) => {
            return new Pokemon(
              pokemon.sprites.other["official-artwork"].front_default,
              pokemon.name,
              pokemon.types
            );
          });
          console.log(arregloClasesPokemon);
          const pokemonDivs = arregloClasesPokemon.map((pokemonClass) => {
            return pokemonClass.toDiv();
          });
          container.append(...pokemonDivs);
        });
      });
    })
    /*Una forma de tener el-->name y url con forEach
      data.results.forEach((pokemon) => {
        console.log(pokemon.url);

        fetch(pokemon.url)
          .then((response) => {
            return response.json();
          })
          .then((pokemonJson) => {
            console.log(pokemonJson.id, pokemonJson.name);
          });
        //pokemon.name

        //pokemon.url
      });
      */

    .catch((error) => {
      console.log("Ocurrio un error al pedir data al Api", error);
    });
});

/*
  fetch(" https://pokeapi.co/api/v2/pokemon/ditto") //Si no se especifica(get,post,update,delete) automaticamnete hace un GET
    .then((response) => {
      //.then((response-->es la respuesta))-->recibe el callback y se ejecuta cuando se resuelva ("http...lo de arriba en fetch")
      return response.json(); //transformamos nuestro(response) a un json
    })
    .then((data) => {
      //(data->es el json)
      //console.log(data.sprites.other["official-artwork"].front_default); //official-artwork--> el uso del (-)lo lee como un operador asi q' se aplica de distinta forma usando [ ]
      //console.log(data); //IMPRIME EL OBJETO
*/
/*  
const pokemon = new Pokemon( //LLAMANDO A UNA CLASE de Pokemon.js
    data.sprites.other["official-artwork"].front_default,
    data.name,
    data.types
  );

  pokemon.print();
  const pokemonDiv = pokemon.toDiv();
  container.appendChild(pokemonDiv);
  //pokemonToDiv(data);
});
*/
//});

//Funcion del boton promesas
//promesasButton.addEventListener("click", () => {
//Clase promesa ya hecha en js
/*
  const miPromesa = new Promise((resolve, reject) => {
    //Cuando el proceso tardado se haya hecho con exito

    setTimeout(() => {
      resolve("Operacion copletada con exito");
    }, 3000);
    // Se ejecuta cuando el proceso tuvo algun error
    //reject("Operacion fallida"); SI LO DESCOMENTO XQ CORRE PRIMERO REJECT????
  });
  miPromesa
    .then((result) => {
      //then--<metodo e la clase promesa ,Para que se ejecute mi resolve // XQ SE USA THEN Y CATCH SI HACE LO MISMO QUE REJECT Y RESOLVE????
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
    */

/*
  console.log("Hola mundo 1");
  setTimeout(() => {
    console.log("promesa 1");
  }, 3000);
  console.log("Adios mundo 1");

  */
/*
  console.log("Hola mundo2");
  const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("promesa");
      resolve();
    }, 3000);
  });
  miPromesa.then(() => {
    console.log("Adios mundo2");
  });
*/
//
