import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderLinkProps {
  to: string;
  label: string;
  isScrolled: boolean;
  isLandingPage: boolean;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ to, label, isScrolled, isLandingPage }) => (
  <Link
    to={to}
    className={`${
      isLandingPage
        ? isScrolled
          ? 'text-gray-600 hover:text-indigo-600'
          : 'text-white hover:text-indigo-200'
        : 'text-gray-600 hover:text-indigo-600'
    } transition-colors`}
  >
    {label}
  </Link>
);

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isLandingPage
        ? isScrolled
          ? 'bg-white shadow-sm'
          : 'bg-transparent'
        : 'bg-gray-100 bg-opacity-80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className={`text-2xl font-semibold ${
          isLandingPage
            ? isScrolled
              ? 'text-indigo-600'
              : 'text-white'
            : 'text-indigo-600'
        }`}>
          SkinScience
        </Link>
        <nav className="hidden md:flex space-x-4">
          <HeaderLink to="/skin-assessment" label="Assessment" isScrolled={isScrolled} isLandingPage={isLandingPage} />
          <HeaderLink to="/daily-routine" label="Routine" isScrolled={isScrolled} isLandingPage={isLandingPage} />
          <HeaderLink to="/learn" label="Learn" isScrolled={isScrolled} isLandingPage={isLandingPage} />
          <HeaderLink to="/store" label="Store" isScrolled={isScrolled} isLandingPage={isLandingPage} />
          <HeaderLink to="/track-progress" label="Progress" isScrolled={isScrolled} isLandingPage={isLandingPage} />
          <HeaderLink to="/community" label="Community" isScrolled={isScrolled} isLandingPage={isLandingPage} />
        </nav>
      </div>
    </header>
  );
};

export default Header;