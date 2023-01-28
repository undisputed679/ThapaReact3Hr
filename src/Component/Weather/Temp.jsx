import React, { useState } from 'react'
import { useEffect } from 'react'
import './style.css'
import WeatherCard from './WeatherCard';

function Temp() {
  const [value,setValue]=useState("");
  const [searchValue, setSearchValue] = useState('gaya');
  const [tempInfo,setTempInfo]=useState({});
  const [error,setError]=useState("");
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=e2e61db07c1a827baf9d5639ac90ab99`
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)

      const { temp, humidity, pressure } = data.main
      const { main: weathermood } = data.weather[0]
      const { name } = data
      const { speed } = data.wind
      const { country, sunset } = data.sys

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      }
      setTempInfo(myNewWeatherInfo)
      // console.log(weathermood)
    } catch (error) {
      setError("Enter Valid Location")
    }
  }
  useEffect(() => {
    getWeatherInfo()
  }, [])

  const handleCLickNow=(e)=>{
      searchValue=e.target.value;
  }
  return (
    <div>
     
      <div className='wrap'>
        <div className='search'>
          <input
            type='search'
            placeholder='search...'
            autoFocus
            id='search'
            className='searchTerm'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className='searchButton'
            type='button'
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>
     <WeatherCard tempInfo={tempInfo}
     error={error}
     />
    </div>
  )
}

{
  /*style={{color:"#70c1b3"}}*/
}
{
  /*style={{color:"black"}}*/
}
export default Temp
