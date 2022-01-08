export default {
    loginPage: (): string => '/',
    registrationPage: (): string => '/registration',
    mapPage: (): string => '/map',
    profilePage: (): string => '/profile',
    errorPage: (statusCode: string | number): string => `/error/${statusCode}`,
};
