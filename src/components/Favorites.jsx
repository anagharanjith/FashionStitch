import React, { useEffect, useState } from 'react';
import { addFavoriteAPI, deleteFavoriteAPI, getFavoriteAPI, saveHistoryAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import icon from './iconhis.svg'; // Import SVG file as default

function Favorites() {
    const navigate = useNavigate();
    const [disAllFavorites, setDisAllFavorites] = useState([]);

    const allFavorites = async () => {
        const result = await getFavoriteAPI();
        const { data } = result;
        setDisAllFavorites(data);
    };

    const removeFavRecipe = async (rId) => {
        const result = await deleteFavoriteAPI(rId);
        allFavorites(); 
    };

    const handleNavigate = async (fav) => {
        let timeData = new Date();
        let timeStamp = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timeData);
        console.log(timeStamp);
        const { designName, youtubeLink } = fav;
        await saveHistoryAPI({ designName, youtubeLink, timeStamp });
        navigate("/tutorial", { state: fav });
    };

    useEffect(() => {
        allFavorites();
    }, []);

    return (
        <div className='container'>
            <div style={{ minHeight: "100vh" }}>
                <div className='d-flex justify-content-left align-items-center w-100  mt-2 pt-1'>
                    <h3 className='fh'><i class="fa-brands fa-gratipay"></i> Favorites</h3>
                </div>
                {disAllFavorites.length > 0 ? disAllFavorites.map((fav, index) => (
                    <div key={index} className='mt-3'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h5 className='po' onClick={() => handleNavigate(fav)}>
                            <img style={{height:'25px',width:'25px'}} src={icon} alt="Icon" />{fav.designName}
                            </h5>
                            <div>
                                <Button variant="outline-danger" onClick={() => removeFavRecipe(fav.id)}><i className="fa-regular fa-trash-can"></i></Button>
                            </div>
                        </div>
                        <hr />
                    </div>
                )) :
                    <h6 className='text-danger mt-3'>Favorite is empty!!!</h6>
                }

            </div>
        </div>
    );
}

export default Favorites;
