import { useState } from 'react';

export const  getToppings = toppings => toppings ? toppings.map( topping => ({name : topping, checked: false})) : [];

const useToppings = (openItems) => {
    const readyToppings = openItems.orderToppings ? openItems.orderToppings :
                            openItems.toppings ? getToppings(openItems.toppings) : [];
    const [toppingsObj, setToppings] = useState(readyToppings);
    const checkToppings = index => {
        setToppings(toppingsObj.map((item, i) => {
            if(i === index) item.checked = !item.checked;
            return item;
        }))
    }
    return { toppingsObj, checkToppings };
}

export default useToppings;