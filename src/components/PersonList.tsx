import { Name } from './Person.type';

type personListType = {
  name: Name[];
};
function PersonList(props: personListType) {
  return (
    <div>
      {props.name.map((user, index) => (
        <li key={index}>{user.first}</li>
      ))}
    </div>
  );
}

export default PersonList;
