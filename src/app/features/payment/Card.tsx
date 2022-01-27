import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//@ts-ignore
import { MCIcon } from 'loft-taxi-mui-theme';

import { routePaths } from 'app/routes';
import { selectAuthToken, selectIsLoading } from 'app/features/auth/store/authSelector';
import { makeCardDataUploadingRequest } from 'app/features/payment/store/cardActions';
import { Button, Loader } from 'app/common/components';

import logoIcon from 'app/assets/images/logo-icon.svg';
import css from 'app/features/payment/Card.module.css';
import { selectIsUploaded } from 'app/features/payment/store/cardSelector';

const Card = () => {
    const dispatch = useDispatch();

    const token = useSelector(selectAuthToken);
    const isLoading = useSelector(selectIsLoading);
    const isCardDataUploaded = useSelector(selectIsUploaded);

    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');

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
        dispatch(makeCardDataUploadingRequest({ ...cardData, token }));
    };
    return (
        <section className={css.profile}>
            <header className={css.profileHeader}>
                <h1>Профиль</h1>
                <p>
                    {isCardDataUploaded
                        ? 'Платёжные данные обновлены. Теперь вы можете заказывать такси.'
                        : 'Введите платежные данные'}
                </p>
            </header>
            <div className={css.profileContentWrap}>
                {isLoading && <Loader />}
                {!isCardDataUploaded ? (
                    <>
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
                    </>
                ) : (
                    <Button type="link" to={routePaths.mapPage()}>
                        Перейти на карту
                    </Button>
                )}
            </div>
        </section>
    );
};

export default Card;
