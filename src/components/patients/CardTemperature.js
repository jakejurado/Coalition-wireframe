import React from "react";
import Image from "next/image";
import tempImg from "../../../public/icons/temperature.svg";
import style from "@/styles/patients/Card.module.css";
import Levels from "./Levels";

export default function CardTemperature(temperature) {
    const { value, levels } = temperature;
    return (
        <div id={style.card} className={style.tempBackground}>
            <Image src={tempImg} alt="Temperature" width={96} height={96}/>
            <ul>
                <li id={style.title}>Temperature</li>
                <li id={style.value}>{value} bpm</li>
                <Levels levels={levels} />
            </ul>
            
        </div>
    )
}