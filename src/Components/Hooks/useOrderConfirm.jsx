import { useState } from "react";

const useOrderConfirm = () => {
    const [ openOrderConfirm, setOpenOrderConfirm ] = useState(false);

    return { openOrderConfirm, setOpenOrderConfirm }
}
export default useOrderConfirm;