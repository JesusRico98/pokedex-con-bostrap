const listapokemon = document.getElementById("listapokemon");



let URL = "https://pokeapi.co/api/v2/pokemon/";




        for ( let i = 1 ; i <=  141; i++) {
            fetch(URL + i)
              .then((response) => response.json())
              .then((data) => mostrarPokemon(data));
          }
    



function mostrarPokemon(poke) {
  let tipos = poke.types.map(
    (type) => `<p class="col ${type.type.name} tipo">${type.type.name}</p>`
  );
  tipos = tipos.join("");


  let pokeId = poke.id.toString();
  if (pokeId.length === 1) {
      pokeId = "00" + pokeId;
  } else if (pokeId.length === 2) {
      pokeId = "0" + pokeId;
  }


  const div = document.createElement("div");
  div.classList.add("col");
  div.innerHTML = `
  <div class="card" style="width: 18rem">
  <img
    src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <div class="container text-center">
      <div class="row">
        <p class="col">#${pokeId}</p>
        <p class="col">${poke.name}</p>
      </div>
      <div class="row">
        
        ${tipos}
        
      </div>
      <div class="row">
        <div class="col">
          <div class="col">Altura</div>
          <div class="col ">${poke.height}m</div>
        </div>
        <div class="col">
          <div class="col">Peso</div>
          <div class="col ">${poke.weight}kg</div>
        </div>
        <div class="col">
          <div class="col">Experience</div>
          <div class="col ">${poke.base_experience}</div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p>movimiento</p>
          <p>${poke.moves[0].move.name}</p>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
  listapokemon.append(div);
}


