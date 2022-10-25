import Axios from "axios";
import React from "react";

const { useState } = React;

const Searchbar = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  
  const onClick = async (e) => {
    console.log(search);
    searchPokemon(setSearch);
  };

  const searchPokemon = async (pokemon) => {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      console.log(url);
      const response = await Axios(url);
      const data = await response;
      console.log(data);
      //return data;
    } catch (err) { }
  };

  return (
    <div className="container-fluid h-100 pt-1">
      <div className="row">
        <div className="col btn ">
          <input placeholder="Buscar pokemon..." onChange={onChange} />
          <button onClick={onClick}>Buscar</button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
