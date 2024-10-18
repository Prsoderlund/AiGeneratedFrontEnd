import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MatchList from './components/MatchList';
import { Match } from './types';

const App: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedGender, setSelectedGender] = useState<'men' | 'women'>('men');

  // Mock data for matches
  const matches: Match[] = [
    {
      id: 1,
      competition: 'WC Qualifications',
      homeTeam: 'England',
      awayTeam: 'France',
      homeScore: 2,
      awayScore: 1,
      status: 'FT',
      date: new Date(),
    },
    {
      id: 2,
      competition: 'Premier League',
      homeTeam: 'Manchester United',
      awayTeam: 'Liverpool',
      homeScore: 0,
      awayScore: 0,
      status: 'Live',
      date: new Date(),
    },
    // Add more mock matches here
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
        />
        <main className="flex-1 overflow-y-auto p-4">
          <MatchList matches={matches} selectedDate={selectedDate} />
        </main>
      </div>
    </div>
  );
};

export default App;