import { useEffect, useState } from 'react';
import FooterDetails from '@/data/FooterDetails.json';

interface link{
        "title": string;
        "url": string;
    }

interface FooterDetails {
    "FooterTagLine": string;
    "twitter": string;
    "github": string;
    "email": string;
    "linkedin": string;
    "MailingAddress": string;
    "quickLinks": link[];
}

export function useFooterDetails() {
    const [data, setData] = useState<FooterDetails | null>(null);
    const [isLoading, setLoading] = useState(true);
    // const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setLoading(true);
        //data fetch
        setTimeout(() => {
            setData(FooterDetails);
            setLoading(false);
        }, 1000);
    }, []);

    return { FooterDetails: data, isLoading, error: null };
}