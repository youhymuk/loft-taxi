import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectAuthToken } from 'app/features/auth/store/authSelector';

import routePaths from './routePaths';

type PrivateRoutePropsType = {
    children: React.ReactNode;
};

const PrivateRoute = ({ children }: PrivateRoutePropsType): any => {
    const token = useSelector(selectAuthToken);

    return !!token ? children : <Navigate to={routePaths.signInPage()} />;
};

export default PrivateRoute;
