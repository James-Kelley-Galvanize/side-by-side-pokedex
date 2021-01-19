import "./App.css"; // Use the existing App.css if building side-by side from scratch, or replace with your own if importing an existing app
import ClassApp from "./ClassAppSrc/App";
import HooksApp from "./HooksAppSrc/App";

function ParentApp() {
	return (
		<div className="parent-app">
			<div className="parent-title-bar">
				<h1 className="parent-column parent-title-left">CLASS</h1>
				<h1 className="parent-column parent-title-right">HOOKS</h1>
			</div>
			<div className="parent-column parent-left-side">
				<ClassApp />
			</div>
			<div className="parent-column parent-right-side">
				<HooksApp />
			</div>
		</div>
	);
}

export default ParentApp;
