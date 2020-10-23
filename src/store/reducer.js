import * as actionTypes from './actionTypes';
import { transformData } from '../shared/utils';
import data from '../data.json';

const initialState = {
    cars: transformData(data),
    search: {
        searchInput: '',
        filters: {
            country: true,
            brand: true,
            model: true,
            year: true,
            vin: true,
        },
    },
};

const searchCar = (state, action) => {
    return { ...state, search: action.payload };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_CAR:
            return searchCar(state, action);
        default:
            return state;
    }
};

export default reducer;
