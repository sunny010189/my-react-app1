import React from "react";
import "./App.css";
import { CiUmbrella } from "react-icons/ci";
import axios from 'axios';

function App() {
  useEffect(()=>{
    (async()=>{
      const data = await axios.get('https://sunny010189.github.io/my-react-app1/json/F-C0032-001.json');
      console.log(data);
      // const{location}=data.data.cwaopendata.dataset;

    })()
  },[])
  return (
    <>
      <div className="wrap">
        <h2>36小時天氣預報</h2>

        {/* 一列兩欄 */}
        <div className="row">
          <div className="col">
            {/* 卡片樣式 */}
            <div className="card">
              {/* 標題 */}
              <div className="card-city">城市名</div>
              {/* 內容 */}
              <div className="card-body">
                {/*一列三欄 */}
                <div className="row2">
                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6:00 <br />
                      ~ <br />
                      下午6:00 <br />
                    </p>
                    <p>
                      <img src="./public/weather/多雲時晴.svg" alt="" />
                    </p>
                    <p>多雲時晴</p>
                    <p>
                      <CiUmbrella />
                      10%
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* //const WeatherCard = ({ city, forecasts }) => {
//   return (
//     <div className="city">
//       <h3>{city}</h3>
//       <div className="forecast">
//         {forecasts.map((forecast, index) => (
//           <div key={index} className="period">
//             <p>
//               {forecast.date}
//               <br />
//               {forecast.timeRange}
//             </p>
//             <img src={forecast.icon} alt={forecast.condition} />
//             <p>
//               {forecast.condition}
//               <br />
//               <span>{forecast.rainProbability}%</span>
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const weatherData = [
//     {
//       city: "臺北市",
//       forecasts: [
//         {
//           date: "2日",
//           timeRange: "上午6:00 ~ 下午6:00",
//           condition: "晴時多雲",
//           rainProbability: 10,
//           icon: "/icons/sun-cloud.png",
//         },
//         {
//           date: "2日",
//           timeRange: "下午6:00 ~ 上午6:00",
//           condition: "多雲時晴",
//           rainProbability: 20,
//           icon: "/icons/cloudy-sun.png",
//         },
//         {
//           date: "3日",
//           timeRange: "上午6:00 ~ 下午6:00",
//           condition: "多雲短暫雨",
//           rainProbability: 30,
//           icon: "/icons/cloud-rain.png",
//         },
//       ],
//     },
//     {
//       city: "新北市",
//       forecasts: [
//         {
//           date: "2日",
//           timeRange: "上午6:00 ~ 下午6:00",
//           condition: "晴時多雲",
//           rainProbability: 0,
//           icon: "/icons/sun-cloud.png",
//         },
//         {
//           date: "2日",
//           timeRange: "下午6:00 ~ 上午6:00",
//           condition: "多雲時晴",
//           rainProbability: 20,
//           icon: "/icons/cloudy-sun.png",
//         },
//         {
//           date: "3日",
//           timeRange: "上午6:00 ~ 下午6:00",
//           condition: "多雲短暫雨",
//           rainProbability: 30,
//           icon: "/icons/cloud-rain.png",
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="weather-forecast">
//       <h1>36小時天氣預報</h1>
//       <h2>三十六小時天氣預報</h2>
//       <div className="cities">
//         {weatherData.map((data, index) => (
//           <WeatherCard key={index} city={data.city} forecasts={data.forecasts} />
//         ))}
//       </div>
//     </div>
//   );
// };
 */
}
export default App;
