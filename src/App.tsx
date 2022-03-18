import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
function App() {
  const personName = {
    first: 'HwanMin',
    last: 'Jeong',
  };
  const personList = [
    {
      first: 'HwanMin',
      last: 'Jeong',
    },
    {
      first: 'HwanMin1',
      last: 'Jeong1',
    },
    {
      first: 'HwanMin2',
      last: 'Jeong2',
    },
  ];
  return (
    <div className='App'>
      <Greet name={'HwanMin'} messageCount={5} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList name={personList} />
    </div>
  );
}

export default App;
