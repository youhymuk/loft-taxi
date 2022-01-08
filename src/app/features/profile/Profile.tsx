import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//@ts-ignore
import { MCIcon } from 'loft-taxi-mui-theme';
import { Button } from 'app/common/components';
import { selectAuthToken } from 'app/features/auth/store/authSelector';
import { setUserData, uploadUserData } from 'app/features/profile/store/profileActions';

import logoIcon from 'app/assets/images/logo-icon.svg';
import css from 'app/features/profile/Profile.module.css';

const Profile = () => {
    const dispatch = useDispatch();
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');

    const token = useSelector(selectAuthToken);

    const handleUserNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCardName(e.target.value);
    };

    const handleCardNumberInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCardNumber(e.target.value);
    };

    const handleExpirationDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExpiryDate(e.target.value);
    };

    const handleCvcNumberInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCvc(e.target.value);
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const cardData = { cardNumber, expiryDate, cardName, cvc };
        e.preventDefault();
        dispatch(setUserData(cardData));
        dispatch(uploadUserData({ ...cardData, token }));
    };
    return (
        <section className={css.profile}>
            <header className={css.profileHeader}>
                <h1>Профиль</h1>
                <p>Введите платежные данные</p>
            </header>
            <div className={css.profileContentWrap}>
                <form className={css.profileForm} onSubmit={handleFormSubmit}>
                    <label>
                        Имя владельца
                        <input type="text" value={cardName} onChange={handleUserNameInputChange} />
                    </label>
                    <label>
                        Номер карты
                        <input type="number" value={cardNumber} onChange={handleCardNumberInputChange} />
                    </label>
                    <label>
                        MM/YY
                        <input type="number" value={expiryDate} onChange={handleExpirationDateInputChange} />
                    </label>
                    <label>
                        CVC
                        <input type="number" value={cvc} onChange={handleCvcNumberInputChange} />
                    </label>
                    <Button type="submit" className={css.profileSaveButton}>
                        Сохранить
                    </Button>
                </form>
                <div className={css.profileCard}>
                    <img width={34} height={34} src={logoIcon} alt="Loft taxi logo" />
                    <MCIcon />
                    <span>{cardNumber}</span>
                </div>
            </div>
        </section>
    );
};

export default Profile;
