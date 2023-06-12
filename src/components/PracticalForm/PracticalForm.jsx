import React from 'react';
import styles from './PracticalForm.module.scss';
import Work from '../../icons/work.png';
import Plus from '../../icons/plus.png';
import Skills from '../../icons/skills.png';


const PracticalForm = (props) => {
    const {
        experience,
        newExperience,
        skills,
        newSkill,
        changeExperience,
        changeSkill,
        addExperience,
        removeExp,
        addSkill,
        removeSkill,
    } = props;
    return (
        <div className={styles.practicalForm}>
            <h2>Practical Experience</h2>
            <form className={styles.workForm}>
                <div className={styles.work}>
                    {experience.map((work, index) => (
                        <div key={work.id} className={styles.work} >
                            <div>
                                <div className={styles.headline}>
                                    <img src={Work} alt="Work" className={styles.icon} fill="currentColor" />
                                    <h3>Work Experience #{index + 1}</h3>

                                    <div className={styles.divRemove}>
                                        {experience.length > 1 &&
                                            <button
                                                type='button'
                                                title="remove"
                                                name="removeExperience"
                                                id={work.id}
                                                aria-label="Close"
                                                className={styles.buttonRemove}
                                                onClick={removeExp}
                                            >
                                                Remove
                                            </button>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className={styles.company}>
                                <input
                                    className={styles.input}
                                    id={work.id}
                                    onChange={(e) => changeExperience(e, work.id)}
                                    value={work.company}
                                    placeholder='Company'
                                    name='company'
                                    type='text'
                                    required
                                />
                            </div>
                            <div className={styles.position}>
                                <input
                                    className={styles.input}
                                    id={work.id}
                                    onChange={(e) => changeExperience(e, work.id)}
                                    value={work.position}
                                    placeholder='Position'
                                    name='position'
                                    type='text'
                                    required
                                />
                            </div>
                            <div className={styles.task}>
                                <textarea
                                    className={styles.input}
                                    id={work.id}
                                    onChange={(e) => changeExperience(e, work.id)}
                                    value={work.task}
                                    placeholder='Task'
                                    name='task'
                                    type='text'
                                    required
                                />
                            </div>
                            <div className={styles.start}>
                                <input
                                    className={styles.input}
                                    id={work.id}
                                    onChange={(e) => changeExperience(e, work.id)}
                                    value={work.start}
                                    placeholder='Start Date of Employment'
                                    name='start'
                                    type='text'
                                    required
                                />
                            </div>
                            <div className={styles.end}>
                                <input
                                    className={styles.input}
                                    id={work.id}
                                    onChange={(e) => changeExperience(e, work.id)}
                                    value={work.end}
                                    placeholder='End Date of Employment'
                                    name='end'
                                    type='text'
                                    required
                                />
                            </div>
                        </div>
                    ))}

                    {experience.length < 3 &&
                        <button
                            type="button"
                            className={styles.add}
                            onClick={addExperience}
                            aria-label="add"
                        >
                            <img
                                src={Plus}
                                alt="Plus"
                                className={styles.imgButton}

                            />New
                        </button>
                    }
                </div>
                <div className={styles.skillList}>
                    <div className={styles.headline}>
                        <img src={Skills} alt="Skills" className={styles.icon} />
                        <h3>Skills & Technnologies</h3>
                    </div>
                    <div className={styles.skills}>
                        {skills.map((skill, index) => (
                            <div className={styles.skill} key={index}>
                                <input
                                    className={styles.input}
                                    value={skill.skill}
                                    onChange={(e) => changeSkill(e,skill.id)}
                                    name="skill"
                                    id={skill.id}
                                    type='text'
                                    required
                                >
                                </input>

                                {skills.length > 1 &&
                                    <button
                                        type='button'
                                        name='removeSkill'
                                        title="remove"
                                        id={skill.id}
                                        className={styles.buttonRemove}
                                        onClick={removeSkill}
                                    >
                                        Remove
                                    </button>
                                }
                            </div>
                        ))}
                    </div>
                    {skills.length < 9 &&
                        <button type='button' className={styles.add} onClick={addSkill}>
                            <img src={Plus} alt="Add" className={styles.add} />
                            <p>New</p>
                        </button>
                    }
                </div>

            </form>
        </div>
    )
}

export default PracticalForm