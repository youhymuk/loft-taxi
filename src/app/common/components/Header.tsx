import { styled } from '@mui/material';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Button from 'app/common/components/Button';
import Logo from 'app/common/components/Logo/Logo';
import { signOut } from 'app/features/auth/store/authActions';
import { routePaths } from 'app/routes';

const Header = ({ className }: any): JSX.Element => {
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(signOut());
        localStorage.clear();
    };

    return (
        <header className={className}>
            <Button className="header-logo" type="link" to={routePaths.mapPage()}>
                <Logo logoImgClassName="header-logo-img" />
            </Button>
            <nav>
                <ul className="header-nav-list">
                    <li className="header-nav-list-item">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'header-nav-link header-nav-link-active' : 'header-nav-link'
                            }
                            to={routePaths.mapPage()}>
                            Map
                        </NavLink>
                    </li>
                    <li className="header-nav-list-item">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'header-nav-link header-nav-link-active' : 'header-nav-link'
                            }
                            to={routePaths.profilePage()}>
                            Profile
                        </NavLink>
                    </li>
                    <li className="header-nav-list-item">
                        <Button className="header-nav-link" type="button" onClick={handleLogOut}>
                            Log out
                        </Button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default styled(Header)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 102px;
    padding: 20px 24px;
    background-color: #000;

    & .header-logo {
        padding: 0;
        background-color: transparent;
        &:hover {
            box-shadow: none;
        }
    }
    & .header-logo-img {
        width: 61px;
        height: 61px;
        margin-right: 16px;
    }
    & .header-nav-list {
        display: flex;
        align-items: center;
    }
    & .header-nav-list-item + .header-nav-list-item {
        margin-left: 16px;
    }
    & .header-nav-link {
        padding: 0;
        font-size: 20px;
        color: #fff;
        text-decoration: none;
        background-color: transparent;

        :hover {
            background-color: transparent;
            box-shadow: none;
        }
    }
    & .header-nav-link-active {
        color: #fdbf5a;
    }
`;
