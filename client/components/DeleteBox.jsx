import styles from '../styles/DeleteBox.module.css'

function DeleteBox(props) {
  return (
    <div className={styles.deleteBox}>
      <h1>Are you sure you want to delete this Account ?</h1>
      <div className={styles.btns}>
        <button className={styles.yes} onClick={props.handleDeleteAccount}>Yes</button>
        <button className={styles.no} onClick={() => props.setShowDeleteBox(false)}>No</button>
      </div>  
    </div>
  )
}

export default DeleteBox;