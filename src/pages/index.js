import Sidebar from "@/components/patients/Sidebar";
import style from "@/styles/patients/Patients.module.css";
import PatientSummary from "@/components/patients/PatientSummary";
import LabResults from "@/components/patients/LabResults";
import DiagnosticList from "@/components/patients/DiagnosticList";
import DiagnosticHistory from "@/components/patients/DiagnosticHistory";
import { usePatient } from "@/hooks/usePatient";

export default function Patients() {
  const { patient, error, loading } = usePatient();
  if (!patient) return (
    <div id={style.noDataCover}>
      <Sidebar />
      <div id={style.noData}>
        <p>{loading ? 'Loading...' : 'Please Select a Patient'}</p>
      </div>
    </div>
  )

    return (
      <div id={style.patients}>
        <Sidebar />
        <div id={style.patientsCenterCol}>
          <DiagnosticHistory />
          <DiagnosticList  />
        </div>
        <div id={style.patientsRightCol}>
          <PatientSummary />
          <LabResults />
        </div>
      </div>
    );
  }