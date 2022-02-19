import { useState } from "react";

const useOrderThanks = () => {
    const [ orderThanks, setOrderThanks ] = useState(false)

    return { orderThanks, setOrderThanks }
}

export default useOrderThanks;