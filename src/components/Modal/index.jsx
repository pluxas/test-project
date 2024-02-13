import React from 'react'
import styles from './Modal.module.scss'

const Modal = () => {
  return (
    <div className={styles['modal']}>
        <div className={styles['modal__window']}>
            <h2 className={styles['modal__title']}></h2>
            <input type="text" />
            <div className={styles['modal__block']}>
                <button>Cancel</button>
                <button>Apply</button>
            </div>
        </div>
    </div>
  )
}

export default Modal