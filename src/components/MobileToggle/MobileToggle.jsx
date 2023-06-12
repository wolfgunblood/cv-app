import React from 'react';
import styles from './MobileToggle.module.scss';
import Preview from '../../icons/preview.png';
import Editor from '../../icons/editor.png';

const MobileToggle = ({handleToggle, mobile}) => {
  return (
   <button type='button' className={styles.toggle} onClick={handleToggle}>
    <img src={mobile ? Preview : Editor} alt="Button" />
    {mobile ? "Preview" : "Editor" }
   </button>
  )
}

export default MobileToggle