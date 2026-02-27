import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';
function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [city, setCity] = useState('London');
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || 'a6fa19e78dac342a17035ab1bd113e47';
    const fetchWeather = async (cityName) => {
        if (!cityName.trim()) {
            setError('Please enter a city name');
            return;
        }
        setLoading(true);
        setError('');
        try {
            const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                params: { q: cityName, appid: API_KEY, units: 'metric' }
            });
            const data = response.data;
            setWeatherData({
                city: data.name,
                country: data.sys.country,
                temperature: Math.round(data.main.temp),
                feelsLike: Math.round(data.main.feels_like),
                condition: data.weather[0].main,
                humidity: data.main.humidity,
                windSpeed: Math.round(data.wind.speed * 3.6),
                pressure: data.main.pressure,
                visibility: (data.visibility / 1000).toFixed(1),
                icon: data.weather[0].icon
            });
        }
        catch (err) {
            setError('City not found. Please try another.');
            setWeatherData(null);
        }
        finally {
            setLoading(false);
        }
    };
    const handleSearch = (e) => {
        e.preventDefault();
        fetchWeather(city);
    };
    const handleInputChange = (e) => {
        setCity(e.target.value);
    };
    return (_jsxs("div", { className: "app", children: [_jsxs("header", { className: "app-header", children: [_jsx("h1", { children: "Yudh Weather App" }), _jsx("p", { className: "subtitle", children: "Get current weather anywhere in the world" }), _jsx("p", { className: "subtitle", children: "Developde by SUDHIR" })] }), _jsxs("main", { className: "app-main", children: [_jsx(SearchBar, { city: city, onInputChange: handleInputChange, onSubmit: handleSearch }), error && _jsx("div", { className: "error-message", children: error }), loading && _jsx(LoadingSpinner, {}), weatherData && !loading && _jsx(WeatherCard, { data: weatherData }), !weatherData && !loading && !error && (_jsx("div", { className: "initial-message", children: _jsx("p", { children: "Search for a city to see the weather" }) }))] }), _jsx("footer", { className: "app-footer", children: _jsx("p", { children: "Weather data provided by OpenWeatherMap" }) })] }));
}
export default App;
