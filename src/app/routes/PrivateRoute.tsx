import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsAuthorized } from 'app/features/auth/store/authSelector';

import routePaths from './routePaths';

type PrivateRoutePropsType = {
    children: React.ReactNode;
};

const PrivateRoute = ({ children }: PrivateRoutePropsType): any => {
    const isAuthorized = useSelector(selectIsAuthorized);

    return isAuthorized ? children : <Navigate to={routePaths.loginPage()} />;
};

export default PrivateRoute;
