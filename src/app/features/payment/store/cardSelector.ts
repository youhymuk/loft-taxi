import { createSelector } from 'reselect';
import { CardStateType } from 'app/features/payment/types';
import { StoreType } from 'app/store/storeTypes';

const cardSelector = (state: StoreType): CardStateType => state.card;

export const selectIsLoading = createSelector(cardSelector, (card: CardStateType) => card.isLoading);

export const selectIsUploaded = createSelector(cardSelector, (card: CardStateType) => card.isUploaded);
