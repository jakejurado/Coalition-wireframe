import React from "react";
import Image from "next/image";
import { usePatient } from "@/hooks/usePatient";
import downloadIcon from "../../../public/icons/download/download_FILL0_wght300_GRAD0_opsz24 (1)@2x.png"
import style from "@/styles/patients/LabResults.module.css";

export default function LabResults() {
    const { patient } = usePatient();

    if(!patient.hasOwnProperty('lab_results')) return null;
    if(!patient.lab_results.length) return null;

    const handleClick = (result) => {
        alert(`Downloading ${result}`);
    }

    return (
        <div id={style.labResults}>
            <h2>Lab Results</h2>
            <ul id={style.downloadLinks}>
                {patient.lab_results.map((result, index) => (
                    <li 
                        key={index} 
                        onClick={() => handleClick(result)}
                    >
                        {result}
                        <Image src={downloadIcon} alt="Download" widht={20} height={20}/>
                    
                    </li>
                ))}
            </ul>
        </div>
    );
}
