import React from "react";
import Image from "next/image";
import heartImg from "../../../public/icons/HeartBPM.svg";
import style from "@/styles/patients/Card.module.css";
import Levels from "./Levels";

export default function CardHeartRate(heart_rate) {
    const { value, levels } = heart_rate;
    return (
        <div id={style.card} className={style.rateBackground}>
            <Image src={heartImg} alt="Temperature" width={96} height={96}/>
            <ul>
                <li id={style.title}>Heart Rate</li>
                <li id={style.value}>{value} bpm</li>
                <Levels levels={levels} />
            </ul>
            
        </div>
    )
}