import researchPosts from '@/data/ResearchesPosts.json';
import { ResearchProject } from '@/types';


export function getResearchById(id: string): ResearchProject | undefined {
    if (id.trim() === '') {
        // console.error("id is an empty string");
        return undefined;
    }
    // Find the news post with the matching id
    id = id.trim(); // Ensure id is a trimmed string
    if (id.length === 0) {
        // console.error("id is an empty string after trimming");
        return undefined;
    }
    if (!researchPosts || !Array.isArray(researchPosts)) {
        // console.error("researchPosts is not defined or not an array");
        return undefined;
    }
    // console.log("Searching for research post with id:", researchPosts.find(post => post._id === id));
    return researchPosts.find(post => post._id === id);
}