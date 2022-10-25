import React, { Component } from "react";
import PokemonList from "../pokemon/PokemonList";
import Searchbar from "./Searchbar";
/*const { useState, useEffect } = React;
const [notFound, setNotFound] = useState(false);  
const onSearch = async (pokemon) => {
  console.log("buscando")
 
}; */

export default class Dashboard extends Component {
  render() {
    return (
      <>
       
        <div className="text-center pt-4 ">
          <div className="row ">
            <div className="col">
              <h1 className="text-info">PokeApi-Challenge</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Listado de pokemones y sus principales caracteristicas</p>
            </div>
          </div>
        </div>
        <div className="">
          <Searchbar/>
        </div>
        <div className="row">
          <div className="col">
            <PokemonList />
          </div>
        </div>
      </>
    );
  }
}
