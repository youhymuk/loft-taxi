import React, {useState} from 'react';

import Header from 'app/common/components/Header/Header';
import MapPage from "./app/pages/MapPage";
import AuthPage from "./app/pages/AuthPage";
import ProfilePage from "./app/pages/ProfilePage";

const App = (): JSX.Element => {

    const [currentPage, setCurrentPage] = useState('login');

    const redirectTo = (page: string): void => {
        setCurrentPage(page)
    }

    const renderPage = (): JSX.Element => {
        switch (currentPage) {
            case 'map':
                return <MapPage/>
            case 'profile':
                return <ProfilePage/>
            default:
                return <AuthPage redirectTo={redirectTo}/>
        }
    }

    return (
        <div className="app">
            <Header redirectTo={redirectTo}/>
            {renderPage()}
        </div>
    )
};

export default App;
