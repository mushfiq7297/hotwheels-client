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
          <div className="flex gap-4">
            <p className="flex gap-1 my-1">
              <MdOutlinePeople className="my-1" />
              {brandName}
            </p>
            <p className="flex gap-1 my-1">
              <IoMdTime className="my-1" />
              {category}
            </p>
          </div>

          <div className="flex gap-4">
            <h2 className="text-xl font-bold">{price}</h2>
            <p className=" flex gap-1 my-1 text-primary">{creationDate}</p>
          </div>

          <Link to={`/viewDetailsPage/${_id}`}>
            <button className="btn btn-primary w-full">View Details</button>
          </Link>
        </div>
      </div>
        </div>
    );
};

export default productCard;