import React, { useState } from 'react';

import Button from 'app/common/components/Button/Button';

type LoginPropsType = {
    handleSubmit: (email: string, password: string) => void;
    setIsNewUser: (isNewUser: boolean) => void;
};

const LoginForm = ({ handleSubmit, setIsNewUser }: LoginPropsType): JSX.Element => {
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
        handleSubmit(email, password);
    };

    const handleRegistrationButtonClick = () => setIsNewUser(true);

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
                <Button onClick={handleRegistrationButtonClick} type="button">
                    Регистрация
                </Button>
            </p>
        </>
    );
};

export default LoginForm;
