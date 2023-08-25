import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../services/api";
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchDataFromApi(url)
            .then((res) => {
                setLoading(false);
                setData(res);
                setError("")
            })
            .catch((err) => {
                setLoading(false);
                setData([])
                setError("Something went wrong!");
            });
    }, [url]);

    return { data, loading, error };
    
};

export default useFetch;