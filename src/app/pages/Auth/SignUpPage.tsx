import React from 'react';
import { useSelector } from 'react-redux';

import { SignUpForm } from 'app/features/auth/components';
import { selectAuthToken } from 'app/features/auth/store/authSelector';
import { Navigate } from 'react-router-dom';
import routePaths from 'app/routes/routePaths';
import Sidebar from 'app/features/auth/components/Sidebar';
import { styled } from '@mui/material';

const SignUpPage = ({ className }: any): JSX.Element => {
    const token = useSelector(selectAuthToken);

    return !!token ? (
        <Navigate to={routePaths.mapPage()} />
    ) : (
        <div className={className}>
            <Sidebar />
            <SignUpForm />
        </div>
    );
};

export default styled(SignUpPage)`
    display: flex;
    height: 100%;
`;
