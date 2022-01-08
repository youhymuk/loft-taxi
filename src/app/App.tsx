import React from 'react';
import { useSelector } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
// @ts-ignore
import { theme } from 'loft-taxi-mui-theme';

import { Router } from 'app/routes';
import { selectIsLoading } from 'app/features/auth/store/authSelector';
import Loader from 'app/common/components/Loader/Loader';

const App: React.FC = (): JSX.Element => {
    const isLoading = useSelector(selectIsLoading);
    return (
        <MuiThemeProvider theme={theme}>
            <div className="app">
                {isLoading && <Loader />}
                <Router />
            </div>
        </MuiThemeProvider>
    );
};

export default App;
