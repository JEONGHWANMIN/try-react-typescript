import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
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
      <Button
        handleClick={(event, id) => {
          console.log('Button Clicked', event, id);
        }}
      />
      <Input />
      <Container
        styles={{ border: 'solid 1px red', padding: '1rem', display: 'flex' }}
      />
    </div>
  );
}

export default App;
