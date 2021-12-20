import React from 'react';
import classNames from 'classnames';

import css from 'app/common/components/Button/Button.module.css'

type ButtonPropsType = {
    type?: string,
    className?: string,
    children?: React.ReactNode,
    disabled?: boolean,
    to?: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onSubmit?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}

const Button = ({
                    type,
                    children,
                    className,
                    onClick,
                    onSubmit,
                    ...restProps
}: ButtonPropsType): JSX.Element => {

    const buttonClassNames = classNames(className, css.button);

    switch (type) {
        case 'button':
            return (
                <button
                    className={buttonClassNames}
                    type='button'
                    onClick={onClick}
                    {...restProps}
                >
                    {children}
                </button>
            )
        case 'link':
            return (
                <a
                    className={buttonClassNames}
                >
                    {children}
                </a>
            )
        default:
            return (
                <button
                    className={buttonClassNames}
                    type='submit'
                    onClick={onSubmit}
                    {...restProps}
                >
                    {children}
                </button>
            )
    }
}

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
