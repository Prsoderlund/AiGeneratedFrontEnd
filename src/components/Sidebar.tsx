import React from 'react';
import { Calendar as CalendarIcon, Dribbble, Activity } from 'lucide-react';

interface SidebarProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedDate, setSelectedDate }) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();

  const renderCalendar = () => {
    const calendar = [];
    for (let i = -3; i <= 3; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const isSelected = date.toDateString() === selectedDate.toDateString();

      calendar.push(
        <button
          key={i}
          className={`flex flex-col items-center p-2 rounded-lg ${
            isSelected
              ? 'bg-orange-500 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
          onClick={() => setSelectedDate(date)}
        >
          <span className="text-sm">{daysOfWeek[date.getDay()]}</span>
          <span className="text-lg font-bold">{date.getDate()}</span>
        </button>
      );
    }
    return calendar;
  };

  return (
    <aside className="w-64 bg-gray-800 p-4 flex flex-col">
      <div className="flex items-center mb-6">
        <CalendarIcon className="text-orange-500 mr-2" size={24} />
        <h2 className="text-xl font-bold">Schedule</h2>
      </div>
      <div className="grid grid-cols-7 gap-2 mb-6">{renderCalendar()}</div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
          <Dribbble size={20} />
          <span>Football</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
          <Activity size={20} />
          <span>Other Sports</span>
        </button>
      </div>
      <div className="mt-auto">
        <h3 className="text-lg font-semibold mb-2">Recommended</h3>
        {/* Add recommended match cards here */}
      </div>
    </aside>
  );
};

export default Sidebar;