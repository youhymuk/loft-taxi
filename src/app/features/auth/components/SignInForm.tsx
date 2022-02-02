import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { InputLabel, styled } from '@mui/material';

import { routePaths } from 'app/routes';
import { Button, Loader } from 'app/common/components';
import { clearAuthError, signIn } from 'app/features/auth/store/authActions';
import { selectAuthError, selectIsLoading } from 'app/features/auth/store/authSelector';
import { SignInSchema } from 'app/features/auth/shemas';

const SignInForm = ({ className }: any) => {
    const dispatch = useDispatch();

    const isLoading = useSelector(selectIsLoading);
    const errorMessage = useSelector(selectAuthError);

    useEffect(() => {
        return () => {
            if(errorMessage) dispatch(clearAuthError())
        };
    }, [errorMessage]);

    return (
        <section className={className}>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={SignInSchema}
                onSubmit={(values, { setSubmitting }) => {
                    const { email, password } = values;
                    dispatch(signIn(email, password));
                    setSubmitting(false);
                }}>
                {({ errors, dirty, isSubmitting }) => {
                    const hasFormikError = !!Object.keys(errors).filter(Boolean).length;
                    const isDisDisabledSubmit = isSubmitting || !dirty || hasFormikError || !!errorMessage;

                    return (
                        <Form className="form">
                            {errorMessage && <p className="form-error">{errorMessage}</p>}
                            {isLoading && <Loader />}
                            <h1 className="form-title">Войти</h1>
                            <ErrorMessage name="email" render={(msg) => <p className="form-error">{msg}</p>} />
                            <InputLabel className="form-field-label">
                                Email
                                <Field className="form-field" type="email" name="email" placeholder="mail@mail.ru" />
                            </InputLabel>
                            <ErrorMessage name="password" render={(msg) => <p className="form-error">{msg}</p>} />
                            <InputLabel className="form-field-label">
                                Password
                                <Field
                                    className="form-field"
                                    type="password"
                                    name="password"
                                    placeholder="*************"
                                />
                            </InputLabel>
                            <Button className="form-forget-btn" type="button">
                                Забыли пароль?
                            </Button>
                            <Button className="form-login-btn" type="submit" disabled={isDisDisabledSubmit}>
                                Войти
                            </Button>
                        </Form>
                    );
                }}
            </Formik>
            <p className="is-new-user-msg">
                Новый пользователь?{' '}
                <Button className="go-to-register-btn" type="link" to={routePaths.registrationPage()}>
                    Регистрация
                </Button>
            </p>
        </section>
    );
};

export default styled(SignInForm)`
    position: relative;
    width: 580px;
    height: auto;
    align-self: center;
    margin: 0 auto;
    padding: 55px 110px;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
    & .form {
        display: flex;
        flex-direction: column;
    }
    & .form-title {
        font-size: 30px;
        text-align: center;
        margin-bottom: 55px;
    }
    & .form-error {
        margin: 0;
        text-align: center;
        color: #ff0000;
        font-weight: bold;
    }
    & .form-field-label {
        font-size: 16px;
        font-weight: bold;
        color: #000;
        :not(:last-of-type) {
            margin-bottom: 24px;
        }
    }
    & .form-field {
        display: block;
        width: 100%;
        height: 42px;
        border: none;
        border-bottom: 2px solid #e4e4e4;
    }
    & .form-forget-btn {
        padding: 0;
        margin: 13px 0 46px auto;
        font-size: 16px;
        color: #828282;
        background: transparent;
        box-shadow: none;
    }
    & .form-login-btn {
        display: block;
        width: 100%;
    }
    & .is-new-user-msg {
        text-align: center;
        font-size: 16px;
        color: #828282;
    }
    & .go-to-register-btn {
        padding: 0;
        font-size: inherit;
        color: #fdbf5a;
        background: transparent;
        box-shadow: none;
        &:hover,
        :focus {
            background: transparent;
            box-shadow: none;
        }
    }
`;
