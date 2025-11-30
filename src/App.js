 import AddAction from './components/AddAction';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import WeeklyChart from './components/WeeklyChart';
import { useState } from 'react';

function App() {
  const [refresh, setRefresh] = useState(false);
  const fetchActions = () => setRefresh(!refresh);

  return (
    <div className="min-h-screen p-4 bg-green-50">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
        🌿 EcoPledge Tracker
      </h1>
      <AddAction fetchActions={fetchActions} />
      <Dashboard refresh={refresh} />
      <Leaderboard />
      <WeeklyChart />
    </div>
  );
}

export default App;
