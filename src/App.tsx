import BattleHeader from './components/BattleHeader';
import MainLayout from './layout/MainLayout';
import TableBodyLayout from './layout/TableBodyLayout';
import { AnimatedBackground } from 'animated-backgrounds';

function App() {
  return (
    <MainLayout>
      <AnimatedBackground animationName="matrixRain" />
      <BattleHeader />
      <TableBodyLayout />
    </MainLayout>
  );
}

export default App;
