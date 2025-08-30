import { useEffect, useState } from 'react';
import NewsPosts from '@/data/NewsPosts.json';
import { NewsItem } from '@/types/index';

export function useNewsPosts() {
    const [data, setData] = useState<NewsItem[] | null>(null);
    const [displayedNews, setDisplayedNews] = useState<NewsItem[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [displayedCount, setDisplayedCount] = useState(0);
    
    const INITIAL_LOAD = 3; // Initial number of news to show
    const LOAD_MORE_COUNT = 3; // Number of news to load when "Load More" is clicked
    
    useEffect(() => {
        setLoading(true);
        // Simulate a data fetch
        setTimeout(() => {
            // Sort news in descending order by published date
            const sortedNews = [...NewsPosts].sort((a: NewsItem, b: NewsItem) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateB.getTime() - dateA.getTime(); // Descending order (newest first)
            });
            
            setData(sortedNews);
            // Initially show first 6 news
            setDisplayedNews(sortedNews.slice(0, INITIAL_LOAD));
            setDisplayedCount(INITIAL_LOAD);
            setLoading(false);
        }, 1000);
    }, []);

    const loadMoreNews = () => {
        if (!data) return;
        
        setIsLoadingMore(true);
        
        // Simulate loading delay
        setTimeout(() => {
            const newCount = displayedCount + LOAD_MORE_COUNT;
            const newDisplayedNews = data.slice(0, newCount);
            
            setDisplayedNews(newDisplayedNews);
            setDisplayedCount(newCount);
            setIsLoadingMore(false);
        }, 500);
    };

    const hasMoreNews = data ? displayedCount < data.length : false;
    const totalCount = data ? data.length : 0;

    return { 
        NewsPosts: displayedNews,
        allNewsPosts: data,
        isLoading, 
        isLoadingMore,
        loadMoreNews,
        hasMoreNews,
        displayedCount,
        totalCount,
        error: null 
    };
}