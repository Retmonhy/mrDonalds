

export const calcTotalCost = (price, amount, toppings ) => {
    const toppingsAmount = toppings && toppings.filter((item) => item.checked === true).length;
    return +(price * amount * (1.0 + toppingsAmount*(0.1))).toFixed(2);
}

export const localizeCost = (num) => {
    if(!num) return 0
    return num.toLocaleString("ru-RU",
            {style: "currency", currency: "RUB"});
}
