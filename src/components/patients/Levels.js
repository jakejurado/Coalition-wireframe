import React from "react";
import Image from "next/image";
import decreaseIcon from '../../../public/icons/lowerIcon/ArrowDown.svg';
import increaseIcon from '../../../public/icons/higherIcon/ArrowUp.svg';
import style from "@/styles/patients/Levels.module.css";


export default function Levels({ levels }) {

    let image;
    if(levels === 'Lower than Average'){
        image = decreaseIcon;
    }
        if(levels === 'Higher than Average'){
    image = increaseIcon;
    }

    return (
        <div className={style.levels}>
            {image && <Image src={image} alt="decrease icon" width={10} height={5} />}
            {levels}
        </div>
    );
}