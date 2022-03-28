const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput =pokeName.value.toLowerCase();
   const url =`https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => { 
    if (res.status != "200") {
        console.log(res);
        pokeImage("./picry.gif");
        }
    else{
        return res.json();
        }
    }).then((data) =>{
        console.log(data);

        
        
        let pokeImg = data.sprites.front_default;
        pokeImage(pokeImg);

        let pokeN = data.name;
        pokeNombre(pokeN);
        
        let pokeIdenti =data.id;
        pokeId(pokeIdenti);

        let pokeAlt = data.height;
        pokeSize(pokeAlt);

        let pokePes = data.weight;
        console.log(pokeTam);
        pokeTam(pokePes);

        let pokeVida = data.stats[0].base_stat;
        pokeHp(pokeVida);
        
        let pokeAtk = data.stats[1].base_stat;
            pokeAttack(pokeAtk);

        let pokeDefense = data.stats[2].base_stat;
            pokeDef(pokeDefense);

        let PokeSped = data.stats[5].base_stat;
            pokeSpeed(PokeSped);

        /*let pokeMov =data.moves[1-2-3-4-5].move.name;
            console.log(pokeMoves);
            pokeMoves(pokeMov)*/

   })
}





    const pokeImage = (url) =>{
    const pokeImage = document.getElementById("pokeImg");
    pokeImage.src = url;
    }

    const pokeNombre = (name) => {
    const pokeNombre = document.getElementById("pokeNombre");
    pokeNombre.value = name;
     };

  const pokeId = (id) => {
    const pokeId = document.getElementById("pokeId");
    pokeId.innerHTML =  " No"+ ""+ id ;
    id.innerHTML = "poke Id";
    };

    const pokeSize = (id) => {
    const pokeSize = document.getElementById("pokeAlt");
    pokeSize.innerHTML =id * 10 + " cm" ;
    id.innerHTML = "poke Alt";
    };
  
    const pokeTam = (peso) => {
    const pokeTam = document.getElementById("pokePes");
    pokeTam.innerHTML = peso + " Kgs";
    peso.innerHTML = "Poke Pes";
    };

    const pokeHp = (vida) => {
    const pokeHp = document.getElementById("pokeVida");
    pokeHp.innerHTML = vida;
    vida.innerHTML = "poke Vida";
    };

  const pokeAttack = (ataque) => {
    const pokeAttack = document.getElementById("pokeAtk");
    pokeAttack.innerHTML = ataque;
    ataque.innerHTML = "poke Attack";
  };

  const pokeDef = (defensa) => {
    const pokeDef = document.getElementById("pokeDef");
    pokeDef.innerHTML = defensa;
    defensa.innerHTML = "poke Defense";
  };

  const pokeSpeed = (Velocidad) => {
    const pokeSpeed = document.getElementById("pokeVel");
    pokeSpeed.innerHTML = Velocidad +"km";
    Velocidad.innerHTML = "poke Velocidad";
  };

  /*const pokeMoves = (Movimiento) => {
    const pokeMoves = document.getElementById("pokeMov");
    pokeMoves.innerHTML = Movimiento;
    Movimiento.innerHTML = "poke Movimientos";
  };*/