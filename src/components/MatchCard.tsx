import React from 'react';
import { Match } from '../types';
import { MoreVertical, Star } from 'lucide-react';

interface MatchCardProps {
  match: Match;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'text-green-500';
      case 'FT':
        return 'text-gray-500';
      case 'HT':
        return 'text-yellow-500';
      default:
        return 'text-blue-500';
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-center mb-2">
        <span className={`font-semibold ${getStatusColor(match.status)}`}>
          {match.status}
        </span>
        <div className="flex space-x-2">
          <button className="text-gray-400 hover:text-white">
            <Star size={20} />
          </button>
          <button className="text-gray-400 hover:text-white">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          <span className="font-semibold">{match.homeTeam}</span>
        </div>
        <div className="text-2xl font-bold">
          {match.status !== 'Upcoming' ? `${match.homeScore} - ${match.awayScore}` : 'vs'}
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-semibold">{match.awayTeam}</span>
          <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
        </div>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-sm text-gray-400">
          {match.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
        <button className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm hover:bg-orange-600 transition-colors duration-300">
          Follow
        </button>
      </div>
    </div>
  );
};

export default MatchCard;