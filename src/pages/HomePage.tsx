import { useState } from 'react';
import { Search, Youtube, BarChart, Tags, ImageDown, Ban, DollarSign, Clapperboard, Eye } from 'lucide-react';
import AdComponent from '../components/AdComponent';
import { analyzeUrl, AnalysisResult } from '../utils/api';
import Skeleton from '../components/Skeleton';

const HomePage = () => {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<AnalysisResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) {
            setError('Please enter a YouTube video or channel URL.');
            return;
        }
        setLoading(true);
        setError(null);
        setResults(null);
        try {
            const data = await analyzeUrl(url);
            setResults(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    
    const tools = [
      { name: 'Monetization Checker', icon: DollarSign },
      { name: 'Tag Extractor', icon: Tags },
      { name: 'Thumbnail Downloader', icon: ImageDown },
      { name: 'Channel ID Finder', icon: Clapperboard },
      { name: 'Earnings Calculator', icon: BarChart },
      { name: 'Shadowban Detector', icon: Ban },
      { name: 'Data Viewer', icon: Eye },
    ];
    
    const nativeAdCode = `<script async="async" data-cfasync="false" src="//researchinvariablekazan.com/72c3726e46e27c896aadd681bba39035/invoke.js"></script>
<div id="container-72c3726e46e27c896aadd681bba39035"></div>`;

    return (
        <div className="space-y-16">
            <section className="text-center pt-8 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">The Ultimate <span className="text-primary">YouTube</span> ToolKit</h2>
                <p className="text-lg text-gray-light max-w-2xl mx-auto">Analyze any YouTube channel or video. Check monetization, extract tags, download thumbnails, and much more—for free.</p>
            </section>

            <section className="max-w-2xl mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center bg-secondary rounded-full shadow-lg p-2 gap-2">
                        <Youtube className="text-gray-light ml-3" />
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Enter YouTube Video or Channel URL..."
                            className="w-full bg-transparent focus:outline-none text-light placeholder-gray-light"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-shrink-0 flex items-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-500 disabled:cursor-not-allowed"
                        >
                            <Search size={20} />
                            <span>{loading ? 'Analyzing...' : 'Analyze'}</span>
                        </button>
                    </div>
                </form>
            </section>
            
            <div className="max-w-4xl mx-auto flex justify-center">
                 <AdComponent adKey="after-search-ad" adCode={nativeAdCode} className="min-h-[100px]" />
            </div>

            <section className="max-w-4xl mx-auto">
                {loading && <ResultsSkeleton />}
                {error && <div className="bg-red-900/50 border border-primary text-red-300 px-4 py-3 rounded-lg text-center">{error}</div>}
                {results && <ResultsDisplay results={results} />}
            </section>

            <section>
                 <h3 className="text-3xl font-bold text-center mb-8">Our Tools</h3>
                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {tools.map((tool) => (
                        <div key={tool.name} className="bg-secondary p-6 rounded-lg text-center flex flex-col items-center justify-center gap-3 transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer shadow-lg hover:shadow-primary/50">
                            <tool.icon className="text-primary" size={32} />
                            <h4 className="font-semibold">{tool.name}</h4>
                        </div>
                    ))}
                </div>
            </section>
            
            <section className="max-w-4xl mx-auto bg-secondary p-8 rounded-lg">
                <h3 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                   <FAQItem title="What is YouTube ToolKit?" content="YouTube ToolKit is a free web app that offers tools like monetization check, tag extractor, image downloader, and shadowban detector for any public YouTube channel." />
                   <FAQItem title="How does the Monetization Checker work?" content="It analyzes public channel metadata to see if a channel has the monetization feature enabled. This is an estimate, not a guarantee from YouTube." />
                   <FAQItem title="Is it safe to use?" content="Yes! No login or personal information is required. The tool is 100% safe, fast, and secure as it only uses publicly available data." />
                   <FAQItem title="Can I use this on mobile?" content="Absolutely. It’s fully responsive and optimized for Android, iOS, and all major browsers." />
                </div>
                <div className="mt-8 flex justify-center">
                    <AdComponent adKey="faq-ad" adCode={nativeAdCode} className="min-h-[100px]" />
                </div>
            </section>
        </div>
    );
};

// Sub-components for HomePage
const ResultsSkeleton = () => (
  <div className="bg-secondary p-6 rounded-lg shadow-xl space-y-4">
    <Skeleton className="h-8 w-3/4" />
    <div className="space-y-3 pt-4">
      <Skeleton className="h-5 w-1/2" />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-2/3" />
      <Skeleton className="h-5 w-1/2" />
    </div>
  </div>
);

const ResultsDisplay = ({ results }: { results: AnalysisResult }) => (
  <div className="bg-secondary p-6 rounded-lg shadow-xl animate-fade-in">
    <h3 className="text-2xl font-bold mb-4">Analysis for: <span className="text-primary">{results.channelInfo.name}</span></h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
      <p><strong>Monetization:</strong> <span className="text-gray-light">{results.monetization.status}</span></p>
      <p><strong>Shadowban Status:</strong> <span className="text-gray-light">{results.shadowban.status}</span></p>
      <p><strong>Subscribers:</strong> <span className="text-gray-light">{results.channelInfo.subscribers}</span></p>
      <p><strong>Total Views:</strong> <span className="text-gray-light">{results.channelInfo.totalViews}</span></p>
      <p><strong>Total Videos:</strong> <span className="text-gray-light">{results.channelInfo.videoCount}</span></p>
      <p><strong>Channel ID:</strong> <span className="text-gray-light">{results.channelId}</span></p>
      <p><strong>Est. Monthly Earnings:</strong> <span className="text-gray-light">{results.earnings.low} - {results.earnings.high}</span></p>
      <p><strong>Thumbnail:</strong> <a href={results.thumbnail} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View/Download</a></p>
      <div className="sm:col-span-2">
        <p><strong>Tags:</strong> <span className="text-gray-light">{results.tags.join(', ')}</span></p>
      </div>
    </div>
  </div>
);

const FAQItem = ({ title, content }: { title: string; content: string }) => (
    <div className="border-b border-gray-dark pb-4">
        <h4 className="font-semibold text-lg text-light">{title}</h4>
        <p className="text-gray-light mt-1">{content}</p>
    </div>
);


export default HomePage;