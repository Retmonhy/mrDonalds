import { useState } from "react";

const useAmount = () => {
    const [amount, setAmount] = useState(1);

    const onChange = (e) => {setAmount(+e.target.value); };

    return { amount, setAmount, onChange }
}

export default useAmount;