import {useEffect,useState} from "react";
import getProducts from "../data/products.json";

export const useProducts = () =>{
    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [query,setQuery] = useState({
        name:"",
    });

    useEffect(() => {
        async function loadProducts (){
            await getProducts()
            .then((result) => {
                setProducts(result.data.users);
                setLoading(false);
            })
            .catch((error) => {
                console.log("error", error);
                setLoading(false)
            });
        }
        setTimeout(() => {
            loadProducts();
        },3000);
    },[]);
    const setQueryParams = (params) => {
        setQuery(params)
    }
    return {
        products,
        loading,
        query,
        setQueryParams,
    }
}