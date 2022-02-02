import React from 'react';
import { Link } from 'react-router-dom';
import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

type ButtonPropsType = {
    type?: string;
    className?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    to?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onSubmit?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
};

const Button = ({
    type,
    className,
    children,
    onClick,
    onSubmit,
    to = '',
    ...restProps
}: ButtonPropsType): JSX.Element => {
    switch (type) {
        case 'button':
            return (
                <MuiButton className={className} type="button" onClick={onClick} {...restProps}>
                    {children}
                </MuiButton>
            );
        case 'link':
            return (
                <Link className={className} to={to}>
                    {children}
                </Link>
            );
        default:
            return (
                <MuiButton className={className} type="submit" onClick={onSubmit} {...restProps}>
                    {children}
                </MuiButton>
            );
    }
};

Button.defaultProps = {
    children: null,
    type: 'button',
    className: '',
    disabled: false,
    onClick: () => {},
    onSubmit: () => {},
};

export default styled(Button)`
    padding: 16px;
    color: #000;
    font-size: 24px;
    line-height: 1;
    border-radius: 70px;
    text-align: center;
    text-transform: none;
    text-decoration: none;
    cursor: pointer;
    overflow: visible;
    background-color: #fdbf5a;
    transition: all 0.15s ease-in;

    :hover,
    :focus {
        background-color: rgba(253, 191, 90, 0.9);
        box-shadow: rgba(253, 191, 90, 0.19) 0px 10px 20px, rgba(253, 191, 90, 0.23) 0px 6px 6px;
    }
    &:active {
        box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    }
    :disabled {
        color: #737373;
        background-color: #d8d7d5;
    }
`;
