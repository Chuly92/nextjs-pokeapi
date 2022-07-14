import { ParsedUrlQuery } from "querystring";
import pokeApi from "../api/pokeApi";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async ( nameOrID: string) => {
  
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrID}`);

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};



