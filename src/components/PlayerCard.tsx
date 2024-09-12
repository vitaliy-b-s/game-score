import { useState } from 'react';
import team1 from '../../public/images/team1.jpg';
import team2 from '../../public/images/team2.jpg';
import Tooltip from './Tooltip';
export interface Player {
  nickname: string;
  status: string;
  score: number;
  kills: number;
  deaths: number;
  team?: string;
}
function PlayerCard({ nickname, status, score, kills, deaths, team }: Player) {
  const [isTooltipShown, setIsTooltipShown] = useState<boolean>(false);

  const handleOpenTooltip = () => {
    setIsTooltipShown(true);
  };

  const handleTooltipClose = () => {
    setIsTooltipShown(false);
  };
  return (
    <div
      className={`w-36 h-auto border-2 ${status === 'Dead' ? 'border-red-600' : 'border-green-600'} rounded-xl bg-gray-950 p-2 text-white cursor-pointer relative`}
      onMouseEnter={handleOpenTooltip}
      onMouseLeave={handleTooltipClose}
    >
      <div className="max-h-full max-w-full flex flex-col">
        <div
          className={`w-full flex ${status === 'Dead' ? 'text-red-600' : 'text-green-600'} flex-row justify-center`}
        >
          {nickname}
        </div>
        <img src={team === 'alpha' ? team1 : team2} className="rounded-xl" />
        <div
          className={`w-full ${status === 'Dead' ? 'text-red-600' : 'text-green-600'} flex flex-row justify-center`}
        >
          {status}
        </div>
        <div className="w-full flex flex-row justify-center">
          Total Score: {score}
        </div>
      </div>
      {isTooltipShown && <Tooltip kills={kills} deaths={deaths} />}
    </div>
  );
}

export default PlayerCard;
