

export const calcTotalCost = (price, amount, fullOrder = []) => {

    if(fullOrder.length <= 1) return +(price * amount).toFixed(2);

    return fullOrder.reduce((sum, order) => sum += order, 0)
}

export const localizeCost = (num) => {
    return num.toLocaleString("ru-RU",
            {style: "currency", currency: "RUB"});
}
