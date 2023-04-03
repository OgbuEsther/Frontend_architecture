import axios from "./Api"

export const fetchDictionary = async()=>{
    await axios.get("/collections")
}