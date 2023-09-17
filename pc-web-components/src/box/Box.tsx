import React from 'react';

export type BoxProps = React.HTMLAttributes<HTMLDivElement>;

// eslint-disable-next-line
export const Box = ({ children, style, ...boxProps }: BoxProps) => {
  const defaultStyle: React.CSSProperties = {
    margin: 'auto'
  };

  return (
    <div style={{ ...defaultStyle, ...style }} {...boxProps}>
      {children}
    </div>
  );
};
