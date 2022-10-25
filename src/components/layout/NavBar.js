import React, { Component } from "react";

let imgUrl =
  "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
export default class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg   bg-dark fixed-top ">
        <a className="text-white" href="./"> <h5>INICIO</h5></a>
          <div className="mx-auto d-block">
            <img src={imgUrl} alt="pokeapi-logo" className="navbar-image " style={{width:"50%"}} />
          </div>
        </nav>
      </>
    );
  }
}
