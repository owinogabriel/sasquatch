import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const [chartData, setChartData] = useState(null);
  const [data, setData] = useState([]);  // Initialize with useState([])
  const [loading, setLoading] = useState(true);  // Set loading state correctly

  // Fetching bar data from data.json
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/public/data.json');
        const result = await response.json();

        setData(result);  // Set result from API to state

        const chartData = {
          labels: result.labels,  // Use dynamic labels from API
          datasets: [
            {
              label: 'Weekly Sales',
              data: result.data,  // Use dynamic data from API
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        };

        setChartData(chartData);  // Set the chart data
        setLoading(false);  // Turn off loading when data is ready

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Add a loading indicator
  }

  return (
    <div className='fixed bg-primary w-[35%] h-96 ml-96 mt-5 rounded-2xl'>
      <div className='flex flex-row ml-10 mt-5 text-black text-xl font-bold  top-4'>
        Spending - Last 7 days
      </div>
      <div className='flex '>
        <div className='bg-background w-[12%] h-12 rounded-md mt-48 ml-9'></div>

        {data.length > 0 ? (  // Ensure data is not empty before mapping
          data.map((entry) => (
            <div key={entry.day} className='hidden'>{entry.amount}</div>
          ))
        ) : (
          <p>No data available</p>  // Handle empty data case
        )}
      </div>
    </div>
  );
};

export default BarChart;
