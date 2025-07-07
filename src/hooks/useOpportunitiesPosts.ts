import { useEffect, useState } from 'react';
import OpportunitiesPosts from '@/data/OpportunitiesPosts.json';
import {OpportunityType} from '@/types/index';

export function useOpportunitiesPosts() {
    const [data, setData] = useState<OpportunityType[] | null>(null);
    const [isLoading, setLoading] = useState(true);
    // const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setLoading(true);
        // Simulate a data fetch
        setTimeout(() => {
            setData(OpportunitiesPosts);
            setLoading(false);
        }, 1000);
    }, []);

    return { OpportunitiesPosts:data, isLoading, error:null };
}