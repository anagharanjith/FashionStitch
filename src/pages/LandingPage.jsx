import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {

  const navigate = useNavigate()
  const handleNavigate = () => {
    // navigate to home page
    navigate('/home')
  }
  
  return (
    <>
    <div className='container mt-5 div1'>
    <div className="header row align-items-center">
      <div className="col-lg-5">
        <h3 className='des mt-4' style={{ height: '55px',fontSize:'33px'}}>Welcome To <span className='text-warning logo'>Fashion Stitch</span></h3>
        <p style={{ textAlign: 'justify' }}>Explore handpicked YouTube tutorials from our favorite creators to elevate your crafting skills and inspire your next project!  Join us today and start your stylish journey! </p>
        <button onClick={handleNavigate} className='btn btn-warning'>Get Started</button>
      </div>
      <div className="col-lg-1"></div>
      <div className="col-lg-6">
        <img style={{ width: '100%', filter: 'brightness(80%)' }} src="https://i.pinimg.com/474x/8a/07/f8/8a07f84c1290ed0be12b10a75e2653d5.jpg" alt="Landing Page" />
      </div>
    </div>
    <div className="features div2">
      <h3 style={{ height:'55px'}} className="text-center text-black">Features</h3>
      <div className="row">
        <div className="col-lg-4">
          <Card className='crd'>
            <Card.Img variant="top" src="https://i.pinimg.com/564x/a4/da/fb/a4dafb32a0d7c4f11991602ae3ca33f6.jpg" style={{ height: '300px' }} />
            <Card.Body>
              <Card.Title style={{ height: '35px' }}>Managing Videos</Card.Title>
              <Card.Text style={{ height: '100px' }}>
                User can upload, view and remove the their diys for future references
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4">
          <Card className='crd'>
            <Card.Img variant="top" src="https://i.pinimg.com/564x/cc/b6/a2/ccb6a21b5a22ef3fc4ce52c5dde6a868.jpg" style={{ height: '300px' }} />
            <Card.Body>
              <Card.Title style={{ height: '35px' }}>Select Them!</Card.Title>
              <Card.Text style={{ height: '100px' }}>
                User can add to their favorite designs and diys separatly for future use
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4">
          <Card className='crd'>
            <Card.Img variant="top" src="https://i.pinimg.com/564x/74/43/9a/74439a5f10f7d52f5ead84893f1e6202.jpg" style={{ height: '300px' }} />
            <Card.Body>
              <Card.Title style={{ height: '35px' }}> View History</Card.Title>
              <Card.Text style={{ height: '100px' }} >
              User can able to view and remove previously viewed videos and history 
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
    <div className=" row vv border p-5 mt-5 rounded">
      <div className="col-lg-5">
        <h3 className='text-warning' style={{ height: '100px' }}>Simple, Fast and Powerful</h3>
        <p style={{ textAlign: 'justify' }}><span className='fs-4'>Play Everything: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum nostrum quidem soluta inventore  </p>
        <p style={{ textAlign: 'justify' }}><span className='fs-4'>Categorize Products: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum nostrum quidem soluta inventore  </p>


      </div>
      <div className="col-lg-1"></div>
      <div className="col-lg-6">
      <iframe width="500" height="369" src="https://www.youtube.com/embed/3mPkZopqLH4" title="How to Make Fabric Bows, DIY Hair Accessories, DIY Fabric Bow" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>      </div>
    </div>
  </div>
  </>
  )
}

export default LandingPage