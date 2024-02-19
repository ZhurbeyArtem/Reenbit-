import styles from './WeekItem.module.css';


const WeekItem: React.FC<any> = ({ data }) => {
  return (
    <li className={styles.item}>
      <p>{data.datetime}</p>
      <img src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${data.icon}.png`} alt="" />
      <p>{data.tempmax.toFixed(0)}<span>&#8451;</span>  / {data.tempmin.toFixed(0)}<span>&#8451;</span> </p>
    </li>
  )
}

export default WeekItem;
