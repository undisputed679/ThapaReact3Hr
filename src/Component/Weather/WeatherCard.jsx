import React, { useEffect, useState } from "react";

function WeatherCard({tempInfo,error}) {
    console.log(error);
    
  const [weatherState, setWeatheState] = useState("");
    const { temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset}=tempInfo;
        
        let sec=sunset;
        let date=new Date(sec*1000);
        let timeStr=`${date.getHours()}:${date.getMinutes()}`
        useEffect(() => {
            if (weathermood) {
              switch (weathermood) {
                case "Clouds":
                  setWeatheState("wi-day-cloudy");
                  break;
                case "Haze":
                  setWeatheState("wi-fog");
                  break;
                case "Clear":
                  setWeatheState("wi-day-sunny");
                  break;
                case "Mist":
                  setWeatheState("wi-dust");
                  break;
        
                default:
                  setWeatheState("wi-day-sunny");
                  break;
              }
            }
          }, [weathermood]);
  return <div>
    {/* {error ? <p>{error}</p> : <p></p> } */}
     <article className='widget'>
        <div className='weatherIcon'>
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className='weatherInfo'>
          <div className='temperature'>
            <span>{temp}&deg;</span>
          </div>
          <div className='description'>
            <div className='weatherCondition'>{weathermood}</div>
            <div className='place'>{name} , {country} </div>
          </div>
        </div>
        <div className='date'>{new Date().toLocaleString()}</div>
        {/* our four column section */}
        <div className='extra-temp'>
          <div className='temp-info-minmax'>
            <div className='two-sided-section'>
              <p>
                <i className={'wi wi-sunset'}></i>
              </p>
              <p className='extra-info-leftSide'>
                {timeStr} PM
                Sunset
              </p>
            </div>
            <div className='two-sided-section'>
              <p>
                <i className={'wi wi-humidity'}></i>
              </p>
              <p className='extra-info-leftSide'>
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>
          <div className='weather-extra-info'>
            <div className='two-sided-section'>
              <p>
                <i className={'wi wi-rain'}></i>
              </p>
              <p className='extra-info-leftSide'>
                {pressure} <br />
                Pressure
              </p>
            </div>
            <div className='two-sided-section'>
              <p>
                <i className={'wi wi-strong-wind'}></i>
              </p>
              <p className='extra-info-leftSide'>
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
  </div>;
}

export default WeatherCard;
