import { useState } from "react";

const useTotalAmount = () => {
    const [totalAmount, setTotalAmount] = useState(0);
    return { totalAmount, setTotalAmount }
} 

export default useTotalAmount;