import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadFromLocalStorage } from 'app/common/utils';
import { authSucceeded } from 'app/features/auth/store/authSlice';
import { Router } from 'app/routes';

import map from 'app/assets/images/map.png';

const App = ({ className }: any): JSX.Element => {
	const dispatch = useDispatch();

	useEffect(() => {
		const token = loadFromLocalStorage();
		if (token) dispatch(authSucceeded(token));
	}, []);

	return (
		<div className={`${className} app`}>
			<Router />
		</div>
	);
};

export default styled(App)`
	background: transparent url(${map});
	background-size: cover;
`;
