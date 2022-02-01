import React from 'react';
import { styled } from '@mui/material/styles';

import { Header } from 'app/common/components';
import Profile from 'app/features/payment/Profile';

const ProfilePage = ({ className }: any): JSX.Element => (
    <div className={className}>
        <Header />
        <Profile />
    </div>
);

export default styled(ProfilePage)`
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(28, 26, 25, 0.5), rgba(28, 26, 25, 0.5));
`;
