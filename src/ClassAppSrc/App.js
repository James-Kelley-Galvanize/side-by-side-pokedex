import { Component } from "react";
import NameBanner from "./components/NameBanner";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: "en",
      pokemonNum: props.pokemonNum ? props.pokemonNum : 1,
      pokemonData: false,
      speciesData: false,
      selectedVersion: false,
    };

    this.changeSelectedVersion = this.changeSelectedVersion.bind(this);
  }

  async fetchPokemonData() {
    let { pokemonNum } = this.state;

    let response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonNum}/`
    );
    let pokemonData = await response.json();
    let selectedVersion = await pokemonData.game_indices[0].version.name;
    this.setState({ pokemonData, selectedVersion }, this.fetchSpeciesData);
  }

  async fetchSpeciesData() {
    let { species } = this.state.pokemonData;
    let response = await fetch(`${species.url}`);
    let speciesData = await response.json();
    this.setState({ speciesData });
  }

  componentDidMount() {
    this.fetchPokemonData();
  }

  changeSelectedVersion(newVersion) {
    this.setState({ selectedVersion: newVersion });
  }

  // RENDER
  render() {
    const { changeSelectedVersion } = this;
    const { name, id, sprites, stats, height, weight, game_indices, types } =
      this.state.pokemonData;

    const { flavor_text_entries, egg_groups } = this.state.speciesData;

    const { selectedVersion, language } = this.state;

    const mainBodyHtml = this.state.speciesData ? (
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
            changeSelectedVersion={changeSelectedVersion}
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
}

export default App;
