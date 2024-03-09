import React, { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { uploadDesignAPI } from "../services/allAPI";
import { useNavigate } from "react-router-dom";

function Add({setReloadView}) {

  const [uploadDesign,setUploadDesign] = useState({
    designName:"",imageURL:"",youtubeLink:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () =>{
    setShow(false);
    setUploadDesign({...uploadDesign,designName:"",imageURL:"",youtubeLink:""})
  } 
  const handleShow = () => setShow(true);

  const getYoutubeEmbedLink = (link) =>{
    if(link.includes("v=")){
      let videoId = link.split("v=")[1].slice(0,11)
      setUploadDesign({...uploadDesign,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
    }
    else{
      setUploadDesign({...uploadDesign,youtubeLink:""})
      alert("Please input a valid link")
    }
  }

  const navigate= useNavigate();
  const handleNavigate = () => {
    navigate("/history");
  };

  const handleUpload=async()=>{
    const{designName,imageURL,youtubeLink}=uploadDesign
    if(designName && imageURL && youtubeLink){
      const result= await uploadDesignAPI(uploadDesign)
      if(result.status>=200 && result.status<300){
        alert(`${result.data.designName} Tutorial uploaded successfully!!!`)
        setReloadView(result.data)
        handleClose()
      }
      else{
        alert("API call failed... Please try again after sometimes")
      }
    }
    else{
      alert("Please fill the form completely")
    }
  }

  return (
    <>
      <div className="d-flex justify-content-between my-3">
        <h1 className="mt-2">All Tutorials</h1>
        <div>
          <button onClick={handleShow} className="btn1 btn-success my-3 me-3">
          <i className="fa-solid fa-plus"></i> Add New
          </button>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Diy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <div className="border rounded border-secondary p-3">
            <FloatingLabel
              controlId="floatingInputReceipe"
              label="diy Name"
              className="mb-3"
            >
              <Form.Control
              value={uploadDesign.designName}
              onChange={(e)=>setUploadDesign({...uploadDesign,designName:e.target.value})}
                type="text"
                placeholder="diy Name"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputImage"
              label="Image URL"
              className="mb-3"
            >
              <Form.Control
              value={uploadDesign.imageURL}
              onChange={(e)=>setUploadDesign({...uploadDesign,imageURL:e.target.value})}
                type="text"
                placeholder="Image URL"
              />
            </FloatingLabel>
           
            <FloatingLabel
              controlId="floatingInputYtlink"
              label="Youtube Link"
              className="mb-3"
            >
              <Form.Control
                value={uploadDesign.youtubeLink}
                onChange={(e)=>getYoutubeEmbedLink(e.target.value)}
                type="text"
                placeholder="Youtube Link"
              />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
