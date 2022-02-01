import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';

import { Router } from 'app/routes';
import { loadFromLocalStorage } from 'app/common/utils';
import { setAuthToken } from 'app/features/auth/store/authActions';

import map from 'app/assets/images/map.png';

const App = ({ className }: any): JSX.Element => {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = loadFromLocalStorage();
        if (token) dispatch(setAuthToken(token));
    }, []);

    return (
        <div className={`${className} app`}>
            <Router />
        </div>
    );
};

export default styled(App)`
    background: transparent url(${map});
    background-size: cover;
`;
