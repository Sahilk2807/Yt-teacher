// app/monetization-checker/page.tsx
'use client';
import { useState } from 'react';
import Loading from './loading'; // Import the skeleton screen

// Define the structure of the data we expect from the API
interface ChannelInfo {
  isMonetized: boolean;
  channelId: string;
  subscriberText: string;
  channelName: string;
  channelImage: string;
}

export default function MonetizationCheckerPage() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<ChannelInfo | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch('/api/channel-info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'An error occurred.');
      }

      const result: ChannelInfo = await response.json();
      setData(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">YouTube Monetization Checker</h1>
      <p className="text-center text-gray-600 mb-8">
        Enter a YouTube channel URL to check if it's part of the YouTube Partner Program (YPP).
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-8">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://www.youtube.com/@MrBeast"
          required
          className="flex-grow p-3 border rounded-md focus:ring-2 focus:ring-red-500 outline-none transition-shadow"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-red-600 text-white font-bold py-3 px-6 rounded-md hover:bg-red-700 transition-colors disabled:bg-gray-400"
        >
          {isLoading ? 'Checking...' : 'Check Status'}
        </button>
      </form>

      {isLoading && <Loading />}
      
      {error && <div className="text-center p-4 bg-red-100 text-red-700 rounded-md">{error}</div>}

      {data && (
        <div className="bg-white shadow-lg rounded-lg p-6 animate-fade-in">
          <div className="flex items-center gap-4 mb-4">
             <img src={data.channelImage} alt={data.channelName} className="w-16 h-16 rounded-full" />
             <div>
                <h2 className="text-2xl font-bold">{data.channelName}</h2>
                <p className="text-gray-500">{data.subscriberText}</p>
             </div>
          </div>
          <div className={`p-4 rounded-md text-center text-lg font-semibold ${
              data.isMonetized 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
            {data.isMonetized 
              ? '✅ This channel is likely MONETIZED.' 
              : '❌ This channel is likely NOT MONETIZED.'
            }
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <p><strong>Channel ID:</strong> {data.channelId}</p>
          </div>
        </div>
      )}
    </div>
  );
}