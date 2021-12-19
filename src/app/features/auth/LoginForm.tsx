import React, {useState} from 'react';

import Button from "app/common/components/Button/Button";

type LoginPropsType = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
}

const LoginForm = ({handleSubmit}: LoginPropsType): JSX.Element => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>
                    Войти
                </h1>
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
                <Button type="submit">
                    Войти
                </Button>
            </form>
            <p>Новый пользователь? <Button type="link">Регистрация</Button></p>
        </>
    )
}

export default LoginForm;
