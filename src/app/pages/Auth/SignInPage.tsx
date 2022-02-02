import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import { selectAuthToken } from 'app/features/auth/store/authSelector';
import { routePaths } from 'app/routes';
import { SignInForm } from 'app/features/auth/components';
import Sidebar from 'app/features/auth/components/Sidebar';

const SignInPage = ({ className }: any) => {
    const token = useSelector(selectAuthToken);

    return !!token ? (
        <Navigate to={routePaths.mapPage()} />
    ) : (
        <div className={className}>
            <Sidebar />
            <SignInForm />
        </div>
    );
};

export default styled(SignInPage)`
    display: flex;
    height: 100%;
`;
