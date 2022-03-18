type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  return (
    <div>
      <h1>
        {props.isLoggedIn
          ? `Hello ${props.name} TypeScript ${props.messageCount} !!`
          : `Hello Guest`}
      </h1>
    </div>
  );
}

export default Greet;
