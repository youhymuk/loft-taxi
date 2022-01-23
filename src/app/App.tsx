import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
// @ts-ignore
import { theme } from 'loft-taxi-mui-theme';

import { Router } from 'app/routes';
const App: React.FC = (): JSX.Element => {
    return (
        <MuiThemeProvider theme={theme}>
            <div className="app">
                <Router />
            </div>
        </MuiThemeProvider>
    );
};

export default App;
