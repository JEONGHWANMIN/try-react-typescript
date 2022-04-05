import './App.css';
import { Counter } from './components/class/Counter';
import List from './components/generics/List';
import RandomNumber from './components/restriction/RandomNumber';
import Toast from './components/templateliterles/Toast';
function App() {
  return (
    <div className='App'>
      <Toast position={'right-bottom'} />
    </div>
  );
}

export default App;
