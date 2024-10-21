import React from 'react';
import { Bell } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Botswana Health</h1>
        <div className="flex-grow flex justify-center">
          <img 
            src="/ministry-of-health-logo.png" 
            alt="Ministry of Health Logo" 
            className="h-16 mx-auto object-cover"
          />
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-4 mr-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/resources" className="hover:underline">Resources</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
          <button className="p-2 hover:bg-green-700 rounded-full">
            <Bell size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
};