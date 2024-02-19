import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getFilter } from '../../redux/filter/filter.slice';
import styles from './Filter.module.css'
import { changeSort, getSort } from '../../redux/trip/trip.slice';

const Filter = () => {
  const filter = useSelector(getFilter);
  const sortBy = useSelector(getSort)
  const dispatch = useDispatch();
  const handle = (e) => {
    dispatch(changeSort(e))
  }
  return (
    <div className={styles.wrapper}>
      <input placeholder="Search your trip" className={styles.inp} defaultValue={filter}
        onInput={e => dispatch(changeFilter(e.target.value))} />
      <span className={styles.icon}>&#9906;</span>
      <select className={styles.sort} defaultValue={sortBy} onChange={(e) => handle(e.target.value)}>
        <option value=''>Sort by</option>
        <option value='startDate'>Start date</option>
        <option value='endDate'>End date</option>
        <option value=''>Without sort</option>
      </select>
    </div>
  )
}

export default Filter