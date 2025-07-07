import { useEffect, useState } from 'react';
import TeamMembersDetails from '@/data/TeamMembersDetails.json';
import {TeamMember} from '@/types/index';

export function useTeamMembersDetails() {
    const [data, setData] = useState<TeamMember[] | null>(null);
    const [isLoading, setLoading] = useState(true);
    // const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setLoading(true);
        // Simulate a data fetch
        setTimeout(() => {
            setData(TeamMembersDetails);
            setLoading(false);
        }, 1000);
    }, []);

return { data, isLoading, error: null };
}