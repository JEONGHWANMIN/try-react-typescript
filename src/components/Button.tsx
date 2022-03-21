import React from 'react';

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

function Button(props: ButtonProps) {
  return (
    <div>
      <button
        onClick={(event) => {
          props.handleClick(event, 1);
        }}
      >
        Button
      </button>
    </div>
  );
}

export default Button;