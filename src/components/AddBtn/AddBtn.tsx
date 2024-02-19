import styles from './AddBtn.module.css'

const AddBtn = ({ setVisible }) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={() => setVisible(true)} className={styles.btn} type='button'>
        <span>&#10010;
        </span>
        <p>
          Add trip
        </p>
      </button>
    </div>
  )
}

export default AddBtn