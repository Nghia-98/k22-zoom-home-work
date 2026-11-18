import ProductCard from "./ProductCard";

const ProductList = ({ products, onAddToCart }) => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
                return (
                    <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                )
            })}
        </div>
    )
}

export default ProductList;