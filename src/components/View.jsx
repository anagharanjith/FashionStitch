import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import DesignCard from './DesignCard'
import { getDesignAPI } from '../services/allAPI'
import { useNavigate } from "react-router-dom";




function View({reloadView}) {

  const[allRecipe,setAllRecipe]=useState()
  const[realodAfterDelete,setReloadAfterDelete]=useState("")

  const displayAllRecipe=async()=>{
    const result = await getDesignAPI()
    if(result?.status==200){
      setAllRecipe(result.data)
    }
  }

  console.log(allRecipe);
  useEffect(()=>{
    displayAllRecipe()
  },[reloadView,realodAfterDelete])
  const [show, setShow] = useState(false);

  const navigate= useNavigate();
  const handleNavigate = () => {
    navigate("/history");
  };
  const handleGoFavorite = () =>{
    navigate("/favorite");
  }


  return (
    <>
    <div className="row r">
      <div className="col-lg-2">
        <div className="d-flex justify-content-between my-3">
        <div>
          <button onClick={handleNavigate} className="btn1 my-3 ">
          <i className="fa-solid fa-clock-rotate-left me-2"></i>History
          </button><br />
          <button onClick={handleGoFavorite} className="btn1 my-3 ">
          <i className="fa-solid fa-heart me-2"></i>Favorites
          </button><br />
        </div>
      </div>
        
      {/* <Favorites/> */}
        </div>
        <div className="col-lg-10">
       
        <Row>
            {allRecipe?.length>0?allRecipe?.map((recipe,index)=>(
              <Col key={index} className='mb-4' sm={12} md={6} lg={4}>
              <DesignCard setReloadAfterDelete={setReloadAfterDelete} displayData={recipe}/>
              </Col>
            ))
            :
            <div className='text-danger fw-bolder'>No designs are uploaded yet!!!</div>
            }
        </Row>
        </div>
        
      </div>       
        
    </>
  )
}

export default View