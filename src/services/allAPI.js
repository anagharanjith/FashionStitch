import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"

export const uploadDesignAPI = async(recipe)=>{
    return await commonAPI("POST",`${SERVER_URL}/designs`,recipe)
}

export const getDesignAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/designs`,"")
}

export const deleteDesignAPI = async(designId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/designs/${designId}`,{})
}

export const saveHistoryAPI = async (recipeDetails) =>{
    return await commonAPI("POST",`${SERVER_URL}/history`,recipeDetails)
}

export const getHistoryAPI = async () =>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

export const deleteDesignHistoryAPI = async(designId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${designId}`,{})
}

export const getARecipeAPI = async(designId)=>{
    return await commonAPI("GET",`${SERVER_URL}/designs/${designId}`,"")
}

export const addFavoriteAPI = async(recipe)=>{
    return await commonAPI("POST",`${SERVER_URL}/favorites`,recipe)
}

export const getFavoriteAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/favorites`,"")
}

export const deleteFavoriteAPI = async(designId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/favorites/${designId}`,{})
}