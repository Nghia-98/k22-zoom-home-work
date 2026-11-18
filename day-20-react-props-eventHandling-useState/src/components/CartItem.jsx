import { formatPrice } from '../utils'

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
    const { id, name, price, quantity } = item
    const subtotal = price * quantity

    return (
        <div className="flex items-center justify-between gap-4 rounded-lg bg-white p-3 shadow-sm">
            <div className="flex-1">
                <h4 className="font-medium text-gray-800">{name}</h4>
                <span className="text-sm text-gray-500">{formatPrice(price)}</span>
            </div>

            <div className="flex items-center gap-2">
                <button
                    onClick={() => onDecrease(id)}
                    disabled={quantity === 1}
                    className="h-7 w-7 rounded border text-sm disabled:cursor-not-allowed disabled:opacity-40"
                >
                    -
                </button>
                <span className="w-6 text-center">{quantity}</span>
                <button
                    onClick={() => onIncrease(id)}
                    className="h-7 w-7 rounded border text-sm"
                >
                    +
                </button>
            </div>

            <span className="w-24 text-right font-semibold text-gray-800">{formatPrice(subtotal)}</span>

            <button
                onClick={() => onRemove(id)}
                className="text-sm text-red-600 hover:underline"
            >
                Xoá
            </button>
        </div>
    )
}

export default CartItem
