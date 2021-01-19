/* 
This file is a stand-in for a Hooks-based app.
*/

import {useEffect, useState} from 'react';


import NameBanner from './components/NameBanner'

function App({pokemonNum}) {
	// useState Hooks - acts like a state value and a setter for that value

	const [ language, changeLanguage] = useState('en');
		// creates variable language as "en"
		// assigns function called changeLanguage to overwrite language

	const [pokeNum, changePokeNum] = useState(pokemonNum);
	const [pokemonData, setPokemonData] = useState(false);
	const [speciesData, setSpeciesData] = useState(false);
	const [selectedVersion, setSelectedVersion] = useState(false);


	// useEffect Hook - acts like componentDidMount
	useEffect(()=> {
		if (!pokemonData){
			   fetchPokemonData()
		}
	});

	const fetchPokemonData = async () => {

		let response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokeNum}/`
		);
		let pokemonData = await response.json();
		let selectedVersion = await pokemonData.game_indices[0].version.name;
		let speciesUrl = await pokemonData.species.url;
		let speciesResult = await fetch(speciesUrl)
		let speciesData = await speciesResult.json()
		
		setPokemonData(pokemonData);
		setSelectedVersion(selectedVersion);
		setSpeciesData(speciesData)

	}
	let properHtml = speciesData? (<div className="main-area">


		{/* <button onClick={(e)=>{e.preventDefault();changeLanguage('dog-language')}}>CHANGE LANGUAGE FOR DOG</button> */}
		<NameBanner name={pokemonData.name} id={pokemonData.id}/>
	</div>):(<div></div>)

	return <div className="App">{properHtml}

	</div>;
}
export default App;
