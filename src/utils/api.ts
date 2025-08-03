// src/utils/api.ts

import axios from 'axios';

// The interface remains the same
export interface AnalysisResult {
    monetization: { status: string; checked: boolean };
    tags: string[];
    channelId: string;
    thumbnail: string;
    earnings: { low: string; high: string };
    shadowban: { status: string; checked: boolean };
    channelInfo: {
        name: string;
        subscribers: string;
        totalViews: string;
        videoCount: string;
    };
}

// =========================================================================
// == IMPORTANT: Replace this with the URL of your new backend service on Render ==
// =========================================================================
const BACKEND_URL = 'https://your-backend-name.onrender.com'; // Example: https://yt-teacher-backend.onrender.com

// This is the new, real function that calls your backend
export const analyzeUrl = async (url: string): Promise<AnalysisResult> => {
    if (!url) {
        throw new Error('URL cannot be empty.');
    }

    try {
        // We call our backend API and pass the YouTube URL as a query parameter
        const response = await axios.get(`${BACKEND_URL}/api/analyze`, {
            params: {
                url: url, // Pass the youtube url to the backend
            },
        });

        // The backend returns the data, and we send it back to the component
        return response.data;

    } catch (error: any) {
        // If our backend sends an error, we show it to the user
        if (error.response && error.response.data && error.response.data.error) {
            throw new Error(error.response.data.error);
        }
        // For other network errors
        throw new Error('Could not connect to the analysis service. Please try again later.');
    }
};