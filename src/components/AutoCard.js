import React from 'react';
import classes from './AutoCard.module.css';

const AutoCard = ({ country, brand, model, year, vin }) => {
    return (
        <div className={classes.card}>
            <span>Country: {country}</span>
            <span>Brand: {brand}</span>
            <span>Model: {model}</span>
            {year && <span>Year: {year}</span>}
            <span>Vin: {vin}</span>
        </div>
    );
};

export default AutoCard;
