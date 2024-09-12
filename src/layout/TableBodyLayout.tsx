import PlayerCard from '../components/PlayerCard';
import TeamStatusComponent from '../components/TeamStatus';
import { TeamStatus } from '../types/TeamStatus';
import { team1 } from '../../public/data/team1';
import { team2 } from '../../public/data/team2';
import Statistics from '../components/Statistics';

function TableBodyLayout() {
  return (
    <div className="flex flex-row justify-between pt-20 px-3">
      <div className="flex flex-col items-center">
        <TeamStatusComponent status={TeamStatus.VICTORY} />
        <div className="w-full grid grid-cols-1 gap-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {team1.map((player) => {
            return <PlayerCard {...player} key={player.nickname} />;
          })}
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <Statistics />
      </div>
      <div className="flex flex-col items-center">
        <TeamStatusComponent status={TeamStatus.DEFEAT} />
        <div className="w-full grid grid-cols-1 gap-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {team2.map((player) => {
            return <PlayerCard {...player} key={player.nickname} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default TableBodyLayout;
