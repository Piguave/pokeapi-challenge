import React, { Component, Fragment } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";


export default class PokemonList extends Component {
  // Usando limit puedo limitar la cantidad a mostrar por página,
  // mientras que usando offset puedo especificar cuantos lugares se saltan
  state = {
    pokemones: null,
  };

  async componentDidMount() {
   

    const resTipos = await axios.get("https://pokeapi.co/api/v2/type");
    const tipos = await resTipos;
    const traemosPokemones = async (porPokemon) => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${porPokemon}?limit=101&offset=0/`
      );
      const data = await response.data;
      return data;
    };
    let pokemones = [];
    for (let i = 1; i <= 10; i++) {
      let data = await traemosPokemones(i);
      pokemones.push(data);
    }
    this.setState({ pokemones: pokemones });
    let minimimosDatos = pokemones.map((pokemon) => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        sprites: pokemon.sprites.other.dream_world.front_default,
        types: pokemon.types,
      };
    });
    return {
      props: {
        tipos: tipos.results,
        minimimosDatos,
      },
    };
  
  }

  render() {
    return (
      <Fragment>
      <>
      <div>
        {this.state.pokemones ? (
          <div className="row mt-4">
            {this.state.pokemones.map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.location_area_encounters }
                type={pokemon.types}
              />
            ))}
          </div>
        ) : (
          <h1>Loading Pokemon</h1>
        )}
        </div>
        </>
        
      </Fragment>
      
    );
  }
}
