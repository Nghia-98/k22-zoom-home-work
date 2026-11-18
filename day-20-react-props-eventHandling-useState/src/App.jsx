import { useState } from 'react'
import products from './data/product'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

function App() {
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (productId) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === productId)

      if (existing) {
        return prevItems.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }

      const product = products.find((p) => p.id === productId)
      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  const handleIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)),
    )
  }

  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        (item.id === id && item.quantity > 1) ? { ...item, quantity: item.quantity - 1 } : item,
      ),
    )
  }

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900">Mini Cart</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
        <ProductList products={products} onAddToCart={handleAddToCart} />
        <Cart
          cartItems={cartItems}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onRemove={handleRemove}
        />
      </div>
    </div>
  )
}

export default App
