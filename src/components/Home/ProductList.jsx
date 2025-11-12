import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const ProductList = () => {

    useEffect(()=>{
        console.log('im a useeffect');
        axios.get('https://fakestoreapi.com/products')
        .then(response => console.log(response.data));
        
    },[])


    const navigate = useNavigate()
  return (
    <>
        <div>ProductList</div>
        <button onClick={() => navigate('/aboutus')}>About</button>
        </>
  )
}

export default ProductList