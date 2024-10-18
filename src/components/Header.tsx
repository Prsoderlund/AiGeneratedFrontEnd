import React from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeaderProps {
  selectedGender: 'men' | 'women';
  setSelectedGender: (gender: 'men' | 'women') => void;
}

const Header: React.FC<HeaderProps> = ({ selectedGender, setSelectedGender }) => {
  return (
    <header className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Calendar className="text-orange-500" size={24} />
        <button className="text-gray-400 hover:text-white">
          <ChevronLeft size={20} />
        </button>
        <span className="font-bold">Today</span>
        <button className="text-gray-400 hover:text-white">
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="flex space-x-2">
        <button
          className={`px-4 py-2 rounded-full ${
            selectedGender === 'men'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-700 text-gray-300'
          }`}
          onClick={() => setSelectedGender('men')}
        >
          Men's
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            selectedGender === 'women'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-700 text-gray-300'
          }`}
          onClick={() => setSelectedGender('women')}
        >
          Women's
        </button>
      </div>
    </header>
  );
};

export default Header;