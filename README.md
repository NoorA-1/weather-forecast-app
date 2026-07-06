# Weather Forecast App

A full-stack weather forecast application that allows users to search Lithuanian cities and view current weather with a 5-day forecast.

The app uses a React frontend and a Node.js/Express backend. The backend fetches weather data from the public meteo.lt API, normalizes the response, and sends clean data to the frontend.

## Tech Stack

### Frontend

- React
- Vite
- Material UI
- SCSS
- Axios
- localStorage

### Backend

- Node.js
- Express
- Axios
- dotenv
- CORS
- Vitest
- MongoDB (Mongoose)

### External API

- meteo.lt weather API

## Requirements

Make sure you have installed:

```bash
node -v
npm -v
```

Recommended:

```txt
Node.js 18+
npm 9+
```

## Setup

Clone the project and install dependencies for the backend and frontend.

### Install backend and frontend dependencies

```bash
npm run install:all
```

## Environment Variables

Create a `.env` file inside the `server` folder.

Example:

```env
PORT=5000
NODE_ENV=development
WEATHER_API_BASE_URL=https://api.meteo.lt/v1
```

If you need logging in the MongoDB database, you can also add:

```env
MONGODB_URI=your_mongodb_connection_string
```

## Running the App

### Terminal: Start backend and frontend

```bash
npm run dev
```

The frontend should run on:

```txt
http://localhost:5173
```

and the backend should run on:

```txt
http://localhost:5000
```

Open the frontend URL in the browser.

## Backend API Endpoints

### Health check

```http
GET /api/health
```

Example:

```txt
http://localhost:5000/api/health
```

### Get places

```http
GET /api/places
```

Example:

```txt
http://localhost:5000/api/places
```

### Get weather forecast

```http
GET /api/weather?placeCode=vilnius
```

Example:

```txt
http://localhost:5000/api/weather?placeCode=vilnius
```

## Running Tests

### Backend tests

```bash
cd server
npm test
```

### Frontend tests

```bash
cd client
npm test
```

## Weather Data Source

Weather data is provided by the meteo.lt API.

```txt
https://api.meteo.lt
```

## Icon Attribution

Weather icons are from the amCharts weather icon set.

```txt
Weather icons by amCharts.
Licensed under Creative Commons Attribution 4.0.
```
