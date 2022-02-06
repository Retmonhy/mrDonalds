import { useState } from "react";

const useOpenItem = () => {
    const [openItem, setOpenItem] = useState(null);
    return {openItem, setOpenItem};
}

export default useOpenItem