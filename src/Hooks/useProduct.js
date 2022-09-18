// import {useEffect,useState} from 'react';
// import axios from "axios";

// export default function useProduct (url) {
//     const [product,setProduct] = useState([]);
    
//     useEffect(() => {
//         async function loadProduct(){
//             axios.get(url)
//             .then(result => setProduct(result.data.product))
//             .catch('error')
//         }   
//         console.log(product)
//         loadProduct()
        
//     }, [])
//     return {
//         product,
//     }
// }
