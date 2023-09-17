import React from 'react';
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    role?: 'primary' | 'secondary';
}
export declare const Button: ({ children, style, role, ...buttonProps }: ButtonProps) => JSX.Element;
