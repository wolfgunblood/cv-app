import React, { useState } from 'react';
import styles from './App.module.scss';
import Preview from './containers/Preview/Preview';
import Form from './containers/Form/Form';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import uniqid from 'uniqid';
import MobileToggle from './components/MobileToggle/MobileToggle';


const App = () => {

  const [userInfo, setUserInfo] = useState(
    {
      firstName: "",
      lastName: "",
      address: "",
      website: "",
      email: "",
      phone: "",
      description: "",
    }
  );

  const [educationInfo, setEducationInfo] = useState(
    {
      uniName: "",
      uniDegree: "",
      uniDate: "",
      schoolName: "",
      schoolDegree: "",
      schoolDate: "",
    }
  );

  const [experience, setExperience] = useState([

    {
      isHover: false,
      id: uniqid(),
      company: "",
      position: "",
      task: "",
      start: "",
      end: "",
      
    },
  ]
  );

  const [newExperience, setNewExperience] = useState(

    {
      isHover: false,
      id: uniqid(),
      company: "",
      position: "",
      task: "",
      start: "",
      end: "",
    },
  
  );

  const [skills, setSkills] = useState([

    {
      isHover: false,
      id: uniqid(),
      skill: "",
    },
    {
      isHover: false,
      id: uniqid(),
      skill: "",
      
    },
    {
      isHover: false,
      id: uniqid(),
      skill: "",
      
    },
  ]
  );

  const [newSkill, setNewSkill] = useState(

    {
      isHover: false,
      id: uniqid(),
      skill: "",

    },

  );

  const [mobile, setMobile ] = useState(true);

  const handleToggle = (e) => {
    const newMobile = mobile;
    setMobile(!newMobile)

  }

  const changeUserInfo = (e) => {
    const id = e.target.id
    const value = e.target.value
    const userInfoCopy = { ...userInfo }
    userInfoCopy[id] = value
    setUserInfo(userInfoCopy)
    console.log(userInfo)

  }
  const changeEducationInfo = (e) => {
    const id = e.target.id
    const value = e.target.value
    const educationInfoCopy = { ...educationInfo }
    educationInfoCopy[id] = value
    setEducationInfo(educationInfoCopy)
    console.log(educationInfo)

  }

  const changeExperience = (e,id) => {
      const i = id;
      const exp = experience.map((work) =>{
        if(work.id === i){

          work[e.target.name] = e.target.value;
          return work;
        }else {
          return work;
        }
      })
      setExperience(exp);
      console.log(experience);
  }

  const addExperience = (e) => {
    e.preventDefault();
    // const experienceCopy = experience.push(newExperience);

    // console.log(experienceCopy);
    // console.log([...experience,newExperience]);
    setExperience([...experience,newExperience]);
    setNewExperience({...newExperience,id :uniqid()});
    console.log(experience);

  }

  const removeExp = (index) => {
    const list = [...experience]
    list.splice(index,1);
    console.log(list)
    setExperience(list);
  }

  const changeSkill = (e,id) => {
    const i = id;
      const skl = skills.map((skill) =>{
        if(skill.id === i){

          skill[e.target.name] = e.target.value;
          return skill;
        }else {
          return skill;
        }
      })
      console.log(skl)
      setSkills(skl)
      console.log(skills)
  }

  const addSkill = (e) => {
    e.preventDefault()
    setSkills([...skills,newSkill])
    setNewSkill({...newSkill,id : uniqid()})
    console.log(skills)
  }

  const removeSkill = (index) => {
    const list  = [...skills]
    list.splice(index,1)
    console.log(list)
    setSkills(list)
  }


  const printDoc = () => {
    const input = document.getElementById('preview');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        console.log(imgData)
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

        // Download PDF to user
        pdf.save("resume-cvx.pdf");
      });
  }

  return (
    <div className={styles.body}>
      <div className={styles.App}>
        <Form
          userInfo={userInfo}
          changeUserInfo={changeUserInfo}
          educationInfo={educationInfo}
          changeEducationInfo={changeEducationInfo}
          printDoc={printDoc}
          experience = {experience}
          newExperience = {newExperience}
          skills = {skills}
          newSkill = {newSkill}
          changeExperience = {changeExperience}
          changeSkill = {changeSkill}
          addExperience = {addExperience}
          removeExp = {removeExp}
          addSkill = {addSkill}
          removeSkill = {removeSkill}
          mobile = {mobile}
          handleToggle = {handleToggle}
        />
        <Preview
          userInfo={userInfo}
          educationInfo={educationInfo}
          mobile ={mobile}
          handleToggle = {handleToggle}
        />
        <MobileToggle 
          mobile = {mobile}
          handleToggle = {handleToggle}
        />
      </div>
    </div>
  )
}

export default App