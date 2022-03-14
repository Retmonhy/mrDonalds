//отслеживает состояние чекбокса
import React, { useState } from "react"


const useCheckbox = () => {
    const [checkboxState, setCheckboxState] = useState(false)

    const onCheckboxChange = () => {
        setCheckboxState(!checkboxState);
    }
    return {checkboxState, onCheckboxChange}
}


export default useCheckbox;