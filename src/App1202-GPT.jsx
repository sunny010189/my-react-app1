import React from "react";
import "./App.css";

const WeatherCard = ({ city, forecasts }) => {
  return (
    <div className="city">
      <h3>{city}</h3>
      <div className="forecast">
        {forecasts.map((forecast, index) => (
          <div key={index} className="period">
            <p>
              {forecast.date}
              <br />
              {forecast.timeRange}
            </p>
            <img src={forecast.icon} alt={forecast.condition} />
            <p>
              {forecast.condition}
              <br />
              <span>{forecast.rainProbability}%</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const weatherData = [
    {
      city: "臺北市",
      forecasts: [
        {
          date: "2日",
          timeRange: "上午6:00 ~ 下午6:00",
          condition: "晴時多雲",
          rainProbability: 10,
          icon: "/icons/sun-cloud.png",
        },
        {
          date: "2日",
          timeRange: "下午6:00 ~ 上午6:00",
          condition: "多雲時晴",
          rainProbability: 20,
          icon: "/icons/cloudy-sun.png",
        },
        {
          date: "3日",
          timeRange: "上午6:00 ~ 下午6:00",
          condition: "多雲短暫雨",
          rainProbability: 30,
          icon: "/icons/cloud-rain.png",
        },
      ],
    },
    {
      city: "新北市",
      forecasts: [
        {
          date: "2日",
          timeRange: "上午6:00 ~ 下午6:00",
          condition: "晴時多雲",
          rainProbability: 0,
          icon: "/icons/sun-cloud.png",
        },
        {
          date: "2日",
          timeRange: "下午6:00 ~ 上午6:00",
          condition: "多雲時晴",
          rainProbability: 20,
          icon: "/icons/cloudy-sun.png",
        },
        {
          date: "3日",
          timeRange: "上午6:00 ~ 下午6:00",
          condition: "多雲短暫雨",
          rainProbability: 30,
          icon: "/icons/cloud-rain.png",
        },
      ],
    },
  ];

  return (
    <div className="weather-forecast">
      <h1>36小時天氣預報</h1>
      <h2>三十六小時天氣預報</h2>
      <div className="cities">
        {weatherData.map((data, index) => (
          <WeatherCard
            key={index}
            city={data.city}
            forecasts={data.forecasts}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

// useEffect(()=>{
//   (async()=>{
//     const data = await axios.get('./F-C0032-001.json');
//     const{location}=data.data.cwaopendata.dataset;

//   })
// },[])
