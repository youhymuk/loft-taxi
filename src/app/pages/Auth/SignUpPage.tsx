import React from 'react';
import { useSelector } from 'react-redux';

import { SignUpForm } from 'app/features/auth/components';
import { selectAuthToken } from 'app/features/auth/store/authSelector';
import { Navigate } from 'react-router-dom';
import routePaths from 'app/routes/routePaths';

const SignUpPage = (): JSX.Element => {
    const token = useSelector(selectAuthToken);

    return !!token ? <Navigate to={routePaths.mapPage()} /> : <SignUpForm />;
};

export default SignUpPage;
