export const transformData = (data) => {
    const cars = [];
    data.forEach((countryData) => {
        countryData.children.forEach((brandData) => {
            brandData.children.forEach((modelData) => {
                if (modelData.children.type === 'vin') {
                    if (modelData.children.value) {
                        const car = {
                            country: countryData.value,
                            brand: brandData.value,
                            model: modelData.value,
                            year: null,
                            vin: modelData.children.value,
                        };
                        cars.push(car);
                    }
                } else if (modelData.children.type === 'year') {
                    modelData.children.children.forEach((vin) => {
                        if (vin.value) {
                            const car = {
                                country: countryData.value,
                                brand: brandData.value,
                                model: modelData.value,
                                year: modelData.children.value,
                                vin: vin.value,
                            };
                            cars.push(car);
                        }
                    });
                }
            });
        });
    });
    return cars;
};
