import React from 'react'
import { useLocation } from 'react-router-dom'

function DesignPage() {

  const location = useLocation()
  const data = location.state;
  console.log(data);
  return (
    <>
      <div className='container he'>
        <h2 className="my-2 text-center">{data?.designName}</h2>
            <div className='row'>
                <div className="col-lg-6 d-flex justify-content-center mt-3">
                    <img style={{height:"500px",width:"80%",border:"3px solid"}} src={data?.imageURL} alt="" />
                </div>
                <div className="col-lg-6">
                <h3 className='fw-bolder my-3 text-center '>Let's make <span style={{fontSize:"35px"}}>{data?.designName}</span></h3>
                <div className='d-flex justify-content-center'><iframe width="90%"  height="300" src={`${data?.youtubeLink}?autoplay=1`} title="Caption" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
                </div>
            </div>
      </div>
    </>
  )
}

export default DesignPage