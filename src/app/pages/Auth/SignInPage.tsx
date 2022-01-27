import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectAuthToken } from 'app/features/auth/store/authSelector';
import { routePaths } from 'app/routes';
import { SignInForm } from 'app/features/auth/components';

const SignInPage = () => {
    const token = useSelector(selectAuthToken);

    return !!token ? <Navigate to={routePaths.mapPage()} /> : <SignInForm />;
};

export default SignInPage;
