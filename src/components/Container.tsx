import React, { CSSProperties } from 'react';

type ContainerProps = {
  styles: CSSProperties;
};

function Container(props: ContainerProps) {
  return <div style={props.styles}></div>;
}

export default Container;
