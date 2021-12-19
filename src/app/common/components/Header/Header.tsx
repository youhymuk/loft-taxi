import React from 'react';

import Logo from 'app/common/components/Logo/Logo';
import Button from "../Button/Button";

import css from 'app/common/components/Header/Header.module.css';

type HeaderPropsType = {
    redirectTo: (page: string) => void,
}

const Header = ({redirectTo}: HeaderPropsType): JSX.Element => {
    return (
        <header className={css.header}>
        <a>
            <Logo logoImgClassName={css.headerLogoImg}/>
        </a>
        <nav>
            <ul className={css.headerNavList}>
                <li className={css.headerNavListItem}>
                    <Button type="button" className={css.headerNavLink} onClick={() => redirectTo('map')}>Карта</Button>
                </li>
                <li className={css.headerNavListItem}>
                    <Button type="button" className={css.headerNavLink} onClick={() => redirectTo('profile')}>Профиль</Button>
                </li>
                <li className={css.headerNavListItem}>
                    <Button type="button" className={css.headerNavLink} onClick={() => redirectTo('login')}>Выйти</Button>
                </li>
            </ul>
        </nav>
        </header>
    )
};

export default Header;
