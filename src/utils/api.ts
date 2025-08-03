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

export const analyzeUrl = async (url: string): Promise<AnalysisResult> => {
    console.log("Analyzing URL:", url);
    // Simulate network delay
    await new Promise(res => setTimeout(res, 1500));

    // Simulate different results based on URL
    if (url.includes("fail") || url.length < 15) {
        throw new Error("Invalid or unsupported YouTube URL.");
    }

    if (url.includes("private")) {
         throw new Error("Analysis of private channels/videos is not supported.");
    }
    
    // Return mock data
    return {
        monetization: { status: 'Enabled', checked: true },
        tags: ['youtube tools', 'reactjs', 'typescript', 'tailwind css', 'seo', 'web development', 'free tools'],
        channelId: 'UC-lHJZR3Gqxm24_Vd_AJ5Yw',
        thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        earnings: { low: '$500', high: '$8,000' },
        shadowban: { status: 'Not Shadowbanned', checked: true },
        channelInfo: {
            name: 'Example Channel',
            subscribers: '1.2M',
            totalViews: '300M',
            videoCount: '150'
        }
    };
};