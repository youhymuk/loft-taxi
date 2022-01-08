import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { LoginForm, RegistrationForm } from 'app/features/auth/components';
import { selectIsAuthorized } from 'app/features/auth/store/authSelector';
import { routePaths } from 'app/routes';

type AuthPagePropsType = { registration?: boolean };

const AuthPage = ({ registration = false }: AuthPagePropsType) => {
    const isAuthorized = useSelector(selectIsAuthorized);
    return isAuthorized ? <Navigate to={routePaths.mapPage()} /> : registration ? <RegistrationForm /> : <LoginForm />;
};

export default AuthPage;
