// NewsContextProvider.js
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const NewsContext = createContext();

export const NewsContextProvider = ({ children }) => {
  const [data, setData] = useState(); // Initialize with an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?sortBy=publishedAt&country=us&apiKey=54b7e3786dd240109009fb3e41d8e8a5`
        );
     //   console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once when the component mounts

  return (
    <NewsContext.Provider value={data}>
      {children}
    </NewsContext.Provider>
  );
};
