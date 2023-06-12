import React from 'react';
import styles from './EducationPreview.module.scss';
import Address from '../../icons/address.png';
import Email from '../../icons/email.png';
import Website from '../../icons/website.png';
import Phone from '../../icons/phone.png';


const EducationPreview = ({ userInfo, educationInfo }) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    website,
    description,
  } = userInfo;

  const {
    uniName,
    uniDegree,
    uniDate,
    schoolName,
    schoolDegree,
    schoolDate,

  } = educationInfo;

  return (
    <div className={styles.edu}>
      <div className={styles.contact}>
        <h3 className={styles['section-h3']}>CONTACT</h3>

        <div className={styles.details}>
          <div className={styles.detail}>
            <img
              src={Website}
              alt="Website"
              className={styles.detailImg}
            />
            <p>{website}</p>
          </div>

          <div className={styles.detail}>
            <img
              src={Email}
              alt="email"
              className={styles.detailImg}
            />
            <p>{email}</p>
          </div>

          <div className={styles.detail}>
            <img
              src={Phone}
              alt="Phone"
              className={styles.detailImg}
            />
            <p>{phone}</p>
          </div>

          <div className={styles.detail}>
            <img
              src={Address}
              alt="address"
              className={styles.detailImg}
            />
            <p>{address}</p>
          </div>
        </div>
      </div>

      <div className={styles.education}>
        <h3 className={styles['section-h3']}>EDUCATION</h3>

        <div className={styles.university}>
          <h4>{uniName}</h4>
          <h5>{uniDegree}</h5>
          <p>{uniDate}</p>
        </div>

        <div className={styles.school}>
          <h4>{schoolName}</h4>
          <h5>{schoolDegree}</h5>
          <p>{schoolDate}</p>
        </div>

      </div>
    </div>

  )
}

export default EducationPreview