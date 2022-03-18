type personProps = {
  name: {
    last: string;
    first: string;
  };
};
function Person(props: personProps) {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
}

export default Person;
