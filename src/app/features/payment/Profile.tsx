import { InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Loader } from 'app/common/components';
import {
	selectAuthToken,
	selectIsLoading,
} from 'app/features/auth/store/authSelector';
import {
	selectCardData,
	selectisUpdatedData,
} from 'app/features/payment/store/cardSelector';
import { makeCardDataUploadingRequest } from 'app/features/payment/store/cardSlice';
import { routePaths } from 'app/routes';

import chip from 'app/assets/images/chip.svg';
import logoIcon from 'app/assets/images/logo-icon.svg';

const Profile = ({ className }: any) => {
	const dispatch = useDispatch();

	const token = useSelector(selectAuthToken);
	const isLoading = useSelector(selectIsLoading);
	const isCardDataUploaded = useSelector(selectisUpdatedData);
	const { cardNumber } = useSelector(selectCardData);

	return (
		<section className={className}>
			<header className='profile-header'>
				<h1 className='profile-title'>Profile</h1>
				<p className='profile-desc'>
					{isCardDataUploaded
						? 'Payment details updated. You can now order a taxi.'
						: 'Enter payment details'}
				</p>
			</header>
			<div className='profile-content-wrap'>
				{isLoading && <Loader />}
				{!isCardDataUploaded || !cardNumber ? (
					<>
						<Formik
							initialValues={{
								cardName: '',
								cardNumber: cardNumber,
								expiryDate: '',
								cvc: '',
							}}
							onSubmit={(values, { setSubmitting }) => {
								dispatch(makeCardDataUploadingRequest({ ...values, token }));
								setSubmitting(false);
							}}
						>
							{({ isSubmitting }) => (
								<Form className='profile-form'>
									<InputLabel className='profile-field-label'>
										Owner's name
										<Field
											className='profile-field'
											type='text'
											name='cardName'
										/>
									</InputLabel>
									<InputLabel className='profile-field-label'>
										Card number
										<Field
											className='profile-field'
											type='number'
											name='cardNumber'
										/>
									</InputLabel>
									<div className='profile-fields-wrap'>
										<InputLabel className='profile-field-label'>
											MM/YY
											<Field
												className='profile-field'
												type='number'
												name='expiryDate'
											/>
										</InputLabel>
										<InputLabel className='profile-field-label'>
											CVC
											<Field
												className='profile-field'
												type='number'
												name='cvc'
											/>
										</InputLabel>
									</div>
									<Button
										className='profile-save-button'
										type='submit'
										disabled={isSubmitting}
									>
										Save
									</Button>
								</Form>
							)}
						</Formik>
						<div className='profile-card'>
							<div className='profile-card-header'>
								<img
									width={34}
									height={34}
									src={logoIcon}
									alt='Loft taxi logo'
								/>
								<span className='profile-card-expiry-date'>01/01</span>
							</div>
							<span className='profile-card-number'>{cardNumber}</span>
							<img width={29} height={27} src={chip} alt='Card chip' />
						</div>
					</>
				) : (
					<Button
						className='profile-go-to-button'
						type='link'
						to={routePaths.mapPage()}
					>
						Go to map
					</Button>
				)}
			</div>
		</section>
	);
};

export default styled(Profile)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 888px;
	padding: 60px 45px;
	border-radius: 10px;
	box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.1);
	background-color: #fff;

	& .profile-header {
		text-align: center;
	}
	& .profile-title {
		font-size: 36px;
		margin: 0 0 12px;
	}
	& .profile-desc {
		margin: 0 0 50px;
		font-size: 18px;
		color: #7b7b7b;
	}
	& .profile-content-wrap {
		display: flex;
		justify-content: space-between;
	}
	& .profile-form {
		display: flex;
		flex-direction: column;
		width: 355px;
	}
	& .profile-field-label {
		font-size: 16px;
		color: #828282;
		margin-bottom: 26px;
	}
	& .profile-field {
		display: block;
		width: 100%;
		height: 43px;
		font-size: 16px;
		font-weight: bold;
		border: none;
		border-bottom: 2px solid #e4e4e4;
	}
	& .profile-fields-wrap {
		display: flex;
		justify-content: space-between;
	}
	& .profile-save-button {
		width: 353px;
		height: 61px;
		transform: translateX(225px);
	}
	& .profile-go-to-button {
		width: 353px;
		height: 61px;
		margin: 0 auto;
	}
	& .profile-card {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 347px;
		height: 182px;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0px 5px 20px 2px rgba(0, 0, 0, 0.1);
		&:before,
		&:after {
			content: '';
			position: absolute;
			right: 16px;
			bottom: 16px;
			width: 28px;
			height: 28px;
			border-radius: 50%;
			background-color: rgba(241, 241, 241, 0.5);
		}
		&:before {
			right: 32px;
		}
	}
	& .profile-card-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	& .profile-card-expiry-date {
		font-size: 12px;
	}
	& .profile-card-number {
		font-size: 21px;
	}
`;
