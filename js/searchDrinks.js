import getElement from "./getElement.js";
import render from './renderDrinks.js'

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const form = getElement('#form')
const input = getElement('.form-control[name="drink"]');

    form.addEventListener('keyup', (e) => {
        e.preventDefault();
        const value = input.value;
        if(!value.trim()){
            return;
        }
        render(`${baseURL}${value}`);
    });