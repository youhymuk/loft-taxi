import React, { useState } from 'react';

import { routePaths } from 'app/routes';
import Button from 'app/common/components/Button/Button';
import { useDispatch } from 'react-redux';

import { authorize } from 'app/features/auth/store/authActions';

const LoginForm = (): JSX.Element => {
    const dispatch = useDispatch();

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
        dispatch(authorize(email, password));
    };

    return (
        <>
            <form onSubmit={handleFormSubmit}>
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

export default LoginForm;
