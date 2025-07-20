import { useEffect, useState } from 'react';
import AlumniData from '@/data/AlumniMembers.json';
import {AlumniMember} from '@/types/index';

export function useAlumni() {
    const [data, setData] = useState<AlumniMember[] | null>(null);
    const [isLoading, setLoading] = useState(true);
    // const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setLoading(true);
        // Simulate a data fetch
        setTimeout(() => {
            setData(AlumniData);
            setLoading(false);
        }, 1000);
    }, []);

    return { AlumniData:data, isLoading,error: null };
}