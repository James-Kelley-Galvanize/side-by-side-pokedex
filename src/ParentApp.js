import "./App.css"; // Use the existing App.css if building side-by side from scratch, or replace with your own if importing an existing app
import ClassApp from "./ClassAppSrc/App";
import HooksApp from "./HooksAppSrc/App";
const getRandomPokemonNumber = ()=> Math.round(Math.random()*250)+1

function ParentApp() {
	let pokemonNum= getRandomPokemonNumber()
	return (
		<div className="parent-app">
			<div className="parent-title-bar">
				<h1 className="parent-column parent-title-left">CLASS</h1>
				<h1 className="parent-column parent-title-right">HOOKS</h1>
			</div>
			<div className="parent-column parent-left-side">
				<ClassApp pokemonNum={pokemonNum}/>
			</div>
			<div className="parent-column parent-right-side">
				<HooksApp pokemonNum={pokemonNum}/>
			</div>
		</div>
	);
}

export default ParentApp;
