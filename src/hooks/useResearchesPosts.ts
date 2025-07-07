import { useEffect, useState } from 'react';
import ResearchPosts from '@/data/ResearchesPosts.json';
import {ResearchProject} from '@/types/index';

export function useResearchPosts() {
    const [data, setData] = useState<ResearchProject[] | null>(null);
    const [isLoading, setLoading] = useState(true);
    // const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setLoading(true);
        // Simulate a data fetch
        setTimeout(() => {
            setData(ResearchPosts);
            setLoading(false);
        }, 1000);
    }, []);

    return { ResearchPosts:data, isLoading, _error:null };
}