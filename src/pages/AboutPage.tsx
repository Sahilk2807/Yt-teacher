const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto bg-secondary p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-primary">About YouTube ToolKit</h2>
      <p className="mb-4 text-gray-light">
        YouTube ToolKit is a free, comprehensive web application designed to empower YouTube creators, marketers, and enthusiasts. Our mission is to provide powerful, easy-to-use tools that offer valuable insights into YouTube channels and videos without requiring any technical expertise or software installation.
      </p>
      
      <h3 className="text-2xl font-bold mt-6 mb-3 text-light">Our Vision</h3>
      <p className="text-gray-light">
        We believe that data should be accessible. By providing tools like the Monetization Checker, Tag Extractor, and Earnings Calculator, we aim to level the playing field, allowing creators of all sizes to understand the YouTube ecosystem better and make informed decisions to grow their channels.
      </p>

      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4 text-light">Pros & Cons</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-gray-light">
            <thead>
              <tr className="bg-gray-dark">
                <th className="border border-gray-600 p-3 text-light">Pros</th>
                <th className="border border-gray-600 p-3 text-light">Cons</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-secondary hover:bg-gray-dark/50">
                <td className="border border-gray-600 p-3">✔ Fast & Lightweight</td>
                <td className="border border-gray-600 p-3">✘ Doesn’t support private channel analysis</td>
              </tr>
              <tr className="bg-secondary hover:bg-gray-dark/50">
                <td className="border border-gray-600 p-3">✔ No login needed</td>
                <td className="border border-gray-600 p-3">✘ Needs internet connection</td>
              </tr>
              <tr className="bg-secondary hover:bg-gray-dark/50">
                <td className="border border-gray-600 p-3">✔ Ad revenue tools included</td>
                <td className="border border-gray-600 p-3">✘ Limited to public YouTube data</td>
              </tr>
               <tr className="bg-secondary hover:bg-gray-dark/50">
                <td className="border border-gray-600 p-3">✔ Free to use</td>
                <td className="border border-gray-600 p-3">✘ Few ads (to keep it free)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;