import React from 'react'
import styles from './Sidebar.module.css'
import { useSelector } from 'react-redux'
import { getDayWeather } from '../../redux/weather/weather.slice'
import TimeSince from './TimeSince/TimeSince'

const Sidebar = () => {
  const { address, days, startDate } = useSelector(getDayWeather)
  const day = new Date().getDay()
  let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let dayOfWeekName = daysOfWeek[day];
  return (
    address &&
    <div className={styles.wrapper}>
      <p>{dayOfWeekName}</p>
      <div className={styles.imgWrapper}>
        <img src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${days[0].icon}.png`} alt="" />
        <p className={styles.imgText}>
          {Math.round(days[0].temp)}<span>&#8451;</span>
        </p>
      </div>
      <p>{address}</p>

      <TimeSince fromDate={`${startDate}T00:00:00`} />
    </div>
  )
}

export default Sidebar