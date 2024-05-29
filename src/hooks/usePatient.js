import React, { useContext } from 'react';
import { PatientContext } from '@/providers/PatientProvider';

export function usePatient() {
    const context = useContext(PatientContext);
    if(!context) {
        throw new Error('usePatient must be used within a PatientProvider');
    }
    return useContext(PatientContext);
}