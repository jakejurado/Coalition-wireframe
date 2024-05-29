import React, { useState } from "react";
import BloodPressureChart from "./BloodPressureChart";
import style from "@/styles/patients/Chart.module.css";
import Image from "next/image";
import dropdownIcon from '../../../public/icons/dropdownArrow/expand_more_FILL0_wght300_GRAD0_opsz24.svg';
import Levels from "./Levels";

export default function ChartComponent({diagnosisHistory}) {
    const [months, setMonths] = useState(6);

    const {systolic, diastolic } = diagnosisHistory[0]?.blood_pressure;
    

    return (
        <div id={style.chartCover}>
            <div id={style.colLeft}>
                <div id={style.chartHeader}>
                    <h3>Blood Pressure</h3>
                    <div id={style.selectHistory}>
                        <p>last 6 months</p>
                        <Image src={dropdownIcon} alt="dropdown icon" width={10} height={6} />
                    </div>
                </div>
                <BloodPressureChart diagnosisHistory={diagnosisHistory.slice(0, months)} />
            </div>
            <div id={style.colRight}>
                <div className={`${style.legend} ${style.baseLine}`}>
                    <div className={style.pinkDot}></div>
                    <h4>Systolic</h4>
                    <p className={style.value}>{systolic.value}</p>
                    <Levels levels={systolic.levels} />
                </div>
                <div className={style.legend}>
                    <div className={style.purpleDot}></div>
                    <h4>Diastolic</h4>
                    <p className={style.value}>{diastolic.value}</p>
                    <Levels levels={diastolic.levels} />
                </div>

            </div>
        </div>
    )
}
