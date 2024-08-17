import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [brandName, setBrandName] = useState('');
    const [category, setCategory] = useState('');
    const [minPrice, setMinPrice] = useState(''); // Store as string
    const [maxPrice, setMaxPrice] = useState(''); // Store as string
    const [sortBy, setSortBy] = useState('dateAdded'); // Default sort by date added
    const [sortOrder, setSortOrder] = useState('desc'); // Default order is descending
    const productsPerPage = 9;

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(
                `http://localhost:5000/products?page=${currentPage}&limit=${productsPerPage}&search=${searchTerm}&brandName=${brandName}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&sortBy=${sortBy}&sortOrder=${sortOrder}`
            );
            const data = await response.json();
            setProducts(data.products);
            setTotalPages(data.totalPages);
        };
        fetchProducts();
    }, [currentPage, searchTerm, brandName, category, minPrice, maxPrice, sortBy, sortOrder]);
    

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
        setCurrentPage(1); // Reset to first page when search is triggered
    };

    const handleSortChange = (e) => {
        const [sortField, sortOrder] = e.target.value.split('-');
        setSortBy(sortField);
        setSortOrder(sortOrder);
        setCurrentPage(1); // Reset to first page when sorting is changed
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
                    <select
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-md"
                    >
                        <option value="">All Brands</option>
                        <option value="Tesla">Tesla</option>
                        <option value="Ford">Ford</option>
                        {/* Add more brand options here */}
                    </select>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-md"
                    >
                        <option value="">All Categories</option>
                        <option value="SUV">SUV</option>
                        <option value="Sedan">Sedan</option>
                        {/* Add more category options here */}
                    </select>
                    <input
                        type="number"
                        placeholder="Min Price"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-l-md"
                    />
                    <input
                        type="number"
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-r-md"
                    />
                    <button
                        onClick={handleSearch}
                        className="px-4 py-2 bg-blue-500 text-white rounded-r-md"
                    >
                        Search
                    </button>

                </div>
                <div className="flex mb-4">
                    {/* Search and filter elements */}
                    <select
                        value={`${sortBy}-${sortOrder}`}
                        onChange={handleSortChange}
                        className="px-4 py-2 border border-gray-300 rounded-md"
                    >
                        <option value="dateAdded-desc">Date Added: Newest First</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                    </select>
                </div>
                <div className="grid gap-3 px-auto content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
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
