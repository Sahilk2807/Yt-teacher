import { Mail } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="max-w-2xl mx-auto bg-secondary p-8 rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-bold mb-4 text-primary">Contact Us</h2>
      <p className="mb-6 text-gray-light">
        Have feedback, suggestions, or a partnership inquiry? We'd love to hear from you!
      </p>
      
      <div className="flex items-center justify-center gap-4 bg-gray-dark p-4 rounded-lg">
        <Mail className="text-primary" size={24} />
        <a 
          href="mailto:officialsahilkamble@gmail.com"
          className="text-lg font-medium text-light hover:text-primary transition-colors"
        >
          officialsahilkamble@gmail.com
        </a>
      </div>
      
      <p className="mt-6 text-sm text-gray-light">
        We typically respond within 2-3 business days. Thank you for reaching out!
      </p>
    </div>
  );
};

export default ContactPage;