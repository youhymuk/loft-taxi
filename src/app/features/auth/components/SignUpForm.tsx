import { InputLabel, styled } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Loader } from 'app/common/components';
import { SignUpSchema } from 'app/features/auth/shemas';
import { clearAuthError, signUp } from 'app/features/auth/store/authActions';
import {
	selectAuthError,
	selectIsLoading,
} from 'app/features/auth/store/authSelector';
import { routePaths } from 'app/routes';

const SignUpForm = ({ className }: any): JSX.Element => {
	const dispatch = useDispatch();

	const errorMessage = useSelector(selectAuthError);
	const isLoading = useSelector(selectIsLoading);

	useEffect(() => {
		return () => {
			if (errorMessage) dispatch(clearAuthError());
		};
	}, [errorMessage]);

	return (
		<section className={className}>
			<Formik
				initialValues={{ email: '', name: '', surname: '', password: '' }}
				validationSchema={SignUpSchema}
				onSubmit={(values, { setSubmitting }) => {
					const { email, name, surname, password } = values;

					dispatch(signUp(email, password, name, surname));
					setSubmitting(false);
				}}
			>
				{({ errors, dirty, isSubmitting }) => {
					const hasFormikError = !!Object.keys(errors).filter(Boolean).length;
					const isDisDisabledSubmit =
						isSubmitting || !dirty || hasFormikError || !!errorMessage;

					return (
						<Form className='form'>
							{errorMessage && <p className='form-error'>{errorMessage}</p>}
							{isLoading && <Loader />}
							<h1 className='form-title'>Sign Up</h1>
							<ErrorMessage
								name='email'
								render={(msg) => <p className='form-error'>{msg}</p>}
							/>
							<InputLabel className='form-field-label'>
								Email*
								<Field
									className='form-field'
									type='email'
									name='email'
									placeholder='mail@mail.ru'
								/>
							</InputLabel>
							<ErrorMessage
								name='name'
								render={(msg) => <p className='form-error'>{msg}</p>}
							/>
							<InputLabel className='form-field-label'>
								Name
								<Field
									className='form-field'
									type='text'
									name='name'
									placeholder='Петр'
								/>
							</InputLabel>
							<ErrorMessage
								name='surname'
								render={(msg) => <p className='form-error'>{msg}</p>}
							/>
							<InputLabel className='form-field-label'>
								Surname
								<Field
									className='form-field'
									type='text'
									name='surname'
									placeholder='Петр Иванов'
								/>
							</InputLabel>
							<ErrorMessage
								name='password'
								render={(msg) => <p className='form-error'>{msg}</p>}
							/>
							<InputLabel className='form-field-label'>
								Password*
								<Field
									className='form-field'
									type='password'
									name='password'
									placeholder='*************'
								/>
							</InputLabel>
							<Button className='form-forget-btn' type='button'>
								Forgot Password?
							</Button>
							<Button
								className='form-register-btn'
								disabled={isDisDisabledSubmit}
								type='submit'
							>
								Sign up
							</Button>
						</Form>
					);
				}}
			</Formik>
			<p className='is-user-exist-msg'>
				Already have an account?{' '}
				<Button
					className='go-to-login-btn'
					type='link'
					to={routePaths.signInPage()}
				>
					Log in
				</Button>
			</p>
		</section>
	);
};

export default styled(SignUpForm)`
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
	& .form-error {
		margin: 0;
		text-align: center;
		color: #ff0000;
		font-weight: bold;
	}
	& .form-title {
		font-size: 30px;
		text-align: center;
		margin-bottom: 55px;
	}
	& .form-field-label {
		font-size: 16px;
		font-weight: bold;
		color: #000;
		&:not(:last-of-type) {
			margin-bottom: 25px;
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
	& .form-register-btn {
		display: block;
		width: 100%;
	}
	& .is-user-exist-msg {
		text-align: center;
		font-size: 16px;
		color: #828282;
	}
	& .go-to-login-btn {
		padding: 0;
		font-size: inherit;
		color: #fdbf5a;
		background: transparent;
		box-shadow: none;
		&:hover {
			background: transparent;
			box-shadow: none;
		}
	}
`;
