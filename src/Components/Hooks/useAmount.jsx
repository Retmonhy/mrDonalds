import { useState } from "react";

const useAmount = (initialAmount = 1) => {
    const [amount, setAmount] = useState(initialAmount);

    const onChange = (e) => {
        if(+e.target.value < 1) return
        setAmount(+e.target.value)
    };

    return { amount, setAmount, onChange }
}

export default useAmount;