# Weather App - React

A modern, beautiful weather application built with React, TypeScript, and Vite. Get real-time weather information for any city in the world.

## Features

- 🌍 Search weather for any city worldwide
- 🌡️ Display current temperature and "feels like" temperature
- 💨 Show wind speed, humidity, pressure, and visibility
- 🎨 Beautiful, responsive user interface
- ⚡ Fast performance with Vite
- 📱 Mobile-friendly design
- 🎯 Real-time weather data from OpenWeatherMap API

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Axios** - HTTP client for API calls
- **CSS3** - Modern styling with animations

## Project Structure

```
weather-app/
├── src/
│   ├── components/
│   │   ├── SearchBar.tsx      # Search input component
│   │   ├── WeatherCard.tsx    # Weather display component
│   │   └── LoadingSpinner.tsx # Loading state component
│   ├── App.tsx                # Main app component
│   ├── App.css                # App styling
│   ├── index.css              # Global styles
│   └── main.tsx               # Entry point
├── index.html                 # HTML entry
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
├── vite.config.ts             # Vite config
└── README.md                  # This file
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Get an API key:
   - Go to [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Get your API key from the dashboard

3. Add your API key:
   - Copy `.env.example` to `.env` and replace the placeholder value:
     ```
     VITE_OPENWEATHER_API_KEY=your_real_api_key_here
     ```
   - Vite exposes variables prefixed with `VITE_` to your app; the code already reads this from `import.meta.env.VITE_OPENWEATHER_API_KEY`.

## Running the App

### Development Server
```bash
npm run dev
```
The app will open automatically at `http://localhost:3000`

### Build for Production
```bash
npm run build
```
This generates an optimized build in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

## How to Use

1. Enter a city name in the search box
2. Click the "Search" button or press Enter
3. View the current weather information including:
   - Temperature and "feels like" temperature
   - Weather condition with icon
   - Humidity percentage
   - Wind speed (km/h)
   - Atmospheric pressure
   - Visibility distance

## API Integration

This app uses the **OpenWeatherMap Current Weather API**:
- Endpoint: `https://api.openweathermap.org/data/2.5/weather`
- Units: Metric (Celsius, km/h)
- Response includes: temperature, weather condition, humidity, wind speed, pressure, visibility

## Styling Features

- Gradient background with smooth animations
- Responsive grid layout for weather details
- Hover effects on interactive elements
- Loading spinner animation
- Error message display
- Mobile-optimized design

## Environment Variables

No environment variables are required, but you can enhance the app by:
- Using a `.env` file to store your API key
- Adding more weather endpoints (forecast, air quality, etc.)

## Customization Ideas

- Add 5-day forecast functionality
- Display weather icons based on conditions
- Add geolocation support
- Store favorite cities in localStorage
- Add dark/light theme toggle
- Display UV index and air quality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Credits

Weather data provided by [OpenWeatherMap](https://openweathermap.org/)

---

**Happy weather checking!** 🌤️
