import axios, { AxiosResponse } from "axios";

// interface IGetNationalityResponse{
//         count: number,
//         name: string,
//         country: ICountryPrediction[]
    
// }

// interface ICountryPrediction{
//         country_id: string,
//         probability: number
// }

const BASE_URL = "https://api.nationalize.io"
export const getNationality = async (last_name: string) =>{
    const response = await axios.get(`${BASE_URL}/?name=${last_name}`)
    console.log(response)
    return response
}