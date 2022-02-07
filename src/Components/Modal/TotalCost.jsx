import React from "react";
import { ElemWrapper } from "../Supp/SuppComp/SuppComp";
import { calcTotalCost, localizeCost } from "../Supp/SuppFunc/SuppFunctions";

const TotalCost = ({price, amount}) => {
    return (
        <ElemWrapper>
            <span>ИТОГ</span>
            <span>{localizeCost(calcTotalCost(price, amount))}</span>
        </ElemWrapper>

    );
}

export default TotalCost;