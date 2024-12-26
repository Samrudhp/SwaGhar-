import React, { useState, useEffect } from 'react';

const DisplayInfo = () => {
  const [povertyData, setPovertyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  
    const getPovertyData = async () => {
      try {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');  // Replace with your API URL
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPovertyData(data);  // Store the fetched data in state
      } catch (err) {
        setError(err.message);  // Handle errors
      } finally {
        setLoading(false);  // Set loading to false after fetching
      }
    };

    getPovertyData();
  }, []);  

  if (loading) return <div className="text-center text-lg">Loading...</div>;
  if (error) return <div className="text-center text-lg text-red-500">Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {povertyData.map((region, index) => (
        <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold text-center text-gray-800">{region.name}</h3>
          <p className="mt-2 text-sm text-gray-600">Poverty Rate: {region.povertyRate}%</p>
          <p className="text-sm text-gray-600">Population: {region.population}</p>
          <p className="text-sm text-gray-600">Location: {region.address.street}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayInfo;
