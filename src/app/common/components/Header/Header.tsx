import React from 'react';
import { useDispatch } from 'react-redux';

import { routePaths } from 'app/routes';
import { signOut } from 'app/features/auth/store/authActions';
import Logo from 'app/common/components/Logo/Logo';
import Button from '../Button/Button';

import css from 'app/common/components/Header/Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (): JSX.Element => {
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(signOut());
    };

    return (
        <header className={css.header}>
            <Button className={css.headerLogo} type="link" to={routePaths.mapPage()}>
                <Logo logoImgClassName={css.headerLogoImg} />
            </Button>
            <nav>
                <ul className={css.headerNavList}>
                    <li className={css.headerNavListItem}>
                        <NavLink className={css.headerNavLink} to={routePaths.mapPage()}>
                            Карта
                        </NavLink>
                    </li>
                    <li className={css.headerNavListItem}>
                        <NavLink className={css.headerNavLink} to={routePaths.profilePage()}>
                            Профиль
                        </NavLink>
                    </li>
                    <li className={css.headerNavListItem}>
                        <Button type="button" className={css.headerNavLink} onClick={handleLogOut}>
                            Выйти
                        </Button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
