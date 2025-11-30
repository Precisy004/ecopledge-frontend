import { useState } from 'react';
import { api } from '../api';

const AddAction = ({ fetchActions }) => {
  const [user, setUser] = useState('');
  const [action, setAction] = useState('');
  const [points, setPoints] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || !action) return alert('Please fill all fields');
    await api.post('/actions', { user, action, points });
    setUser(''); setAction(''); setPoints(1);
    fetchActions();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md bg-white mb-6 max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-2 text-green-700">Add Your Eco Action</h2>
      <input placeholder="Your Name" value={user} onChange={e => setUser(e.target.value)} className="m-1 w-full"/>
      <input placeholder="Eco Action" value={action} onChange={e => setAction(e.target.value)} className="m-1 w-full"/>
      <input type="number" value={points} onChange={e => setPoints(e.target.value)} className="m-1 w-24"/>
      <button type="submit" className="mt-2 px-4 py-2 rounded">Add Action</button>
    </form>
  );
};

export default AddAction;

