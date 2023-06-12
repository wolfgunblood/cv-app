import React from 'react';
import EducationPreview from '../../components/EducationPreview/EducationPreview';
import HeaderPreview1 from '../../components/HeaderPreview/HeaderPreview1';
import styles from './Preview.module.scss'

const Preview = (props) => {
  const {
    userInfo,
    educationInfo,
    mobile,
  } = props;

  return (
    <div id='preview' className={!mobile ? styles.preview : styles.notDisplayed}>
      <HeaderPreview1 userInfo={userInfo} />
      <div className={styles.info} >
      <EducationPreview
         educationInfo = {educationInfo}
         userInfo={userInfo} 
      />

      </div>
    </div>
  )
}

export default Preview