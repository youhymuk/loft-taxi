import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { routePaths } from 'app/routes';
import { Button, Loader } from 'app/common/components';
import { signUp } from 'app/features/auth/store/authActions';
import { selectAuthError, selectIsLoading } from 'app/features/auth/store/authSelector';

const SignUpForm = (): JSX.Element => {
    const dispatch = useDispatch();

    const error = useSelector(selectAuthError);
    const isLoading = useSelector(selectIsLoading);

    const [email, setEmail] = useState('');
    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleSurnameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSurname(e.target.value);
    };

    const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch(signUp(email, password, name, surname));
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                {!!error && <p>{error}</p>}
                {isLoading && <Loader />}
                <h1>Регистрация</h1>
                <label>
                    Email*
                    <input
                        type="email"
                        name="email"
                        placeholder="mail@mail.ru"
                        value={email}
                        onChange={handleEmailInputChange}
                    />
                </label>
                <label>
                    Ваше имя
                    <input type="text" name="name" placeholder="Петр" value={name} onChange={handleNameInputChange} />
                </label>
                <label>
                    Ваша фамилия
                    <input
                        type="text"
                        name="surname"
                        placeholder="Петр Иванов"
                        value={surname}
                        onChange={handleSurnameInputChange}
                    />
                </label>
                <label>
                    Придумайте пароль*
                    <input
                        type="password"
                        name="password"
                        placeholder="*************"
                        value={password}
                        onChange={handlePasswordInputChange}
                    />
                </label>
                <Button type="button">Забыли пароль?</Button>
                <Button type="submit">Зарегистрироваться</Button>
            </form>
            <p>
                Уже зарегестрированны?{' '}
                <Button type="link" to={routePaths.signInPage()}>
                    Войти
                </Button>
            </p>
        </>
    );
};

export default SignUpForm;
