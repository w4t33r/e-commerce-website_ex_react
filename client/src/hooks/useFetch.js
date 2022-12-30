import {useEffect, useState} from "react";
import axios from "axios";

const useFetch = async (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    process.env.REACT_APP_API_URL + `/products?populate=*&[filters][type][$eq]=${type}`,
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                        },
                    }
                );
                console.log(res)
                setData(res.data.data)
            } catch (err) {
                console.log(err);
            }
        };
        fetchData()
    }, []);
}