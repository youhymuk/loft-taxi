import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { routePaths } from 'app/routes';
import { Button, Loader } from 'app/common/components';
import { signIn } from 'app/features/auth/store/authActions';
import { selectAuthError, selectIsLoading } from 'app/features/auth/store/authSelector';

const SignInForm = (): JSX.Element => {
    const dispatch = useDispatch();

    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectAuthError);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch(signIn(email, password));
    };

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                {!!error && <p>{error}</p>}
                {isLoading && <Loader />}
                <h1>Войти</h1>
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        placeholder="mail@mail.ru"
                        value={email}
                        onChange={handleEmailInputChange}
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        placeholder="*************"
                        value={password}
                        onChange={handlePasswordInputChange}
                    />
                </label>
                <Button type="button">Забыли пароль?</Button>
                <Button type="submit">Войти</Button>
            </form>
            <p>
                Новый пользователь?{' '}
                <Button type="link" to={routePaths.registrationPage()}>
                    Регистрация
                </Button>
            </p>
        </>
    );
};

export default SignInForm;
