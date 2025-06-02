import React from 'react';
import { useState } from 'react'
import Profile from './Profile'
import About from './About'

function Tabs() {
  const [act, setAct] = useState(0)
  
  const styles = {
    main: {
      padding: '20px',
    },
    container: {
      color: '5C6AC4',
      display: 'flex',
    },
    tabs: {
      border: '1px solid',
       padding: '2px',
    }
  };
  
  const tabs = [
    {
      name : "Profile",
      component: Profile
    },
    {
      name : "About",
      component : About
    }
  ]
  const ActiveCom = tabs[act].component;

  return (
    <div style={styles.main}>
      <h1>Hello, World!</h1>
      <div style={styles.container}>
       {
        tabs.map((t,index)=> (
       <div key = {index} onClick = {()=>setAct(index)}style = {styles.tabs}>{t.name}</div>
       ))
       }
      
      </div>
       <ActiveCom/>
    </div>
  )
}

export default Tabs;