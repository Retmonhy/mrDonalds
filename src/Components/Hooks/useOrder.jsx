import { useState } from "react";

 const useOrder = () => {
    const [order, setOrder] = useState([]);
    return { order, setOrder };
}

export default useOrder;