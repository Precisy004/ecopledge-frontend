import { useEffect, useState } from 'react';
import { api } from '../api';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import dayjs from 'dayjs';

const WeeklyChart = () => {
  const [data, setData] = useState([]);

  const fetchWeeklyData = async () => {
    const res = await api.get('/actions');
    const actions = res.data;

    // Create past 7 days
    const pastWeek = Array.from({ length: 7 }, (_, i) => {
      const date = dayjs().subtract(6 - i, 'day').format('YYYY-MM-DD');
      return { date, points: 0 };
    });

    actions.forEach(a => {
      const actionDate = dayjs(a.date).format('YYYY-MM-DD');
      const index = pastWeek.findIndex(d => d.date === actionDate);
      if (index !== -1) pastWeek[index].points += a.points;
    });

    setData(pastWeek);
  };

  useEffect(() => {
    fetchWeeklyData();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-6 p-4 bg-white rounded shadow-md">
      <h3 className="text-lg font-bold text-green-700 mb-2">Weekly Points Summary</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="points" stroke="#16a34a" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyChart;
