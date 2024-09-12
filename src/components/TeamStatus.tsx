import { TeamStatus } from '../types/TeamStatus';

interface TeamStatusProps {
  status: TeamStatus;
}
function TeamStatusComponent({ status }: TeamStatusProps) {
  if (status === TeamStatus.DEFEAT) {
    return <div className="text-7xl animate-bleed">{TeamStatus.DEFEAT}</div>;
  }

  return <div className="text-7xl animate-victory">{TeamStatus.VICTORY}</div>;
}

export default TeamStatusComponent;
