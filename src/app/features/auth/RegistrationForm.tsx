import React from 'react';

import Button from "app/common/components/Button/Button";

type RegistrationPropsType = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
}

const RegistrationForm = ({handleSubmit}: RegistrationPropsType): JSX.Element => {

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>
                    Регистрация
                </h1>
                <label>
                    Email*
                    <input type="email" name="email" placeholder="mail@mail.ru"/>
                </label>
                <label>
                    Как вас зовут?*
                    <input type="text" name="name" placeholder="Петр Александрович"/>
                </label>
                <label>
                    Придумайте пароль*
                    <input type="password" name="password" placeholder="*************"/>
                </label>
                <Button type="button">Забыли пароль?</Button>
                <Button type="submit">
                    Зарегистрироваться
                </Button>
            </form>
            <p>Уже зарегестрированны? <Button type="link">Войти</Button></p>
        </>
    )
}

export default RegistrationForm;
