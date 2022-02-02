import { object, string, lazy, mixed } from 'yup';
import { getNameValidation, getPasswordValidation, getRequiredMessage, getValidMessage } from './helpers';

export const SignInSchema = object().shape({
    email: string().email(getValidMessage('Email')).required(getRequiredMessage('Email')),
    password: string().required(getRequiredMessage('Password')),
});

export const SignUpSchema = object({
    email: string().email(getValidMessage('email')).required(getRequiredMessage('Email')),
    name: getNameValidation({ name: 'First name' }),
    surname: getNameValidation({ name: 'Last name' }),
    password: getPasswordValidation({ name: 'New password' }),
});
