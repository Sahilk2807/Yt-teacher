const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto bg-secondary p-8 rounded-lg shadow-lg space-y-4 text-gray-light">
      <h2 className="text-3xl font-bold mb-4 text-primary">Terms and Conditions</h2>

      <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>

      <p>By accessing and using YouTube ToolKit (the "Website"), you accept and agree to be bound by the terms and provision of this agreement. </p>

      <h3 className="text-xl font-bold mt-6 text-light">1. Use of Service</h3>
      <p>The tools provided on this Website are for informational purposes only. They rely on publicly available data from YouTube, which can be inaccurate or change at any time. We do not guarantee the accuracy of any information provided.</p>
      
      <h3 className="text-xl font-bold mt-6 text-light">2. Disclaimer of Warranty</h3>
      <p>The Website is provided "as is," without warranty of any kind, express or implied. We do not warrant that the service will be uninterrupted, timely, secure, or error-free.</p>

      <h3 className="text-xl font-bold mt-6 text-light">3. Limitation of Liability</h3>
      <p>In no event shall YouTube ToolKit or its owners be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service.</p>

      <h3 className="text-xl font-bold mt-6 text-light">4. Prohibited Activities</h3>
      <p>You are prohibited from using this site or its content for any unlawful purpose, to solicit others to perform or participate in any unlawful acts, or to infringe upon or violate our intellectual property rights or the intellectual property rights of others.</p>
    </div>
  );
};

export default TermsPage;