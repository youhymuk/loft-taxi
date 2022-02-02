import { string, ref, StringSchema } from 'yup';

type MinMaxType = {
    name: string;
    min?: number;
    max?: number;
};

const minNameLength = 3;
const maxNameLength = 255;
const minPasswordLength = 8;
const maxPasswordLength = 32;

export const getPasswordRegExp = (min: number): RegExp => new RegExp(`^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{${min},})`);

export const getRequiredMessage = (name: string) => `${name} required`;

export const getValidMessage = (name: string) => `Please enter a valid ${name}`;

export const getMinMessage = (fieldName: string, minLength: number): string =>
    `${fieldName} should contain at least ${minLength} symbols`;

export const getMaxMessage = (fieldName: string, maxLength: number): string =>
    `${fieldName} cannot be longer than ${maxLength} symbols`;

export const getPasswordMessage = (fieldName: string, minLength: number): string =>
    `${fieldName} must contain at least ${minLength} characters with a mix of numbers`;

export const getNameValidation = ({ name, min = minNameLength, max = maxNameLength }: MinMaxType): StringSchema =>
    string()
        .min(min, getMinMessage(name, min))
        .max(max, getMaxMessage(name, max))
        .required(getRequiredMessage(name))
        .trim();

export const getPasswordValidation = ({
    name,
    min = minPasswordLength,
    max = maxPasswordLength,
}: MinMaxType): StringSchema =>
    string()
        .matches(getPasswordRegExp(min), getPasswordMessage(name, min))
        .min(min, getMinMessage(name, min))
        .max(max, getMaxMessage(name, max))
        .required(getRequiredMessage(name));
