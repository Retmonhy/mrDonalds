import React, { useState } from "react";

const useProfileInput = () => {
    const [ value, setValue ] = useState("") 
    const changeValue = (evt) => {
        setValue(evt.target.value)
    }
    return {value, changeValue}
}
export default useProfileInput