import { useRef, useState } from "react";
import styles from './Modal.module.css'
import { db } from "../../db/db";
import { useDispatch } from "react-redux";
import { addTrip } from '../../redux/trip/trip.slice'

const Modal = ({ isVisible, setVisible }) => {
  const dispatch = useDispatch()
  const currentDate = new Date();
  const maxDate = new Date(currentDate);
  const minDate = new Date(currentDate);

  maxDate.setDate(maxDate.getDate() + 15);
  minDate.setDate(minDate.getDate());

  const [formData, setFormData] = useState({
    city: '',
    startDate: '',
    endDate: ''
  });
  const formRef = useRef(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setVisible(false)
    dispatch(addTrip(formData))
    setFormData({
      city: '',
      startDate: '',
      endDate: ''
    })
    formRef.current.reset();
  };

  const handleClose = (e) => {
    if (e.target.className.split('_').includes('backdrop')) setVisible(false)
  }

  return (
    <div className={isVisible ? `${styles.active} ${styles.backdrop}` : styles.nonactive} onClick={(e) => handleClose(e)}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <p className={styles.title}>Create trip</p>
          <span className={styles.close} onClick={() => setVisible(false)}>&#10010;</span>
        </div>
        <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>

          <label className={styles.label} htmlFor="city">City</label>
          <select className={styles.inp} id="city" name="city" onChange={handleChange} required>
            <option value="">Please select a city</option>
            {db.map(el =>
              <option key={el.city} value={el.city}>{el.city}</option>
            )}
          </select>

          <label className={styles.label} htmlFor="startDate">Start date</label>
          <input className={styles.inp}
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            max={maxDate.toISOString().split('T')[0]}
            min={minDate.toISOString().split('T')[0]}
          />

          <label className={styles.label} htmlFor="endDate">End date</label>
          <input className={styles.inp}
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
            max={maxDate.toISOString().split('T')[0]}
            min={minDate.toISOString().split('T')[0]}

          />
          <div className={styles.btnsWrapper}>
            <button className={styles.btn} onClick={() => setVisible(false)} type="button">Cancel</button>
            <button className={styles.btn} type="submit">Save</button>
          </div>

        </form>
      </div>

    </div>

  );
}

export default Modal