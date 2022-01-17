import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { routePaths } from 'app/routes';
import PrivateRoute from './PrivateRoute';

import MapPage from 'app/pages/MapPage';
import ProfilePage from 'app/pages/ProfilePage';
import AuthPage from 'app/pages/AuthPage';
import ErrorPage from 'app/pages/ErrorPage';

const Router: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route
                path={routePaths.mapPage()}
                element={
                    <PrivateRoute>
                        <MapPage />
                    </PrivateRoute>
                }
            />
            <Route
                path={routePaths.profilePage()}
                element={
                    <PrivateRoute>
                        <ProfilePage />
                    </PrivateRoute>
                }
            />
            <Route path={routePaths.loginPage()} element={<AuthPage />} />
            <Route path={routePaths.registrationPage()} element={<AuthPage registration />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
);

export default Router;
