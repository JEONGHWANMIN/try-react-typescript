import React from 'react';

type HorizentialPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';

type ToastProps = {
  position: Exclude<
    `${HorizentialPosition}-${VerticalPosition}`,
    `center-center`
  >;
};
function Toast({ position }: ToastProps) {
  return <div>Toast</div>;
}

export default Toast;
