import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Map from 'app/features/map/components/Map';
import OrderForm from 'app/features/map/components/OrderForm/OrderForm';
import { Button, Header } from 'app/common/components';
import { selectAuthToken } from 'app/features/auth/store/authSelector';
import { selectIsUploaded } from 'app/features/payment/store/cardSelector';
import { getCardData } from 'app/features/payment/store/cardActions';
import { clearRoute, getAddressListRequest } from 'app/features/map/store/mapActions';
import { routePaths } from 'app/routes';
import { selectCoordinates } from 'app/features/map/store/mapSelector';

const MapPage = (): JSX.Element => {
    const dispatch = useDispatch();

    const isCardDataExist = useSelector(selectIsUploaded);
    const token = useSelector(selectAuthToken);
    const coordinates = useSelector(selectCoordinates);
    const isRouteExist = coordinates.length > 0;

    const handleNewOrderButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(clearRoute());
    };

    useEffect(() => {
        dispatch(getCardData(token));
        dispatch(getAddressListRequest());
    }, []);

    return (
        <>
            <Header />
            {isCardDataExist ? (
                !isRouteExist ? (
                    <OrderForm />
                ) : (
                    <div>
                        <h1>Заказ размещен</h1>
                        <p>Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</p>
                        <Button type="button" onClick={handleNewOrderButtonClick}>
                            Сделать новый заказ
                        </Button>
                    </div>
                )
            ) : (
                <div>
                    <p>Для заказа такси заполните платёжные данные в профиле.</p>
                    <Button type="link" to={routePaths.profilePage()}>
                        Перейти в профиль
                    </Button>
                </div>
            )}
            <Map />
        </>
    );
};

export default MapPage;
