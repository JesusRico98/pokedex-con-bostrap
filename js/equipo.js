
/*variables de los objetos del html*/
const btneliminarp = document.getElementById("btneliminar");
const btnguardar = document.getElementById("btnguardar");
const btnhistorial = document.getElementById("btnhistorial");
const listapokemon = document.getElementById("listapokemon");
const contenedor_todo = document.getElementById("contenedor_todo");
const listapc= document.getElementById("listapc");
let url = "https://pokeapi.co/api/v2/pokemon/";
let equipo = [];
let pc = [];
btnhistorial.disabled = true;
btneliminarp.disabled = true;

/*funciones de los botones*/

btnguardar.addEventListener("click", function () {
    
  if (equipo.length < 7) {
    listapokemon.innerHTML=``;  
    guardar();
    
  }
  if (equipo.length == 6) {
    
    mostrar();

    

    
    btnguardar.disabled = true;
    btnhistorial.disabled = false;
    btneliminarp.disabled = false;


  }
  
});

btneliminarp.addEventListener("click", function () {
  
  deleteteam()
  btneliminarp.disabled = true;
});

btnhistorial.addEventListener('click',function(){
    
  listapokemon.innerHTML=``;  
    
  mostrarenpc();
  btneliminarp.disabled = false;
 
      btnguardar.disabled = false;
      

})

/*funciones*/




function deleteteam(){
   listapokemon.innerHTML=``;
   
   btnguardar.disabled = false;
   
      
    
}

function guardar() {
  let pokename = document.getElementById("inputpokename").value;
  equipo=equipo.concat(pokename);

}


/*funciones para el guardado*/

async function mostrar() {
  for (let i = 0; i < equipo.length; i++) {
    const busqueda = `${url}${equipo[i]}`;
    try {
      const response = await fetch(busqueda);

      const data = await response.json();
      mostrarPokemon(data);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  }
   pc= pc.concat(equipo);
  equipo = [];

     
  
  
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
  </div>
  
    `;
    listapokemon.append(div);
}

/*funciones para el historial*/
async function mostrarenpc() {
    for (let i = 0; i < pc.length; i++) {
      const busquedapc = `${url}${pc[i]}`;
      try {
        const response = await fetch(busquedapc);
  
        const data = await response.json();
        mostrarPokemon(data);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    }
   
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
   
   
  
      <div class="card" style="width: 18rem " >
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
    </div>
    
      `;
      listapokemon.append(div);
  }