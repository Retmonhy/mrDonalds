import React, { useState } from "react";

const useCartShowed = () => {
    const [cartShowed, setCartShowed] = useState(false);

    return {cartShowed, setCartShowed}
}

export default useCartShowed;