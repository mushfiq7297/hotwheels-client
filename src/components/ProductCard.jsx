import { IoMdTime } from "react-icons/io";
import { MdOutlinePeople } from "react-icons/md";
import { Link } from "react-router-dom";


const productCard = ({product}) => {
    const {
    _id,
    productName,
    productImage,
    brandName,
    description,
    price,
    category,
    creationDate,
    ratings
  } = product;
    return (
        <div>
             <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img
            src={productImage}
            alt="Shoes"
            className="w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="flex text-xl font-bold">{productName}</h2>
          <p className=" flex gap-1 my-1 text-primary">{description}</p>
          <div className="flex gap-4">
            <p className="flex gap-1 my-1 font-semibold">
            Brand: {brandName}
            </p>
            <p className="flex gap-1 my-1 font-semibold">
             
              Category: {category}
            </p>
          </div>

          <div className="flex gap-4">
            <p className=" flex gap-1 my-1 font-semibold">Ratings: {ratings}</p>
            <p className=" flex gap-1 my-1 font-semibold">Date: {creationDate}</p>
          </div>
          <div>
          <h2 className="text-xl font-bold">Price: {price}$</h2>
          </div>

         
        </div>
      </div>
        </div>
    );
};

export default productCard;