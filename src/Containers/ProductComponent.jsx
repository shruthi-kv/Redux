import react from "react";
import { useSelector } from "react-redux";

const ProductComponet = () => {
  const products = useSelector((state) => state.allProducts.products);

  console.log(products, "products");
  const renderList = products.map((ele) => {
    const { id, title, image, price, category } = ele;
    return (
        <div className="card bg-base-100 w-96 shadow-sm ml-5" key={id}>
          <figure>
            <img src={image} alt={title} />
          </figure>
         <div className="card-body">
            {/* <h2 className="card-title">{title}</h2> */}
            <p>
              {price} - {category}
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponet;
 