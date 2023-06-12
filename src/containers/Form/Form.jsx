import React from 'react';
import styles from './Form.module.scss';
import AppLabel from '../../components/AppLabel/AppLabel';
import PersonalForm from '../../components/PersonalForm/PersonalForm';
import EducationForm from '../../components/EducationForm/EducationForm';
import PracticalForm from '../../components/PracticalForm/PracticalForm';

const Form = (props) => {
  const {
    userInfo,
    changeUserInfo,
    educationInfo,
    changeEducationInfo,
    experience,
    newExperience,
    skills,
    newSkill,
    changeExperience,
    changeSkill,
    printDoc,
    addExperience,
    removeExp,
    addSkill,
    removeSkill,
    mobile
  } = props;

  return (
    <div className={ mobile ? styles['form'] : styles['notDisplayed']}>
        <AppLabel 
          printDoc={printDoc}
        />
        
        <PersonalForm 
          userInfo = {userInfo}
          changeHandler = {changeUserInfo}
        />
        <EducationForm 
          educationInfo={educationInfo}
          changeHandler = {changeEducationInfo}
        />
        <PracticalForm
          experience ={experience}
          newExperience = {newExperience}
          skills = {skills}
          newSkill = {newSkill}
          changeExperience = {changeExperience}
          changeSkill = {changeSkill}
          addExperience = {addExperience}   
          removeExp = {removeExp}
          addSkill={addSkill}
          removeSkill={removeSkill}     
        />
    </div>
  )
}

export default Form