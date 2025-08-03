import { Link, NavLink } from 'react-router-dom';
import { Youtube } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-secondary shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Youtube className="text-primary" size={32} />
          <h1 className="text-xl font-bold text-light">YouTube ToolKit</h1>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={({ isActive }) => `transition-colors ${isActive ? "text-primary font-medium" : "text-gray-light hover:text-light"}`}>Home</NavLink>
          <NavLink to="/about-us" className={({ isActive }) => `transition-colors ${isActive ? "text-primary font-medium" : "text-gray-light hover:text-light"}`}>About</NavLink>
          <NavLink to="/contact-us" className={({ isActive }) => `transition-colors ${isActive ? "text-primary font-medium" : "text-gray-light hover:text-light"}`}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;