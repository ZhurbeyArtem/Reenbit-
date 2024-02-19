import styles from './Week.module.css'
import { useSelector } from 'react-redux'
import { getWeekWeather } from '../../redux/weather/weather.slice'
import WeekItem from './WeekItem/WeekItem'

const Week = () => {
  const data = useSelector(getWeekWeather)
  return (
    <ul className={styles.list}>
      {
        data.map(el =>
          <WeekItem key={el.datetime} data={el} />
        )
      }
    </ul >
  )
}

export default Week