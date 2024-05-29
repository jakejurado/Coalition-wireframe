import { allPatients } from '@/util/patientList';
import React, { createContext, useState, useEffect, useMemo, useCallback } from 'react';

export const PatientContext = createContext(null);

export const PatientProvider = ({children}) => {
	const [patientName, setPatientName] = useState('Jessica Taylor');
	const [patients, setPatients] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/patientData');
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const result = await response.json();
                setPatients(result);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
                setPatients(allPatients)
                setError('Failed to fetch patient data');
            }
        }
        fetchData();
    }, []);

	const patient = useMemo(() => {
        return patients?.find(patient => patient.name === patientName) || null;
    }, [patients, patientName]);
	
	const changePatient = useCallback((name) => {
		setPatientName(name);
	},[setPatientName]);

	const value = useMemo(() => ({
        patient,
        patients,
        loading,
        error,
        changePatient
    }), [patient, patients, loading, error, changePatient]);

    return (
        <PatientContext.Provider value={value}>
            {children}
        </PatientContext.Provider>
    );
};