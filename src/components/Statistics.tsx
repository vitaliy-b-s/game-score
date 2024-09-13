import { statistics } from '../../public/data/statistics';

function Statistics() {
  return (
    <div className="text-slate-200 bg-gray-950 p-5 rounded-xl fixed top-36">
      <span className="text-6xl xl:text-5xl 2xl:text-6xl">STATISTICS</span>
      <div className="w-full flex justify-center text-2xl">TOTAL SCORE</div>
      <div className="w-full flex flex-row justify-between text-xl">
        <span>{statistics.team1.totalScores}</span>
        <span>{statistics.team2.totalScores}</span>
      </div>
      <div className="w-full flex justify-center text-2xl">TOTAL KILLS</div>
      <div className="w-full flex flex-row justify-between text-xl">
        <span>{statistics.team1.totalKills}</span>
        <span>{statistics.team2.totalKills}</span>
      </div>
      <div className="w-full flex justify-center text-2xl">TOTAL DEATHS</div>
      <div className="w-full flex flex-row justify-between text-xl">
        <span>{statistics.team1.totalDeath}</span>
        <span>{statistics.team2.totalDeath}</span>
      </div>
    </div>
  );
}

export default Statistics;
