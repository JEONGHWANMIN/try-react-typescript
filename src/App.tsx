import "./App.css";
import { Counter } from "./components/class/Counter";
import List from "./components/generics/List";
import RandomNumber from "./components/restriction/RandomNumber";
function App() {
	return (
		<div className="App">
			<RandomNumber value={10} isPositive />
		</div>
	);
}

export default App;
