import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import css from 'app/common/components/Button/Button.module.css';

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
    children,
    className,
    onClick,
    onSubmit,
    to = '',
    ...restProps
}: ButtonPropsType): JSX.Element => {
    const buttonClassNames = classNames(className, css.button);

    switch (type) {
        case 'button':
            return (
                <button className={buttonClassNames} type="button" onClick={onClick} {...restProps}>
                    {children}
                </button>
            );
        case 'link':
            return (
                <Link to={to} className={buttonClassNames}>
                    {children}
                </Link>
            );
        default:
            return (
                <button className={buttonClassNames} type="submit" onClick={onSubmit} {...restProps}>
                    {children}
                </button>
            );
    }
};

Button.defaultProps = {
    children: null,
    type: 'button',
    to: '',
    className: '',
    disabled: false,
    onClick: () => {},
    onSubmit: () => {},
};

export default Button;
