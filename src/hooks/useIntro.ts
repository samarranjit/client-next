import { useEffect, useState } from 'react';
import IntroData from '@/data/Intros.json';
import {IntroDataType} from '@/types/index';

export function useIntros() {
    const [data, setData] = useState<IntroDataType | null>(null);
    const [isLoading, setLoading] = useState(true);
    // const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setLoading(true);
        // Simulate a data fetch
        setTimeout(() => {
            setData(IntroData);
            setLoading(false);
        }, 1000);
    }, []);

    return { IntroData:data, isLoading,error: null };
}