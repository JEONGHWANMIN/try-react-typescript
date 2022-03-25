import "./App.css";
import { UserContextProvider } from "./components/context/UserContext";
import User from "./components/context/User";
import MutableRef from "./components/ref/MutableRef";
function App() {
	return (
		<div className="App">
			<MutableRef />
		</div>
	);
}

export default App;
