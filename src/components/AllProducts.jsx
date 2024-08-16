import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
const AllProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[])
    return (
        <div>
            <div className="w-4/5 mx-auto font-stack">
            
            <div className=" grid gap-3 px-auto content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                products.map(product => <ProductCard
                key={product._id}
                product={product}         
                ></ProductCard>)
            }
            </div>
        </div>
        </div>
    );
};

export default AllProducts;