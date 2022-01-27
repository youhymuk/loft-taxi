import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { routePaths } from 'app/routes';
import PrivateRoute from './PrivateRoute';

import MapPage from 'app/pages/MapPage';
import ProfilePage from 'app/pages/Profile/ProfilePage';
import ErrorPage from 'app/pages/ErrorPage';
import SignUpPage from 'app/pages/Auth/SignUpPage';
import SignInPage from 'app/pages/Auth/SignInPage';

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
            <Route path={routePaths.signInPage()} element={<SignInPage />} />
            <Route path={routePaths.registrationPage()} element={<SignUpPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
);

export default Router;
