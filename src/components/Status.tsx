type StatusProps = {
  status: 'loading' | 'success' | 'error';
};
function Status(props: StatusProps) {
  let messeage;
  if (props.status === 'loading') {
    messeage = 'loading';
  } else if (props.status === 'success') {
    messeage = 'success';
  } else if (props.status === 'error') {
    messeage = 'error';
  }
  return (
    <div>
      <h2>Status - {messeage}</h2>
    </div>
  );
}

export default Status;
