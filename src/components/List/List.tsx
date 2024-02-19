import styles from './List.module.css'
import { useSelector } from 'react-redux'
import { getSort, getTrips } from '../../redux/trip/trip.slice'
import ListItem from './ListItem/ListItem'
import AddBtn from '../AddBtn/AddBtn'
import Modal from '../Modal/Modal'
import { useRef, useState } from 'react'
import { getFilter } from '../../redux/filter/filter.slice'
import { useScrollbar } from '../../hooks/ScrollBarHook'

const List = () => {
  const trips = useSelector(getTrips);
  const [isVisible, setIsVisible] = useState(false)

  const filter = useSelector(getFilter);
  const sortBy = useSelector(getSort)

  const filteredContacts = () => {
    let filteredTrips = trips.filter(trip =>
      trip.city.toLowerCase().includes(filter.toLowerCase())
    )

    switch (sortBy) {
      case 'startDate':
        filteredTrips.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
        break;
      case 'endDate':
        filteredTrips.sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime());
        break;
      default:
    }

    return filteredTrips;
  };
  const dataWrapper = useRef(null)
  const hasScroll = filteredContacts().length > 3

  useScrollbar({ root: dataWrapper, hasScroll })
  return (
    <div className={styles.wrapper}>
      <div
        className={hasScroll ? styles.scrollbar : styles.noScrollbar}
        ref={dataWrapper}
      >
        <ul className={styles.list}>
          {
            filteredContacts()?.map(el =>
              <ListItem key={el.id} data={el} />
            )
          }
        </ul>
      </div>
      <AddBtn setVisible={setIsVisible} />

      <Modal setVisible={setIsVisible} isVisible={isVisible} />
    </div>


  )
}
export default List