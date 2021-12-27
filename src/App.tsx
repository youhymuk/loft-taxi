import React, { useContext, useState } from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
// @ts-ignore
import { theme } from 'loft-taxi-mui-theme';

import { AuthContext } from 'app/features/auth';
import Header from 'app/common/components/Header/Header';
import MapPage from './app/pages/MapPage';
import AuthPage from './app/pages/AuthPage';
import ProfilePage from './app/pages/ProfilePage';

const App: React.FC = (): JSX.Element => {
    const [currentPage, setCurrentPage] = useState('login');

    const { isLoggedIn, logOut } = useContext(AuthContext);

    const redirectTo = (page: string): void => {
        setCurrentPage(page);
    };

    const renderPage = (): JSX.Element => {
        switch (currentPage) {
            case 'map':
                return isLoggedIn ? (
                    <>
                        <Header redirectTo={redirectTo} logOut={logOut} />
                        <MapPage />
                    </>
                ) : (
                    <AuthPage redirectTo={redirectTo} />
                );
            case 'profile':
                return isLoggedIn ? (
                    <>
                        <Header redirectTo={redirectTo} logOut={logOut} />
                        <ProfilePage />
                    </>
                ) : (
                    <AuthPage redirectTo={redirectTo} />
                );

            default:
                return <AuthPage redirectTo={redirectTo} />;
        }
    };

    return (
        <MuiThemeProvider theme={theme}>
            <div className="app">{renderPage()}</div>
        </MuiThemeProvider>
    );
};

export default App;
