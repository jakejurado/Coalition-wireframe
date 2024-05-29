import React from "react";
import Image from "next/image";
import respImg from "../../../public/icons/respiratory_rate.svg";
import style from "@/styles/patients/Card.module.css";
import Levels from "./Levels";

export default function CardRespiratory(respiratory) {
    const { value, levels } = respiratory;
    return (
        <div id={style.card} className={style.respBackground}>
            <Image src={respImg} alt="Respiratory Rate" width={96} height={96}/>
            <ul>
                <li id={style.title}>Respiratory Rate</li>
                <li id={style.value}>{value} bpm</li>
                <Levels levels={levels} />
            </ul>
            
        </div>
    )
}