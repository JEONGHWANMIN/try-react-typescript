import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
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
      <Status status='loading' />
      <Oscar>
        <Heading>Hi There ~~ !! </Heading>
      </Oscar>
    </div>
  );
}

export default App;
