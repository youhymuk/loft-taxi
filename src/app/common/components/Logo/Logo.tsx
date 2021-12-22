import React from 'react';
import classNames from 'classnames';

import logoIcon from 'assets/images/logo-icon.svg';
import logoText from 'assets/images/logo-text.svg';

import css from 'app/common/components/Logo/Logo.module.css';

type PropsType = {
    className?: string,
    logoImgClassName?: string,
}

const Logo = ({logoImgClassName, className}: PropsType): JSX.Element => (
    <div className={classNames(css.logo, className)}>
        <img className={logoImgClassName} src={logoIcon} alt="Loft taxi logo icon" />
        <img src={logoText} alt="Loft taxi logo text" />
    </div>
);

Logo.defaultProps = {
    className: '',
}

export default Logo;
