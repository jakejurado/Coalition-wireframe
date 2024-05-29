import Image from 'next/image';
import style from '@/styles/patients/SidebarPatientCard.module.css';
import dotsH from '../../../public/icons/hambergerHorz/more_horiz_FILL0_wght300_GRAD0_opsz24.svg';


export default function SidebarPatientCard({patient, handleClick }){
    const { profile_picture, name, age, gender } = patient

    return(
        <li className={style.patient} onClick={() => handleClick(name)}>
            <Image 
                src={profile_picture} 
                alt={name} 
                className={style.patientImage} 
                width={48}
                height={48}
            />
            <div className={style.patientInfo}>
                <p className={style.patientName}>{name}</p> 
                <p className={style.patientInfoLine}>{gender}, {age}</p>
            </div>
            <div className={style.hamburgerCover}>
                <Image 
                    src={dotsH} 
                    alt="more" 
                    className={style.dotsIcon} 
                />
            </div>
        </li>
    )
}