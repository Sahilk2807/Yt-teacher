import { Link } from 'react-router-dom';
import AdComponent from './AdComponent';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-gray-light mt-12 border-t border-gray-dark">
      <div className="container mx-auto px-4 py-8">
        <div className="my-6 flex justify-center">
            <p className="text-sm mb-4 text-center">Advertisement</p>
            <AdComponent adKey="footer-ad" adCode={`<script type="text/javascript">
	atOptions = {
		'key' : 'a600fa0f2f837a87527586f5f6a016bd',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//researchinvariablekazan.com/a600fa0f2f837a87527586f5f6a016bd/invoke.js"></script>`} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-bold text-light mb-2">YouTube ToolKit</h3>
            <p className="text-sm">Your all-in-one solution for YouTube analysis and growth.</p>
          </div>
          <div>
            <h3 className="font-bold text-light mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/about-us" className="hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-light mb-2">Contact</h3>
            <p className="text-sm">For inquiries & feedback:</p>
            <a href="mailto:officialsahilkamble@gmail.com" className="text-primary hover:underline text-sm">officialsahilkamble@gmail.com</a>
          </div>
        </div>
        <div className="border-t border-gray-dark mt-8 pt-6 text-center text-sm">
          <p>© {currentYear} YouTube ToolKit. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;