import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchCar } from '../store/actions';
import classes from './SearchPanel.module.css';

const SearchPanel = ({ onSearchCar }) => {
    const [searchValue, setSearchValue] = useState('');
    const [filters, setFilters] = useState({
        country: true,
        brand: true,
        model: true,
        year: true,
        vin: true,
    });

    const searchInputChangeHandler = (event) => {
        setSearchValue(event.target.value);
    };

    const searchButtonClickHandler = () => {
        onSearchCar(searchValue, filters);
    };

    const onChangeCheckboxValue = (type) => {
        setFilters((currentFilters) => {
            return { ...currentFilters, [type]: !currentFilters[type] };
        });
    };

    return (
        <div className={classes.searchContainer}>
            <div className={classes.inputContainer}>
                <input
                    type="text"
                    name="search"
                    className={classes.input}
                    onChange={searchInputChangeHandler}
                    value={searchValue}
                />
                <button
                    name="search-button"
                    className={classes.searchButton}
                    onClick={searchButtonClickHandler}
                >
                    Search
                </button>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        id="country-filter"
                        name="country-filter"
                        onChange={() => onChangeCheckboxValue('country')}
                        checked={filters.country}
                    />
                    Country
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        id="brand-filter"
                        name="brand-filter"
                        onChange={() => onChangeCheckboxValue('brand')}
                        checked={filters.brand}
                    />
                    Brand
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        id="model-filter"
                        name="model-filter"
                        onChange={() => onChangeCheckboxValue('model')}
                        checked={filters.model}
                    />
                    Model
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        id="year-filter"
                        name="year-filter"
                        onChange={() => onChangeCheckboxValue('year')}
                        checked={filters.year}
                    />
                    Year
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        id="vin-filter"
                        name="vin-filter"
                        onChange={() => onChangeCheckboxValue('vin')}
                        checked={filters.vin}
                    />
                    Vin
                </label>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchCar: (searchInput, filters) =>
            dispatch(searchCar(searchInput, filters)),
    };
};

export default connect(null, mapDispatchToProps)(SearchPanel);
