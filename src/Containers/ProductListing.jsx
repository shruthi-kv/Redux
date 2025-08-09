import react, { useEffect } from "react";
import { useSelector , useDispatch} from "react-redux";
import ProductComponet from "./ProductComponent";
import axios from "axios";
import {setProducts} from '../Redux/Actions/productActions';

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch()

  const fetchProduct = async () => {
    const res = await axios
      .get("https://fakestoreapi.in/api/products")
      .catch((err) => {
        console.log("error", err);
      });
    console.log(res.data, "res");
    dispatch(setProducts(res.data.products))
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  

  return (
   <div className="flex flex-wrap gap-4 mt-15">
      <ProductComponet />
    </div>
  );
};

export default ProductListing;
