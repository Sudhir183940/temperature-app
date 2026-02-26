interface WeatherCardProps {
  data: {
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
}

const WeatherCard = ({ data }: WeatherCardProps) => {
  const iconUrl = `https://openweathermap.org/img/wn/${data.icon}@4x.png`

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2 className="city-name">
          {data.city}, {data.country}
        </h2>
        <p className="condition">{data.condition}</p>
      </div>

      <div className="weather-display">
        <img src={iconUrl} alt={data.condition} className="weather-icon" />
        <div className="temperature-display">
          <div className="temperature">{data.temperature}°C</div>
          <div className="feels-like">Feels like {data.feelsLike}°C</div>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail">
          <span className="label">Humidity</span>
          <span className="value">{data.humidity}%</span>
        </div>
        <div className="detail">
          <span className="label">Wind Speed</span>
          <span className="value">{data.windSpeed} km/h</span>
        </div>
        <div className="detail">
          <span className="label">Pressure</span>
          <span className="value">{data.pressure} hPa</span>
        </div>
        <div className="detail">
          <span className="label">Visibility</span>
          <span className="value">{data.visibility} km</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
