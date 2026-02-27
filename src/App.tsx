import { useState, ChangeEvent, FormEvent } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import LoadingSpinner from './components/LoadingSpinner'
import './App.css'

interface WeatherData {
  city: string
  country: string
  temperature: number
  feelsLike: number
  condition: string
  humidity: number
  windSpeed: number
  pressure: number
  visibility: string
  icon: string
}

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [city, setCity] = useState('London')
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || 'a6fa19e78dac342a17035ab1bd113e47'

  const fetchWeather = async (cityName: string) => {
    if (!cityName.trim()) {
      setError('Please enter a city name')
      return
    }

    setLoading(true)
    setError('')

    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: { q: cityName, appid: API_KEY, units: 'metric' }
        })
      
      const data = response.data
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
      })
    } catch (err) {
      setError('City not found. Please try another.')
      setWeatherData(null)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetchWeather(city)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Yudh Weather App</h1>
        <p className="subtitle">Get current weather anywhere in the world</p>
        <p className="subtitle">Developde by SUDHIR</p>
      </header>

      <main className="app-main">
        <SearchBar
          city={city}
          onInputChange={handleInputChange}
          onSubmit={handleSearch}
        />

        {error && <div className="error-message">{error}</div>}

        {loading && <LoadingSpinner />}

        {weatherData && !loading && <WeatherCard data={weatherData} />}

        {!weatherData && !loading && !error && (
          <div className="initial-message">
            <p>Search for a city to see the weather</p>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>Weather data provided by OpenWeatherMap</p>
      </footer>
    </div>
  )
}

export default App
