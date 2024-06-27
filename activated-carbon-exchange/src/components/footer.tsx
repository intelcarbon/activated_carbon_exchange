// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-blue-950 text-blue-200 text-center p-4 absolute bottom-0 left-0 right-0">
      <p>© {new Date().getFullYear()} Activated Carbon Exchange. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
