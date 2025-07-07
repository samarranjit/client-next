import { useEffect, useState } from 'react';
import PublicationsPosts from '@/data/PublicationsPosts.json';
import {PublicationItem} from '@/types/index';

export function usePublicationsPosts() {
    const [data, setData] = useState<PublicationItem[] | null>(null);
    const [isLoading, setLoading] = useState(true);
    // const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setLoading(true);
        // Simulate a data fetch
        setTimeout(() => {
        setData(PublicationsPosts);
            setLoading(false);
        }, 1000);
    }, []);

    return { PublicationsPosts: data, isLoading, error : null};
}