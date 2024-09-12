interface TooltipProps {
  kills: number;
  deaths: number;
}
function Tooltip({ kills, deaths }: TooltipProps) {
  return (
    <div className="absolute p-4 bg-gray-800 rounded-xl top-3/4 left-2/4 -translate-x-2/4 z-20 w-28">
      <div>Kills: {kills}</div>
      <div>Deaths: {deaths}</div>
    </div>
  );
}

export default Tooltip;
