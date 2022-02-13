import { useState } from "react";

 const useOrder = () => {
    const [orders, setOrders] = useState([]);
    return { orders, setOrders };
}

export default useOrder;