const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto bg-secondary p-8 rounded-lg shadow-lg space-y-4 text-gray-light">
      <h2 className="text-3xl font-bold mb-4 text-primary">Privacy Policy</h2>
      
      <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
      
      <p>Your privacy is important to us. It is YouTube ToolKit's policy to respect your privacy regarding any information we may collect from you across our website.</p>

      <h3 className="text-xl font-bold mt-6 text-light">1. Information We Collect</h3>
      <p>We do not collect personal data. All tools on this website run in-browser and analyze publicly available data from YouTube. No login or sensitive personal information is ever required or stored.</p>
      
      <h3 className="text-xl font-bold mt-6 text-light">2. How We Use Information</h3>
      <p>Since we do not collect personal information, we do not use it for any purpose. The data you input (YouTube URLs) is used solely for the real-time analysis requested by you and is not stored on our servers.</p>

      <h3 className="text-xl font-bold mt-6 text-light">3. Cookies and Third-Party Services</h3>
      <p>We may use cookies for basic site functionality. Our third-party advertising partner, Adstera, may use cookies to serve personalized ads. These cookies are subject to Adstera's own privacy policy. We do not have access to or control over these cookies.</p>

      <h3 className="text-xl font-bold mt-6 text-light">4. Advertising</h3>
      <p>This site is monetized using ads provided by Adstera. These ads help us keep the service free. Adstera may collect non-personally identifiable information to provide more relevant advertising. Please review the Adstera Privacy Policy for more details.</p>

      <h3 className="text-xl font-bold mt-6 text-light">5. Changes to This Policy</h3>
      <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
    </div>
  );
};

export default PrivacyPolicyPage;