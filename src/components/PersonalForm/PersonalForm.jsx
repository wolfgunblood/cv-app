import React from 'react';
import styles from './PersonalForm.module.scss';

const PersonalForm = ({ userInfo, changeHandler }) => {
  const {
    firstName,
    lastName,
    address,
    website,
    email,
    phone,
    description,
  } = userInfo
  return (
    <div  className={styles.personalForm}>
      <h2>Personal Data</h2>
      <form className={styles.persForm}>
        <div className={styles.name}>
          <input
            className={styles.input}
            placeholder='First Name'
            name="firstName"
            id="firstName"
            value={firstName}
            type="text"
            onChange={changeHandler}
            required
          />
          <input
            className={styles.input}
            placeholder='Last Name'
            name="lastName"
            id="lastName"
            value={lastName}
            type="text"
            onChange={changeHandler}
            required
          />
        </div>

        <div className={styles.address}>
        <input
            className={styles.input}
            placeholder='Address'
            name="address"
            id="address"
            value={address}
            type="text"
            onChange={changeHandler}
            required
          />
        </div>

        <div className={styles.website}>
        <input
            className={styles.input}
            placeholder='Website'
            name="website"
            id="website"
            value={website}
            type="text"
            onChange={changeHandler}
            required
          />
        </div>
        <div className={styles.contact}>
        <input
            className={styles.input}
            placeholder='Email'
            name="email"
            id="email"
            value={email}
            type="email"
            onChange={changeHandler}
            required
          />
        <input
            className={styles.input}
            placeholder='Phone Number'
            name="phone"
            id="phone"
            value={phone}
            type="number"
            onChange={changeHandler}
            required
          />
        </div>
        <div className={styles.about}>
        <textarea
            className={styles.input}
            placeholder='Description'
            name="description"
            id="description"
            value={description}
            type="text"
            onChange={changeHandler}
            required
          />

        </div>
      </form>
    </div>
  )
}

export default PersonalForm