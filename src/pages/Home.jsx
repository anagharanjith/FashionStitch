import React, { useState } from 'react'
import View from '../components/View';
import Add from '../components/Add';
import { useNavigate } from "react-router-dom";


function Home() {

  const [reloadView,setReloadView]=useState("")
  
  


  return (
    <>

    <div className='home'>
        <div className='container '>
          <Add setReloadView={setReloadView}/>
          <View reloadView={reloadView}/>
        </div>
    </div>
    
    </>
  )
}

export default Home