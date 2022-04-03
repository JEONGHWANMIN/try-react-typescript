import './App.css';
import { Counter } from './components/class/Counter';
import List from './components/generics/List';
function App() {
  return (
    <div className='App'>
      <List
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
