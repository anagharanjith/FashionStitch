import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { deleteDesignAPI, saveHistoryAPI, addFavoriteAPI } from '../services/allAPI';

function DesignCard({ displayData, setReloadAfterDelete }) {

    const navigate = useNavigate();

    const handleNavigate = async () => {
        let timeData = new Date();
        let timeStamp = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timeData);
        console.log(timeStamp);
        const { designName, youtubeLink } = displayData;
        await saveHistoryAPI({ designName, youtubeLink, timeStamp });
        navigate("/tutorial", { state: displayData });
    };

    const removeDesign = async (rId) => {
        const result = await deleteDesignAPI(rId);
        setReloadAfterDelete(result.data);
        console.log(rId);
    };

    const addToFavorites = async () => {
       {
          const result = await addFavoriteAPI(displayData);
          result.status === 200
          alert("Added to favorites successfully");
          navigate("/favorite", { state: displayData });

      } 
  };
  

    return (
        <>
            <Card className='border crd'>
                <Card.Img className='p-2 pop' onClick={handleNavigate} style={{ height: "350px", width: '100%' }} variant="top" src={displayData?.imageURL} />
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <Card.Title className='fw-bolder'>{displayData?.designName}</Card.Title>
                        <div>
                            <button onClick={() => addToFavorites()} className="p-2 border rounded me-2 btn btn-outline-dark"><i className="fa-solid fa-heart"></i></button>
                            <button onClick={() => removeDesign(displayData?.id)} className="p-2 border rounded btn btn-outline-danger"><i className="fa-regular fa-trash-can"></i></button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default DesignCard;
