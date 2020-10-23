import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import SearchPanel from './components/SearchPanel';
import CarsList from './components/CarsList';
import * as constants from './shared/constants';
import classes from './App.module.css';

const App = ({ cars, search }) => {
    const [cardsToShowCount, setCardsToShowCount] = useState(
        constants.CARDS_PER_PAGE
    );
    const [currentPage, setCurrentPage] = useState(1);

    const filteredCars = useMemo(
        () =>
            cars.filter((car) => {
                return Object.keys(search.filters).find((filter) => {
                    if (search.filters[filter] && car[filter]) {
                        return car[filter]
                            .toString()
                            .toLowerCase()
                            .includes(search.searchInput.toLowerCase());
                    }
                    return false;
                });
            }),
        [cars, search]
    );

    const showMoreButtonHandler = () => {
        setCardsToShowCount(
            (cardsShown) => cardsShown + constants.CARDS_PER_PAGE
        );
        setCurrentPage((currentPage) => currentPage + 1);
    };

    const showMoreButton =
        filteredCars.length > currentPage * constants.CARDS_PER_PAGE ? (
            <button
                name="show-more-button"
                className={classes.showMoreButton}
                onClick={showMoreButtonHandler}
            >
                Show More
            </button>
        ) : null;

    return (
        <div className={classes.container}>
            <SearchPanel />
            <CarsList carsData={filteredCars.slice(0, cardsToShowCount)} />
            {showMoreButton}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cars: state.cars,
        search: state.search,
    };
};

export default connect(mapStateToProps)(App);
