import React from 'react';
import AutoCard from './AutoCard';

import classes from './CarsList.module.css';

const CarsList = ({ carsData }) => {
    const cars = carsData.map((car) => <AutoCard key={car.vin} {...car} />);
    return <div className={classes.carsContainer}>{cars}</div>;
};

export default CarsList;
