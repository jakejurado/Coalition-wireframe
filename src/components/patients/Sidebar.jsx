import Image from 'next/image';
import style from '@/styles/patients/Sidebar.module.css';
import magnifyglass from '../../../public/icons/search/search_FILL0_wght300_GRAD0_opsz24.svg';
import SidebarPatientCard from './SidebarPatientCard';
import { usePatient } from '@/hooks/usePatient';

export default function Sidebar() {
    const { patients, patient, error, loading, changePatient } = usePatient();
    if (!patient) return (
        <div id={style.sidebar}>
            <div className={style.noData}>
                <p>{loading ? 'Loading...' : 'unable to access database'}</p>
            </div>
        </div>
    )

    const handleClick = (name) => {
        changePatient(name);
    }

    return (
        <div id={style.sidebar}>
            <div className={style.searchContainer}>
                <input 
                    type="text" 
                    className={style.searchInput} 
                    placeholder="Patients" 
                />
                <div className={style.magnifyCover}>
                    <Image 
                        src={magnifyglass} 
                        className={style.searchIcon} 
                        alt="Search" 
                    />
                </div>
            </div>
           
            <ul id={style.patientList}>
                {patients.map((patient, index) => (
                    <SidebarPatientCard 
                        key={patient.name}
                        patient={patient}
                        handleClick={handleClick}
                    />
                ))}
            </ul>
            
        </div>
    )
}