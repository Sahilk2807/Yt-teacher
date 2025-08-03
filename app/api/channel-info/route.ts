// app/api/channel-info/route.ts
import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function POST(request: Request) {
  try {
    const { url } = await request.json();
    if (!url || !(url.includes('youtube.com/') || url.includes('youtu.be/'))) {
      return NextResponse.json({ error: 'Please provide a valid YouTube URL.' }, { status: 400 });
    }

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });

    if (!response.ok) {
        return NextResponse.json({ error: 'Could not fetch YouTube channel data.' }, { status: 500 });
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // 1. Monetization Checker
    const isMonetized = html.includes('"isMonetized":true');

    // 2. Channel ID Finder
    const channelId = $('meta[property="og:url"]').attr('content')?.split('/').pop() || 'Not Found';
    
    // 3. Subscriber Count (for Earnings Calculator)
    const subscriberText = $('span.yt-subscriber-count').first().text() || $('[aria-label*="subscribers"]').first().text();
    
    // 4. Channel Name
    const channelName = $('meta[property="og:title"]').attr('content') || 'Not Found';
    
    // 5. Channel Image
    const channelImage = $('meta[property="og:image"]').attr('content') || 'Not Found';

    // 6. Video Tags & Thumbnail (if it's a video link)
    let videoTags = null;
    let videoThumbnail = null;
    if (url.includes('/watch?v=')) {
        const keywords = $('meta[name="keywords"]').attr('content');
        if(keywords) {
            videoTags = keywords.split(',').map(tag => tag.trim());
        }
        const videoId = new URL(url).searchParams.get('v');
        if (videoId) {
            videoThumbnail = `https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
        }
    }


    return NextResponse.json({
      isMonetized,
      channelId,
      subscriberText,
      channelName,
      channelImage,
      videoTags,
      videoThumbnail,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}