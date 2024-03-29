import { useState, useEffect } from "react";
import axios from "axios";

const fetchNearBy = ()=> {
    const [restaurants,setRestaurants ] = useState(null)
    const [isLoading, setIsLoading ] = useState(false)
    const [error, setError ] = useState(null)

    const fetchData = async (code)=> {
        setIsLoading(true)

        try {
            const response = await axios.get(`http://localhost:6002/api/restaurant/${code}`)
            setRestaurants(response.data);
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

    return {restaurants, isLoading, error, refetch}
}

export default fetchNearBy