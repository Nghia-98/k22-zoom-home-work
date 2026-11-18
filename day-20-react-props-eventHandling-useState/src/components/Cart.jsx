import CartItem from './CartItem'
import { formatPrice } from '../utils'

function Cart({ cartItems, onIncrease, onDecrease, onRemove }) {
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    if (cartItems.length === 0) {
        return <p className="text-gray-500">Giỏ hàng đang trống.</p>
    }

    return (
        <div className="flex flex-col gap-3">
            {cartItems.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    onIncrease={onIncrease}
                    onDecrease={onDecrease}
                    onRemove={onRemove}
                />
            ))}

            <div className="mt-2 flex justify-between border-t pt-2 font-semibold text-gray-800">
                <span>Tổng ({totalQuantity} sản phẩm)</span>
                <span>{formatPrice(totalPrice)}</span>
            </div>
        </div>
    )
}

export default Cart
