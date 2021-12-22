import React, { useContext, useState } from 'react';

import { LoginForm, RegistrationForm, AuthContext } from 'app/features';

type AuthPagePropsType = {
    redirectTo: (page: string) => void;
};

const AuthPage = ({ redirectTo }: AuthPagePropsType): JSX.Element => {
    const [isNewUser, setIsNewUser] = useState(false);

    const { logIn, isLoggedIn } = useContext(AuthContext);

    const handleLoginFormSubmit = (email: string, password: string): void => {
        logIn(email, password);
        isLoggedIn && redirectTo('map');
    };
    const handleRegistrationFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        redirectTo('map');
    };

    return isNewUser ? (
        <RegistrationForm handleSubmit={handleRegistrationFormSubmit} />
    ) : (
        <LoginForm handleSubmit={handleLoginFormSubmit} setIsNewUser={setIsNewUser} />
    );
};

export default AuthPage;
