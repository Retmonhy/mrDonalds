import { useState } from 'react';

export const  getToppings = toppings => toppings ? toppings.map( topping => ({name : topping, checked: false})) : [];

const useToppings = (openItems) => {
    const [toppingsObj, setToppings] = useState(getToppings(openItems.toppings));
    console.log('toppingsObj = \n', toppingsObj)
    const checkToppings = index => {
        setToppings(toppingsObj.map((item, i) => {
            if(i === index) item.checked = !item.checked;
            return item;
        }))
    }
    return { toppingsObj, checkToppings };
}

export default useToppings;