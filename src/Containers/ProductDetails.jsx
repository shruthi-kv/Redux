import react,{useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {selectedProduct} from '../Redux/Actions/productActions';


const ProductDetails = () =>{
    //https://fakestoreapi.in/api/products/1
    const {productId} = useParams()

    const product = useSelector((state) => state.product)

    const {image, title, price, category, description} = product;

    const dispatch = useDispatch()

    const fetchProductDetails = async() => {
        const prodDetails =  await axios.get(`https://fakestoreapi.in/api/products/${productId}`).catch((err)=> console.log(err))
        

        dispatch(selectedProduct(prodDetails.data.product))
    }

    useEffect(()=>{
        fetchProductDetails()
    },[])



    return(
       <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">{price}</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    )
}

export default ProductDetails;