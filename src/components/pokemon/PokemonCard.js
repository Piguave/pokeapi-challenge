import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import spinner from "./spinner.gif";
import axios from "axios";
const Sprite = styled.img`
  width: 5em;
  height: 5em;
  display: none;
`;
const TYPE_COLORS = {
  bug: "B1C12E",
  dark: "4F3A2D",
  dragon: "755EDF",
  electric: "FCBC17",
  fairy: "F4B1F4",
  fighting: "823551D",
  fire: "E73B0C",
  flying: "A3B3F7",
  ghost: "6060B2",
  grass: "74C236",
  ground: "D3B357",
  ice: "A3E7FD",
  normal: "C8C4BC",
  poison: "934594",
  psychic: "ED4882",
  rock: "B9A156",
  steel: "B5B5C3",
  water: "3295F6",
};
const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  -moz-user-select: none;
  -website-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default class PokemonCard extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
    type: "",
    types: [],
    imageLoading: true,
    tooManyRequests: false,
  };

  async componentDidMount() {
    const { name, url, type } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
    const types = type.map((type) => type.type.name);
    this.setState({ name, imageUrl, pokemonIndex, type, types });
    console.log(types);
  }

  render() {
    return (
      <div className="col-1-5 mb-5">
        <Card className="card pb-2  text-center">
          <h6 className="card-header borde bg-info ">
            {this.state.name
              .toLowerCase()
              .split(" ")
              .map(
                (letter) => letter.charAt(0).toUpperCase() + letter.substring(1)
              )
              .join(" ")}
          </h6>
          {this.state.imageLoading ? (
            <img
              src={spinner}
              style={{ width: "5em", height: "5em" }}
              className="card-img-top rounded mx-auto d-block mt-2"
              alt="spinner"
            />
          ) : null}
          <Sprite
            className="card-img-top rounded mx-auto mt-2"
            src={this.state.imageUrl}
            onLoad={() => this.setState({ imageLoading: false })}
            onError={() => this.setState({ tooManyRequests: true })}
            style={
              this.state.tooManyRequests
                ? { display: "none" }
                : this.state.imageLoading
                ? null
                : { display: "block" }
            }
          />
          {this.state.tooManyRequests ? (
            <h6 className="mx-auto">
              <span className="badge badge-danger mt-2">Too Many Requests</span>{" "}
            </h6>
          ) : null}
          <div className="float-right">
            {this.state.types.map((type) => (
              <span
                key={type}
                className="badge badge-pill mr-1"
                style={{
                  backgroundColor: `#${TYPE_COLORS[type]}`,
                  color: "white",
                }}
              >
                {type
                  .toLowerCase()
                  .split(" ")
                  .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(" ")}
              </span>
            ))}
          </div>
          <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
            <div className=" pt-2">
              <button className="btn btn-outline-info"> Más Información</button>
            </div>
          </StyledLink>
          
        </Card>
      </div>
    );
  }
}
//<h1>{this.state.type}</h1>
