import styles from './ListItem.module.css'
import { useDispatch } from 'react-redux'
import { fetchDayWeather, fetchWeekWeather } from '../../../redux/weather/api'
import type { ILIstItem } from '../../../types/List.types'
import type { AppDispatch } from '../../../redux/store';
interface ListItemProps {
  data: ILIstItem;
}
const ListItem: React.FC<ListItemProps> = ({ data }) => {
  const dispatch = useDispatch<AppDispatch>()

  const handle = async () => {
    try {
      await dispatch(fetchWeekWeather(data))
      await dispatch(fetchDayWeather(data))
    }
    catch (e) {
      alert(e)
    }
  }
  return (
    <li className={styles.item} onClick={handle}>
      <img src={data.url} alt="some trouble try reload page" className={styles.img} />
      <div className={styles.content}>
        <p className={styles.city}>{data.city}</p>
        <p className={styles.data}>{data.startDate.split('-').reverse().join('.')} - {data.endDate.split('-').reverse().join('.')}</p>

      </div>
    </li>
  )
}

export default ListItem