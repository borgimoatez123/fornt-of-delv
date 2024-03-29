import { useState, useEffect } from "react";
import axios from "axios";

const fetchRecommendations = (code)=> {
    const [recommendations,setRecommendations ] = useState(null)
    const [isLoading, setIsLoading ] = useState(false)
    const [error, setError ] = useState(null)

    const fetchData = async ()=> {
        setIsLoading(true)

        try {
            const response = await axios.get(`http://localhost:6002/api/foods/recommendation/${code}`)
            setRecommendations(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error)
        }finally{
            setIsLoading(false);
        }
    }


    useEffect(()=> {
        fetchData();
    }, [])

    const refetch = ()=> {
        setIsLoading(true);
        fetchData();
    }

    return {recommendations, isLoading, error, refetch}
}

export default fetchRecommendations