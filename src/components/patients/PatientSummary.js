import React from "react";
import { usePatient } from "@/hooks/usePatient";
import style from "@/styles/patients/Summary.module.css";
import Image from "next/image";
import birthIcon from "../../../public/icons/BirthIcon/BirthIcon@2x.png";
import femaleIcon from "../../../public/icons/FemaleIcon/FemaleIcon@2x.png";
import maleIcon from "../../../public/icons/MaleIcon/MaleIcon.svg";
import insuranceIcon from "../../../public/icons/InsuranceIcon/InsuranceIcon@2x.png";
import phoneIcon from "../../../public/icons/PhoneIcon/PhoneIcon@2x.png";

export default function PatientSummary() {
    const { patient } = usePatient();
    
    const genderIcon = patient.gender === 'Male' ? maleIcon : femaleIcon;

    const formatDisplayDate = (inputDate) => {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        
        const birthDate = new Date(inputDate);
        const year = birthDate.getFullYear();
        const month = months[birthDate.getMonth()];
        const day = birthDate.getDate();
        
        return `${month} ${day}, ${year}`;
    }

    const formatDisplayDateFromYearLast = (inputDate) => {
      const months = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
      ];
      
      const dateParts = inputDate.split("-");
      const year = dateParts[0];
      const month = months[parseInt(dateParts[1], 10) - 1];
      const day = parseInt(dateParts[2], 10);
  
      return `${month} ${day}, ${year}`;
  }
    
    
    const handleClick = () => {
        alert('What does this button do?')
    }
    return (
        <div id={style.patientSummary}>
            <Image id={style.patientPhoto} src={patient.profile_picture} alt='photo of patient' width={200} height={200} />
            <h2>{patient.name}</h2>
            <ul id={style.patientInfo}>
                <li>
                    <Image src={birthIcon} alt='birth icon' width={42} height={42} />
                    <div className={style.patientDetails}>
                        <p>Date Of Birth</p>
                        <p className={style.patientDetailsVars}>{formatDisplayDate(patient.date_of_birth)}</p>
                    </div>
                    
                </li>
                <li>
                    <Image src={genderIcon} alt='phone icon' width={42} height={42} />
                    <div className={style.patientDetails}>
                        <p>Gender</p>
                        <p className={style.patientDetailsVars}>{patient.gender}</p>
                    </div>
                </li>
                <li>
                    <Image src={phoneIcon} alt='phone icon' width={42} height={42} />
                    <div className={style.patientDetails}>
                        <p>Contact Info</p>
                        <p className={style.patientDetailsVars}>{patient.phone_number}</p>
                    </div>
                    
                </li>
                <li>
                    <Image src={phoneIcon} alt='phone icon' width={42} height={42} />
                    <div className={style.patientDetails}>
                        <p>Emergency Contacts</p>
                        <p className={style.patientDetailsVars}>{patient.emergency_contact}</p>
                    </div>
                </li>
                <li>
                    <Image src={insuranceIcon} alt='insurance icon' width={42} height={42} />
                    <div className={style.patientDetails}>
                        <p>Insurance Provider</p>
                        <p className={style.patientDetailsVars}>{patient.insurance_type}</p>
                    </div>
                </li>
            </ul>
            <button onClick={handleClick} id={style.button}>Show All Information</button>
        </div>
    )
}