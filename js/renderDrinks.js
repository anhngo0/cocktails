import fetchDrinks from './fetchDrink.js';
import displayDrinks from './displayDrinks.js';
import setProduct from './setProduct.js';
export default async (url) => {
    const drinks = await fetchDrinks(url);
    const section = displayDrinks(drinks);
    if(section){
        setProduct(section)
    }
}