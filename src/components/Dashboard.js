import { useEffect, useState } from 'react';
import { api } from '../api';

const Dashboard = ({ refresh }) => {
  const [actions, setActions] = useState([]);

  const fetchActions = async () => {
    const res = await api.get('/actions');
    setActions(res.data);
  };

  useEffect(() => { fetchActions(); }, [refresh]);

  const totalPoints = actions.reduce((acc, a) => acc + a.points, 0);

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold text-green-800 mb-2">Total Eco Points: {totalPoints}</h2>
      <ul>
        {actions.map(a => (
          <li key={a._id} className="border-b py-1 flex justify-between">
            <span>{a.user} did "{a.action}"</span>
            <span className="font-bold text-green-600">{a.points} pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

