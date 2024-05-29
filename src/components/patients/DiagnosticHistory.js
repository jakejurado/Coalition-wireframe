import React from "react";
import CardRespiratory from "./CardRespiratory";
import CardTemperature from "./CardTemperature";
import CardHeartRate from "./CardHeartRate";
import ChartComponent from "./ChartComponent";
import { usePatient } from "@/hooks/usePatient";
import style from "@/styles/patients/DiagnosticHistory.module.css";


export default function DiagnosticHistory() {
    const { patient } = usePatient();
    
    if(!patient.hasOwnProperty('diagnosis_history')) return null;
    if(!patient.diagnosis_history.length) return null;
    const {diagnosis_history} = patient;

    const latestDiagnostic = patient.diagnosis_history[0];

    return(
        <div id={style.diagnosticHistory}>
            <h2>Diagnostic History</h2>
            <ChartComponent diagnosisHistory={diagnosis_history}/>
            {/* <div id={style.chart}>
                <BloodPressureChart diagnosisHistory={diagnosisHistory2}/>
            </div> */}
            <div id={style.chartCardsContainer}>
                <CardRespiratory {...latestDiagnostic.respiratory_rate}/>
                <CardTemperature {...latestDiagnostic.temperature}/>
                <CardHeartRate {...latestDiagnostic.heart_rate}/>
            </div>
        </div>
    )
}