import Badge from './Badge'

function formatPrice(value) {
  return value.toLocaleString('vi-VN') + 'đ'
}

function ProductItem({ product, onAddToCart }) {
  const { name, price, image, inStock, discountPercent } = product

  const finalPrice =
    discountPercent > 0 ? price - (price * discountPercent) / 100 : price

  const handleAddToCart = () => {
    onAddToCart(name, finalPrice)
  }

  return (
    <div
      className={`relative flex flex-col gap-2 rounded-xl bg-white p-4 shadow-md ${
        !inStock ? 'opacity-50' : ''
      }`}
    >
      {discountPercent > 0 && <Badge type="discount">Giảm giá {discountPercent}%</Badge>}
      {!inStock && <Badge type="outOfStock">Hết hàng</Badge>}

      <img
        src={image}
        alt={name}
        className="h-40 w-full rounded-lg object-contain"
      />

      <h3 className="font-semibold text-gray-800">{name}</h3>

      <div className="flex items-center gap-2">
        {discountPercent > 0 ? (
          <>
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(price)}
            </span>
            <span className="text-base font-semibold text-red-600">
              {formatPrice(finalPrice)}
            </span>
          </>
        ) : (
          <span className="text-base font-semibold text-gray-800">
            {formatPrice(price)}
          </span>
        )}
      </div>

      <button
        onClick={handleAddToCart}
        disabled={!inStock}
        className={`mt-2 rounded-lg px-4 py-2 text-sm font-medium text-white ${
          inStock
            ? 'bg-blue-600 hover:bg-blue-700'
            : 'cursor-not-allowed bg-gray-400'
        }`}
      >
        {inStock ? 'Thêm vào giỏ' : 'Hết hàng'}
      </button>
    </div>
  )
}

export default ProductItem
