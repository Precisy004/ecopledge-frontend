import { useEffect, useState } from 'react';
import { api } from '../api';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  const fetchLeaders = async () => {
    const res = await api.get('/actions');
    const totals = {};
    res.data.forEach(a => {
      totals[a.user] = (totals[a.user] || 0) + a.points;
    });
    const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1]);
    setLeaders(sorted);
  };

  useEffect(() => { fetchLeaders(); }, []);

  // Badge logic
  const getBadge = (points) => {
    if(points >= 20) return '🏆 Eco Champion';
    if(points >= 10) return '🌟 Eco Hero';
    if(points >= 5) return '💚 Eco Starter';
    return '';
  }

  return (
    <div className="max-w-md mx-auto mt-6 p-4 bg-white rounded shadow-md">
      <h3 className="font-bold text-green-700 mb-2 text-lg">Leaderboard</h3>
      <ol>
        {leaders.map(([user, points], idx) => (
          <li key={idx} className="flex justify-between border-b py-1">
            <span>{user} {getBadge(points)}</span>
            <span className="font-bold text-green-600">{points} pts</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;

