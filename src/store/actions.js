import * as actionTypes from './actionTypes';

export const searchCar = (searchInput, filters) => {
    return {
        type: actionTypes.SEARCH_CAR,
        payload: {
            searchInput,
            filters,
        },
    };
};
