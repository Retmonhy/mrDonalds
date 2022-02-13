import { useState } from 'react';

const useChoices = (openItem) => { 
    const [ choice, setChoices ] = useState(openItem.orderChoice ? openItem.orderChoice : '');    

    const doChoice = (event) => {
        setChoices(event.target.value)
    }
    return {choice, doChoice};
}

export default useChoices;