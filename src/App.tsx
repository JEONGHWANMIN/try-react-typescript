import "./App.css";
import Text from "./components/polymorphic/Text";
function App() {
	return (
		<div className="App">
			<Text size="lg" as={"h1"}>
				Heading
			</Text>
			<Text size="md" as="p">
				Phragraph
			</Text>
			<Text size="sm" color="secondary">
				Label
			</Text>
		</div>
	);
}

export default App;
