import newsPosts from '@/data/NewsPosts.json';
import { NewsItem } from '@/types';


export function getNewsById(id: string): NewsItem | undefined {
    if (id.trim() === '') {
        console.error("id is an empty string");
        return undefined;
    }
    // Find the news post with the matching id
    id = id.trim(); // Ensure id is a trimmed string
    if (id.length === 0) {
        console.error("id is an empty string after trimming");
        return undefined;
    }
    if (!newsPosts || !Array.isArray(newsPosts)) {
        console.error("newsPosts is not defined or not an array");
        return undefined;
    }
    console.log("Searching for news post with id:", newsPosts.find(post => post._id === id));
    return newsPosts.find(post => post._id === id);
}