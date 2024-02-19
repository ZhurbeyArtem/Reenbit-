import styles from './AddBtn.module.css'

interface AddBtnProps {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddBtn: React.FC<AddBtnProps> = ({ setVisible }) => {
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