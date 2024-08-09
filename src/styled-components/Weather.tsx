import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface WeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
}

const fetchWeatherData = async (): Promise<WeatherData> => {
  const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current=temperature_2m,rain,weather_code&hourly=temperature_2m,rain,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo');
  const data = await response.json();
  return data;
};

const Card = styled.div`
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
  text-align: center;
`;

const Wave = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  background: transparent;
  overflow: hidden;
  border-radius: 15px;

  &::before {
    content: '';
    position: absolute;
    top: -75px;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.5) 20%, transparent 20%);
    animation: wave 5s infinite linear;
  }

  @keyframes wave {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const WeatherCard: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  
    useEffect(() => {
      const getData = async () => {
        const data = await fetchWeatherData();
        setWeatherData(data);
      };
      getData();
    }, []);
  
    if (!weatherData) {
      return <div>Loading...</div>;
    }
  
    return (
      <Card>
        <h2>Weather Information</h2>
        <p>Latitude: {weatherData.latitude}</p>
        <p>Longitude: {weatherData.longitude}</p>
        <p>Timezone: {weatherData.timezone}</p>
        <Wave />
      </Card>
    );
  };
  
  export default WeatherCard;