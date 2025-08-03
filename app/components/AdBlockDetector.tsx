// app/components/AdBlockDetector.tsx
'use client';
import { useEffect, useState } from 'react';

export default function AdBlockDetector() {
  const [adBlockDetected, setAdBlockDetected] = useState(false);

  useEffect(() => {
    // This is a simple check. More robust methods exist.
    const testAd = document.createElement('div');
    testAd.innerHTML = ' ';
    testAd.className = 'adsbox'; // A common class name targeted by ad blockers
    testAd.style.position = 'absolute';
    testAd.style.top = '-9999px';
    testAd.style.left = '-9999px';
    document.body.appendChild(testAd);

    // Use a timeout to see if the element was removed or hidden by CSS
    const timer = setTimeout(() => {
      if (testAd.offsetHeight === 0) {
        setAdBlockDetected(true);
      }
      testAd.remove();
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (!adBlockDetected) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-2xl text-center max-w-md">
        <h2 className="text-2xl font-bold mb-4">Ad Blocker Detected!</h2>
        <p className="mb-6 text-gray-700">
          "YouTube Teacher" is a free tool supported by ads. To help us keep the lights on and continue providing these tools, please disable your ad blocker (or allowlist our site).
        </p>
        <p className="text-sm text-gray-500">
            After disabling it, please refresh the page. Thank you for your support!
        </p>
      </div>
    </div>
  );
}