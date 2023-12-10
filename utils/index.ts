import { CarPropertiesProps, FiltersProps } from "@/types";

export async function fetchCars(filters: FiltersProps) {

    const { manufacturer, year, model, fuel, limit } = filters

	const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5257834396msheeafefe006a2c5bp12a68ejsnd4b10c39547e',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    };

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, 
                    options)

    const result = await response.json()

    return result;

}

export const calculateCarRent = (city_mpg: number, year: number) => {

    const basePricePerDay = 50; //Base rental price per day in dollars
    
    const mileageFactor = 0.1; // Addiitional rate per mile driven

    const ageFactor = 0.05; //Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}

export const generateCarImageUrl = (car: CarPropertiesProps, angle?: string) => {

    const url = new URL('https://cdn.imagin.studio/getimage')

    const { make, year, model } = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}

export const updateSearchParams = (type: string, value: string) => {

    const searchParams = new URLSearchParams(window.location.search)

    searchParams.set(type, value)

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    return newPathname;

}