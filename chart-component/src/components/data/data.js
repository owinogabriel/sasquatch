// data.js
const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
};

// a function that simulates a fetch
export const fetchData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000); 
  });
};
