import { useState } from 'react';

export const  getToppings = toppings => {if(!toppings) return []; return toppings.map( topping => ({name : topping, checked: false}))}

const useToppings = (openItems) => {
    const [toppings, setToppings] = useState(getToppings(openItems.toppings));

    const checkToppings = index => {
        setToppings(toppings.map((item, i) => {
            if(i === index) item.checked = !item.checked;
            return item;
        }))
    }
    return { toppings, checkToppings };
}

export default useToppings;