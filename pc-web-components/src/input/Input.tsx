import React from 'react';

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  showError?: boolean;
  errorTooltip?: string;
}

// eslint-disable-next-line
export const Input = ({ style, ...inputProps }: InputProps) => {
  const defaultStyle: React.CSSProperties = {
    borderRadius: '4px',
    padding: '10px 12px',
    minWidth: '200px',
    border: 'solid 1px #ddd'
  };

  return <input style={{ ...defaultStyle, ...style }} {...inputProps} />;
};
