// TimerContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const initialTime = Cookies.get('remainingTime') || 3* 60 * 60; // 3 hours in seconds
  const [remainingTime, setRemainingTime] = useState(Number(initialTime));

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const navigate = useNavigate()
  useEffect(() => {
    // Save remaining time to Cookies
    Cookies.set('remainingTime', remainingTime);
    if(remainingTime === 0) {
      navigate("/finish")
    }
  }, [remainingTime]);

  return (
    <TimerContext.Provider value={{ remainingTime, formatTime }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
};
