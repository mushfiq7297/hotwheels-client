import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const productsPerPage = 9;

    useEffect(() => {
        console.log("Fetching products with search term:", searchTerm); // Debugging line
        const fetchProducts = async () => {
            const response = await fetch(`http://localhost:5000/products?page=${currentPage}&limit=${productsPerPage}&search=${searchTerm}`);
            const data = await response.json();
            setProducts(data.products);
            setTotalPages(data.totalPages);
        };
        fetchProducts();
    }, [currentPage, searchTerm]);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleSearch = () => {
        console.log("Search term before fetch:", searchTerm); // Debugging line
        setCurrentPage(1); // Reset to first page when search is triggered
    };

    return (
        <div>
            <div className="w-4/5 mx-auto font-stack">
                <div className="flex mb-4">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-l-md flex-grow"
                    />
                    <button
                        onClick={handleSearch}
                        className="px-4 py-2 bg-blue-500 text-white rounded-r-md"
                    >
                        Search
                    </button>
                </div>
                <div className="grid gap-3 px-auto content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))
                    ) : (
                        <p>No products found</p>
                    )}
                </div>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
