

export const calcTotalCost = (price, amount, fullOrder = []) => {
    return +(price * amount).toFixed(2);
}

export const localizeCost = (num) => {
    return num.toLocaleString("ru-RU",
            {style: "currency", currency: "RUB"});
}
