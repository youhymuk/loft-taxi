import React from 'react';

import { LoginForm, RegistrationForm } from 'app/features';

type AuthPagePropsType = {
    isNewUser: boolean,
    redirectTo: (page: string) => void,
}

const AuthPage = ({isNewUser, redirectTo}: AuthPagePropsType): JSX.Element => {

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        console.log(e)
        redirectTo('map');
    }

    return isNewUser
        ? (
            <RegistrationForm handleSubmit={handleFormSubmit}/>
        )
        : (
            <LoginForm handleSubmit={handleFormSubmit}/>
        )
};

AuthPage.defaultProps = {
    isNewUser: false,
}

export default AuthPage;
