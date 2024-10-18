import React from 'react';
import { Match } from '../types';
import MatchCard from './MatchCard';

interface MatchListProps {
  matches: Match[];
  selectedDate: Date;
}

const MatchList: React.FC<MatchListProps> = ({ matches, selectedDate }) => {
  const groupedMatches = matches.reduce((acc, match) => {
    if (!acc[match.competition]) {
      acc[match.competition] = [];
    }
    acc[match.competition].push(match);
    return acc;
  }, {} as Record<string, Match[]>);

  return (
    <div className="space-y-6">
      {Object.entries(groupedMatches).map(([competition, matches]) => (
        <div key={competition}>
          <h2 className="text-xl font-bold mb-4 text-gray-300">{competition}</h2>
          <div className="space-y-4">
            {matches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchList;