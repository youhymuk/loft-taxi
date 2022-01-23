import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAddressList } from 'app/features/map/store/mapSelector';
import { Button } from 'app/common/components';
import { getCoordinatesRequest } from '../../store/mapActions';

const OrderForm = () => {
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
        dispatch(getCoordinatesRequest(from, to));
        setFrom('');
        setTo('');
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <select name="from" value={from} onChange={handleSelectFromOption}>
                <option></option>
                {!!addressList &&
                    addressList
                        .filter((item) => item !== to)
                        .map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
            </select>
            <select name="to" value={to} onChange={handleSelectToOption}>
                <option></option>
                {!!addressList &&
                    addressList
                        .filter((item) => item !== from)
                        .map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
            </select>
            <Button disabled={!from || !to} type="submit">
                Заказать
            </Button>
        </form>
    );
};

export default OrderForm;
