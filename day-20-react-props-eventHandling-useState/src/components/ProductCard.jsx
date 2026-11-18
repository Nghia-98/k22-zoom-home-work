import { formatPrice } from '../utils'

function ProductCard({ product, onAddToCart }) {
    const { id, name, price, image } = product

    return (
        <div className="flex flex-col gap-2 rounded-xl bg-white p-4 shadow-md">
            <img src={image} alt={name} className="h-40 w-full rounded-lg object-contain" />
            <h3 className="font-semibold text-gray-800">{name}</h3>
            <span className="text-base font-semibold text-gray-800">{formatPrice(price)}</span>
            <button
                onClick={() => onAddToCart(id)}
                className="mt-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
                Thêm vào giỏ
            </button>
        </div>
    )
}

export default ProductCard
