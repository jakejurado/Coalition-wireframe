import React from "react";
import { usePatient } from "@/hooks/usePatient";
import style from "@/styles/patients/DiagnosticList.module.css";


export default function DiagnosticList() {
    const { patient } = usePatient();

    if(!patient.hasOwnProperty('diagnostic_list')) return null;
    if(!patient.diagnostic_list.length) return null;

    const { diagnostic_list } = patient;

    return(
        <div id={style.diagnosticList}>
            <h2>Diagnostic List</h2>
                <div id={style.diagnosticLabelOutside}>
                    <div className={style.col1}>Problem/Diagnostic</div>
                    <div className={style.col2}>Description</div>
                    <div className={style.col3}>Status</div>
                </div>
            <ul>
                {diagnostic_list.map((diagnostic, index) => (
                    <li id={style.diagnosticItem} key={index}>
                        <div className={style.col1}>{diagnostic.name}</div>
                        <div className={style.col2}>{diagnostic.description}</div>
                        <div className={style.col3}>{diagnostic.status}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
