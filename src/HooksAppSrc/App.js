/* 
This file is a stand-in for a Hooks-based app.
*/

import { useEffect, useState } from "react";

import NameBanner from "./components/NameBanner";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";

function App({ pokemonNum }) {
  // useState Hooks - acts like a state value and a setter for that value

  const [language, setLanguage] = useState("en");
  // creates variable language as "en"
  // assigns function called changeLanguage to overwrite language

  const [pokeNum, setPokeNum] = useState(pokemonNum);
  const [pokemonData, setPokemonData] = useState(false);
  const [speciesData, setSpeciesData] = useState(false);
  const [selectedVersion, setSelectedVersion] = useState(false);

  // useEffect Hook - acts like componentDidMount
  useEffect(() => {
    if (!pokemonData) {
      fetchPokemonData();
    }
  });

  const fetchPokemonData = async () => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}/`);
    let pokemonData = await response.json();
    let selectedVersion = await pokemonData.game_indices[0].version.name;
    let speciesUrl = await pokemonData.species.url;
    let speciesResult = await fetch(speciesUrl);
    let speciesData = await speciesResult.json();

    setPokemonData(pokemonData);
    setSelectedVersion(selectedVersion);
    setSpeciesData(speciesData);
  };

  const { name, id, sprites, stats, height, weight, game_indices, types } =
    pokemonData;

  const { flavor_text_entries, egg_groups } = speciesData;

  const mainBodyHtml = speciesData ? (
    <div className="main-area">
      <NameBanner name={name} id={id} />

      <div className="pokedex-main">
        <LeftColumn sprites={sprites} stats={stats} />
        <RightColumn
          height={height}
          weight={weight}
          game_indices={game_indices}
          selectedVersion={selectedVersion}
          flavor_text_entries={flavor_text_entries}
          changeSelectedVersion={setSelectedVersion}
          language={language}
          egg_groups={egg_groups}
          types={types}
        />
      </div>
    </div>
  ) : (
    <div className="main-area"></div>
  );

  return <div className="App">{mainBodyHtml}</div>;
}
export default App;
