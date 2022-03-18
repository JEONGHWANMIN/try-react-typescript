type personListType = {
  name: { first: string; last: string }[];
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
