import React from 'react';
export interface ButtonProps {
    children: string;
    styles?: React.CSSProperties;
    role?: 'primary' | 'secondary';
    buttonProps?: React.HTMLAttributes<HTMLButtonElement>;
}
export declare const Button: ({ children, styles, buttonProps, role }: ButtonProps) => JSX.Element;
