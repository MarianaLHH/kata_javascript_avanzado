const typeColors = {
  normal: "#A8A878",
  fighting: "#C03028",
  flying: "#A890F0",
  poison: "#A040A0",
  ground: "#E0C068",
  rock: "#B8A038",
  bug: "#A8B820",
  ghost: "#705898",
  steel: "#B8B8D0",
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#F8D030",
  psychic: "#F85888",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  fairy: "#EE99AC",
  unknown: "#68A090",
  shadow: "#705898",
};
class Pokemon {
  //Clase pokemon
  //METODO
  contructor(image, name, types) {
    this.image = image;
    this.name = name;
    this.types = types;
  }

  toDiv() {
    //METODO
    const card = document.createElement("div");
    card.classList.add("card");

    //Image
    const img = document.createElement("img");
    img.src = this.image; // this-->Accedo a las propiedades del metodo constructor
    card.appendChild(img);

    //Name
    const name = document.createElement("p");
    name.textContent = this.name;
    card.appendChild(name);

    //Types
    console.log(this.types);
    const types = this.types.map((type) => {
      const typeSpan = document.createElement("span");
      typeSpan.classList.add("pokemon-type");
      typeSpan.style.backgroundColor = typeColors[type.type.name];
      typeSpan.textContent = type.type.name;
      return typeSpan;
    });
    card.append(...types);

    return card; //----??xq retorna card
  }

  print() {
    console.log(`
       Imagen: ${this.image}
       Nombre: ${this.name}
       Tipos: ${this.types}
    `);
  }
}
