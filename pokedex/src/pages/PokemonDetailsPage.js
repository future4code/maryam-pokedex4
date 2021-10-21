import React, { useEffect, useState } from "react";
import {
  ElementContainer,
  FirstContainer,
  SecondContainer,
  ThirdContainer,
  MoveContainerStyle,
} from "./PokemonDetailsPageStyle";
import Header from "../components/Header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";

const PokemonDetailsPage = () => {
  const [pokemonDetails, setPokemonDetails] = useState();

  const pathParams = useParams();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pathParams.id}`;

    axios
      .get(url)
      .then((pokemon) => {
        setPokemonDetails(pokemon.data);
        console.log(pokemon.data, "retorno do get");
        console.log(pokemonDetails, "pokemon details");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(pokemonDetails, "detalhes dos pokes");

  function captalizeFirstLetter(element){
    const captalizedWord = element.charAt(0).toUpperCase() + element.slice(1);
    return (captalizedWord)
  }

  function renderPokemonInitialMoveSet() {
    const initialMoveSet = pokemonDetails.moves.map((move) => {
      if (move.version_group_details[0].level_learned_at >= 1) {
        console.log(move.move.name);
        return (
          <div>
            <p>{move.version_group_details[0].level_learned_at}</p>
            <p>{captalizeFirstLetter(move.move.name)}</p>
          </div>
        );
      } else {
        return false;
      }
    });
    const newArray = initialMoveSet.filter((element) => {
      if (element) {
        return element;
      }
    });

    console.log(newArray, "esse array");
    return newArray.slice(0, 5);
  }

  // const { id } = useParams()
  return (
    <div>
      {pokemonDetails ? (
        <>
          <Header page="pokemonDetails" pokemonDetails={pokemonDetails} />

          <ElementContainer>
            <div>
              <FirstContainer>
                <img
                  src={
                    pokemonDetails.sprites.versions["generation-v"][
                      "black-white"
                    ].animated.front_default
                  }
                  alt="Pokemon"
                />
                <img
                  src={
                    pokemonDetails.sprites.versions["generation-v"][
                      "black-white"
                    ].animated.back_default
                  }
                  alt="Pokemon"
                />
              </FirstContainer>

              <SecondContainer>
                <h3>Stats</h3>
                <div>
                  <p>HP: </p>
                  <p>{pokemonDetails.stats[0].base_stat}</p>
                </div>
                <div>
                  <p>attack: </p>
                  <p>{pokemonDetails.stats[1].base_stat}</p>
                </div>
                <div>
                  <p>defense: </p>
                  <p>{pokemonDetails.stats[2].base_stat}</p>
                </div>
                <div>
                  <p>special-attack: </p>
                  <p>{pokemonDetails.stats[3].base_stat}</p>
                </div>
                <div>
                  <p>special-defense: </p>
                  <p>{pokemonDetails.stats[4].base_stat}</p>
                </div>
                <div>
                  <p>speed: </p>
                  <p>{pokemonDetails.stats[5].base_stat}</p>
                </div>
              </SecondContainer>

              <ThirdContainer>
                <div>
                  {pokemonDetails.types.map((type) => {
                    return (
                      <p>
                        <strong>{type.type.name}</strong>
                      </p>
                    );
                  })}
                </div>
                <MoveContainerStyle>
                  <div>
                    <h5>Level</h5>
                    <h5>Moves</h5>
                  </div>
                  {renderPokemonInitialMoveSet()}
                </MoveContainerStyle>
              </ThirdContainer>
            </div>
          </ElementContainer>
        </>
      ) : (
        <>
          <Header />
          <ElementContainer>
            <h1>Loading...</h1>
          </ElementContainer>
        </>
      )}
    </div>
  );
};

export default PokemonDetailsPage;
