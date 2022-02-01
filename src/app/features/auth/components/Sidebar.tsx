import React from 'react';
import { styled } from '@mui/material/styles';

import { Logo } from 'app/common/components';

const Sidebar = ({ className }: any) => {
    return (
        <aside className={className}>
            <Logo className="sidebar-logo" logoImgClassName="sidebar-logo-img" />
        </aside>
    );
};

export default styled(Sidebar)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34vw;
    min-width: 280px;
    height: 100%;
    background-color: #1c1a19;
    & .sidebar-logo {
        flex-direction: column;
    }
    & .sidebar-logo-img {
        width: 136px;
        height: 136px;
        margin-bottom: 22px;
    }
`;
