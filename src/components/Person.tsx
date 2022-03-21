import { personProps } from './Person.type';

function Person({ name }: personProps) {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
}

export default Person;
