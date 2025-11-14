import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar({ close }) {
  const [query, setQuery] = useState('');
  const [plants, setPlants] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Load plants from AllCategory data (JSON or API)
  useEffect(() => {
    fetch('/All.json')
      .then(res => res.json())
      .then(data => setPlants(data))
      .catch(err => console.error(err));
  }, []);

  // Filter plants as user types
  useEffect(() => {
    if (!query.trim()) {
      setFiltered([]);
      return;
    }
    const result = plants.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
    setFiltered(result);
  }, [query, plants]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleClick = (id) => {
    // Navigate to the plant detail page
    navigate(`/plant/${id}`);
    close(); // close search bar
  };

  return (
    <div className="flex items-center bg-[#1f1f1f] border hover:border-2 hover:border-green-700  rounded-lg px-2 py-1">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search plants..."
        className="w-full bg-transparent text-white outline-none placeholder-gray-400"
      />
      <button onClick={close} className="text-white ml-2">&times;</button>

      {filtered.length > 0 && (
        <div className="absolute top-12 right-6 bg-[#141414] rounded-xl shadow-md w-80 max-h-80 overflow-y-auto p-2 z-50">
          {filtered.map(p => (
            <div
              key={p.id}
              className="flex items-center gap-2 p-2 hover:bg-green-700 rounded-lg cursor-pointer"
              onClick={() => handleClick(p.id)}
            >
              <img src={p.img} alt={p.name} className="w-12 h-12 object-cover rounded-md" />
              <span className="text-white">{p.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
