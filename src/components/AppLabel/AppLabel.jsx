import React from 'react';
import styles from './AppLabel.module.scss';
import Save from '../../icons/save.png';
import Autofill from '../../icons/autofill.png';
import Github from '../../icons/github.png';

const AppLabel = ({printDoc}) => {
  return (
    <div className={styles.label}>
      <div className={styles['label-header']}>
        <h2>Resume</h2>
        <div>
          <button className={styles.save}>
            <img 
            src={Save} 
            alt="save button" 
            className={styles.download}
            onClick={printDoc} 
          />
            <span className={styles.buttonText}>Save</span>
          </button>
        </div>
        <div>
          <button className={styles.autofill}>
            <img src={Autofill} alt="Autofill button"  className={styles.icon}/>
            <span className={styles.buttonText}>Autofill</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AppLabel