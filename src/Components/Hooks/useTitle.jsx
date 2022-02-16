import { useEffect } from "react";

const useTitle = (openItem) => {

    useEffect(() => {
        document.title = openItem ? openItem.name + ' - Доставка еды по городу Томск' : "MrDonald's Delivery - Доставка еды по городу Томск";
    }, [openItem])

}

export default useTitle;