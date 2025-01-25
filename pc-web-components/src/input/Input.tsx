import React from 'react';

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  hint?: string;
}

// eslint-disable-next-line
export const Input = ({ style, placeholder, hint, ...inputProps }: InputProps) => {
  const defaultStyle: React.CSSProperties = {
    borderRadius: '4px',
    padding: '10px 12px',
    minWidth: '200px',
    border: 'solid 1px #ddd'
  };

  return (
    <div style={{ textAlign: 'left', width: 'auto', display: 'inline-block' }}>
      <input placeholder={placeholder} style={{ ...defaultStyle, ...style }} {...inputProps} />
      {hint && <div style={{ color: 'gray', marginTop: '2px', padding: '0 2px' }}>{hint}</div>}
    </div>
  );
};
