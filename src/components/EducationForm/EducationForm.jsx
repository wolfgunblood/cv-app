import React from 'react';
import styles from './EducationForm.module.scss';
import gradeCap from '../../icons/gradcap.png';
import school from '../../icons/school.png';

const EducationForm = ({ educationInfo, changeHandler }) => {
    const {
        uniName,
        uniDegree,
        uniDate,
        schoolName,
        schoolDegree,
        schoolDate
    } = educationInfo;
    return (
        <div className={styles.educationalForm}>
            <form className={styles.schoolForm}>
                <h2>Education Data</h2>
                <div className={styles.university}>
                    <div className={styles.headline}>
                        <img
                            src={gradeCap}
                            alt="Grade Cap"
                            className={styles.icon}
                        />
                        <h3>University</h3>
                    </div>
                    <input
                        className={styles.input}
                        placeholder='Your University'
                        name="uniName"
                        value={uniName}
                        onChange={changeHandler}
                        id='uniName'
                        type="text"
                        required
                    />

                </div>
                <div className={styles.degree}>
                    <input
                        className={styles.input}
                        placeholder='Your Degree'
                        name="uniDegree"
                        value={uniDegree}
                        onChange={changeHandler}
                        id='uniDegree'
                        type="text"
                        required
                    />
                </div>
                <div className={styles.duration1}>
                    <input
                        className={styles.input}
                        placeholder='Timeframe'
                        name="uniDate"
                        value={uniDate}
                        onChange={changeHandler}
                        id='uniDate'
                        type="text"
                        required
                    />
                </div>

                <div className={styles.school}>
                    <div className={styles.headline}>
                        <img
                            src={school}
                            alt="School"
                            className={styles.icon}
                        />
                        <h3>School</h3>
                    </div>
                    <input
                        className={styles.input}
                        placeholder='Your School'
                        name="schoolName"
                        value={schoolName}
                        onChange={changeHandler}
                        id='schoolName'
                        type="text"
                        required
                    />

                </div>
                <div className={styles.degree}>
                    <input
                        className={styles.input}
                        placeholder='Your Degree'
                        name="schoolDegree"
                        value={schoolDegree}
                        onChange={changeHandler}
                        id='schoolDegree'
                        type="text"
                        required
                    />
                </div>
                <div className={styles.duration1}>
                    <input
                        className={styles.input}
                        placeholder='Timeframe'
                        name="schoolDate"
                        value={schoolDate}
                        onChange={changeHandler}
                        id='schoolDate'
                        type="text"
                        required
                    />
                </div>
            </form>

        </div>
    )
}

export default EducationForm