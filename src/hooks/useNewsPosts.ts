import { useEffect, useState } from 'react';
import NewsPosts from '@/data/NewsPosts.json';
import {NewsItem} from '@/types/index';

export function useNewsPosts() {
    const [data, setData] = useState<NewsItem[] | null>(null);
    const [isLoading, setLoading] = useState(true);
    // const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setLoading(true);
        // Simulate a data fetch
        setTimeout(() => {
            setData(NewsPosts);
            setLoading(false);
        }, 1000);
    }, []);

    return { NewsPosts:data, isLoading, error:null };
}