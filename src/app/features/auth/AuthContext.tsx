import React, { createContext, useState } from 'react';

type AuthContextType = {
    isLoggedIn: boolean;
    logIn: (email: string, password: string) => void;
    logOut: () => void;
};

type AuthProviderPropsType = {
    children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    logIn: () => {},
    logOut: () => {},
});

export const AuthProvider = ({ children }: AuthProviderPropsType) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logIn = (email: string, password: string) => {
        if (email !== 'email@email.com' || password !== 'password') {
            return;
        } else {
            setIsLoggedIn(true);
        }
    };

    const logOut = (): void => setIsLoggedIn(false);

    return <AuthContext.Provider value={{ logIn, logOut, isLoggedIn }}>{children}</AuthContext.Provider>;
};
