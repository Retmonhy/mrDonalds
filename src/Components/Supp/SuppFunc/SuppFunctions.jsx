

export const calcTotalCost = (price, amount, toppings ) => {
    const toppingsAmount = toppings && toppings.filter((item) => item.checked === true).length;
    return +(price * amount * (1.0 + toppingsAmount*(0.1))).toFixed(2);
}

export const localizeCost = (num) => {
    if(!num) return 0
    return num.toLocaleString("ru-RU",
            {style: "currency", currency: "RUB"});
}

export const projection = rules => {
    const keys = Object.keys(rules); //получаем ключи из объекта rules и дальше будем по ним итерироваться
    //возвращаем функцию которая пробегается по всему массиву клучей keys и для каждого в массиве newObj 
    return function createNewOrder(obj) { 
        return keys.reduce((newObj, key) => {
            newObj[key] = rules[key].reduce((value, fn, index) => (index ? fn(value) : obj[fn]), null);
            return newObj;
        }, {}) ;
                //Нулевая итерация: value = null, fn = toppings(or choices), index = 0
                //на нулевой итерации index ? fn(value) : obj[fn] дает obj[fn] 
                //на второй итерации value = fn, fn = item => item ? item : "No toppings", index = 1
                //index ? fn(value) : obj[fn] дает fn(value)? тем самым происходит выполнение функции с массивом toppings (or choices)
                // ну а на массивах с одним свойством (name...) просто в объект вернется это свойство и закончим
                //так можно добавлять много функции, которые  ибудут продолжать обрабатывать наши данные
    }

};



