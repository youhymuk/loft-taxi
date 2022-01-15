import React from 'react';

import { routePaths } from 'app/routes';
import { Button, Loader } from 'app/common/components';

type RegistrationPropsType = {
    handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
    isLoading: boolean;
};

const RegistrationForm = ({ handleSubmit, isLoading }: RegistrationPropsType): JSX.Element => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                {isLoading && <Loader />}
                <h1>Регистрация</h1>
                <label>
                    Email*
                    <input type="email" name="email" placeholder="mail@mail.ru" />
                </label>
                <label>
                    Как вас зовут?*
                    <input type="text" name="name" placeholder="Петр Александрович" />
                </label>
                <label>
                    Придумайте пароль*
                    <input type="password" name="password" placeholder="*************" />
                </label>
                <Button type="button">Забыли пароль?</Button>
                <Button type="submit">Зарегистрироваться</Button>
            </form>
            <p>
                Уже зарегестрированны?{' '}
                <Button type="link" to={routePaths.loginPage()}>
                    Войти
                </Button>
            </p>
        </>
    );
};

export default RegistrationForm;
