import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	styled,
} from '@mui/material';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'app/common/components';
import { selectAddressList } from 'app/features/map/store/mapSelector';
import { getCoordinates } from 'app/features/map/store/mapSlice';

import arrow from 'app/assets/images/arrow.svg';

const OrderForm = ({ className }: any) => {
	const dispatch = useDispatch();

	const addressList = useSelector(selectAddressList);

	const [from, setFrom] = useState('');
	const [to, setTo] = useState('');

	const handleSelectFromOption = (e: any) => {
		setFrom(e.target.value);
	};

	const handleSelectToOption = (e: any) => {
		setTo(e.target.value);
	};

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(getCoordinates({ from, to }));
		setFrom('');
		setTo('');
	};

	return (
		<Formik
			initialValues={{ from: '', to: '' }}
			onSubmit={(values, { setSubmitting }) => {
				dispatch(getCoordinates({ from, to }));
				setSubmitting(false);
			}}
		>
			{({ isSubmitting }) => (
				<Form className={className} onSubmit={handleFormSubmit}>
					<FormControl fullWidth>
						<InputLabel id='from'>From</InputLabel>
						<Select
							labelId='from'
							className='form-select'
							name='from'
							value={from}
							label='From'
							onChange={handleSelectFromOption}
						>
							{!!addressList &&
								addressList
									.filter((item) => item !== to)
									.map((item) => (
										<MenuItem key={item} value={item}>
											{item}
										</MenuItem>
									))}
						</Select>
					</FormControl>
					<FormControl fullWidth>
						<InputLabel id='to'>To</InputLabel>
						<Select
							labelId='to'
							className='form-select'
							name='to'
							value={to}
							label='To'
							onChange={handleSelectToOption}
						>
							{!!addressList &&
								addressList
									.filter((item) => item !== from)
									.map((item) => (
										<MenuItem key={item} value={item}>
											{item}
										</MenuItem>
									))}
						</Select>
					</FormControl>
					<Button
						className='form-order-btn'
						disabled={isSubmitting}
						type='submit'
					>
						Order
					</Button>
				</Form>
			)}
		</Formik>
	);
};

export default styled(OrderForm)`
	position: absolute;
	top: 60px;
	left: 100px;
	z-index: 1;
	width: 486px;
	padding: 40px;
	border-radius: 10px;
	background-color: #fff;
	box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.25);
	& .form-select {
		position: relative;
		display: block;
		& .MuiSelect-select {
			box-sizing: border-box;
		}
	}
	& .MuiFormControl-root {
		margin-bottom: 16px;
		&:before {
			content: '';
			position: absolute;
			top: 50%;
			left: -24px;
			transform: translateY(-50%);
			display: block;
			width: 14px;
			height: 14px;
			border-radius: 50%;
			background-color: #000;
		}
		&:last-of-type:before {
			width: 17px;
			height: 17px;
			background: transparent url(${arrow});
			border-radius: 0;
		}
	}
	& .form-order-btn {
		display: block;
		width: 100%;
	}
`;
