import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material';

import Map from 'app/features/map/components/Map';
import OrderForm from 'app/features/map/components/OrderForm/OrderForm';
import { Button, Header, Loader } from 'app/common/components';
import { selectAuthToken } from 'app/features/auth/store/authSelector';
import { selectCardData } from 'app/features/payment/store/cardSelector';
import { getCardData } from 'app/features/payment/store/cardActions';
import { clearRoute, getAddressListRequest } from 'app/features/map/store/mapActions';
import { routePaths } from 'app/routes';
import { selectCoordinates, selectIsLoading } from 'app/features/map/store/mapSelector';

const MapPage = ({ className }: any): JSX.Element => {
    const dispatch = useDispatch();

    const isCardDataExist = useSelector(selectCardData);
    const isLoading = useSelector(selectIsLoading);
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
            <div className={className}>
                {isLoading && <Loader />}
                {!isLoading ? (
                    isCardDataExist ? (
                        !isRouteExist ? (
                            <OrderForm />
                        ) : (
                            <div className="info-modal">
                                <h1 className="info-title">Заказ размещен</h1>
                                <p className="info-message">
                                    Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
                                </p>
                                <Button className="info-action-btn" type="button" onClick={handleNewOrderButtonClick}>
                                    Сделать новый заказ
                                </Button>
                            </div>
                        )
                    ) : (
                        <div className="info-modal">
                            <h1 className="info-title">Данные отсутствуют</h1>
                            <p className="info-message">Для заказа такси заполните платёжные данные в профиле.</p>
                            <Button className="info-action-btn" type="link" to={routePaths.profilePage()}>
                                Перейти в профиль
                            </Button>
                        </div>
                    )
                ) : null}
                <Map />
            </div>
        </>
    );
};

export default styled(MapPage)`
    position: relative;
    height: calc(100% - 102px);
    overflow: hidden;
    & .info-modal {
        position: absolute;
        top: 60px;
        left: 100px;
        z-index: 1;
        width: 486px;
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.1);
        background-color: #fff;
    }
    & .info-title {
        font-size: 36px;
        margin: 0 0 14px;
    }
    & .info-message {
        font-size: 18px;
        color: #7b7b7b;
    }
    & .info-action-btn {
        display: block;
        width: 100%;
    }
`;
