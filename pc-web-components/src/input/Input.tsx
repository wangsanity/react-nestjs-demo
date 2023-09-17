import React from 'react';

export type InputProps = React.HTMLAttributes<HTMLInputElement>;

// eslint-disable-next-line
export const Input = ({ style, ...inputProps }: InputProps) => {
  const defaultStyle: React.CSSProperties = {
    borderRadius: '4px',
    padding: '6px 8px',
    border: 'solid 1px #ddd'
  };

  return <input style={{ ...defaultStyle, ...style }} {...inputProps} />;
};
