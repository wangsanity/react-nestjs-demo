import React from 'react';
import { colors } from '../colors';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  role?: 'primary' | 'secondary';
}

export const Button = ({ children, style, role, ...buttonProps }: ButtonProps) => {
  const sharedStyles: React.CSSProperties = {
    borderRadius: '4px',
    padding: '6px 8px',
    borderStyle: 'none'
  };

  const primaryButtonStyles: React.CSSProperties = {
    backgroundColor: colors.blue,
    color: colors.white
  };

  const secondaryButtonStyles: React.CSSProperties = {
    backgroundColor: colors.white,
    border: `solid 1px ${colors.blue}`,
    color: colors.black
  };

  const defaultStyle: React.CSSProperties =
    role === 'secondary' ? secondaryButtonStyles : primaryButtonStyles;

  return (
    <button style={{ ...sharedStyles, ...defaultStyle, ...style }} {...buttonProps}>
      {children}
    </button>
  );
};
