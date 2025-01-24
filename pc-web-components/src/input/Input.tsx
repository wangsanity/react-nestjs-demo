import React from 'react';

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

// eslint-disable-next-line
export const Input = ({ style, placeholder, ...inputProps }: InputProps) => {
  const defaultStyle: React.CSSProperties = {
    borderRadius: '4px',
    padding: '6px 10px',
    border: 'solid 1px #ddd'
  };

  return <input placeholder={placeholder} style={{ ...defaultStyle, ...style }} {...inputProps} />;
};
