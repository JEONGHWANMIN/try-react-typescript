import React, { useState } from 'react';

function Input() {
  const [text, setText] = useState<any>();
  console.log(text);
  return (
    <div>
      <input
        type={'text'}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setText(e.target.value);
        }}
        value={text}
      />
    </div>
  );
}

export default Input;
