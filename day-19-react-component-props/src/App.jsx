import UserProfileCard from './components/UserProfileCard'
import ProductList from './components/ProductList'
import FaqList from './components/FaqList'
import { products } from './data/products'
import { faqData } from './data/faqData'

const users = [
  {
    id: 1,
    avatar: 'https://i.pravatar.cc/150?img=12',
    fullName: 'Nguyễn Văn An',
    jobTitle: 'Frontend Developer',
    isOnline: true,
    skills: ['React', 'Node.js', 'Tailwind'],
  },
  {
    id: 2,
    avatar: 'https://i.pravatar.cc/150?img=47',
    fullName: 'Trần Thị Bình',
    jobTitle: 'UI/UX Designer',
    isOnline: false,
    skills: ['Figma', 'Photoshop', 'CSS'],
  },
]

function App() {
  const handleAddToCart = (productName, finalPrice) => {
    alert(
      `Đã thêm "${productName}" vào giỏ hàng với giá ${finalPrice.toLocaleString(
        'vi-VN',
      )}đ`,
    )
  }

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">
          Day 19 - React Components &amp; Props
        </h1>
        <a
          href="https://f8.edu.vn/assignment-classes/237"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline"
        >
          https://f8.edu.vn/assignment-classes/237
        </a>
      </header>

      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          Bài 1: UserProfileCard
        </h2>
        <div className="flex flex-wrap gap-6">
          {users.map((user) => (
            <UserProfileCard key={user.id} {...user} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          Bài 2: ProductList
        </h2>
        <ProductList products={products} onAddToCart={handleAddToCart} />
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          Bài 3: FAQ / Accordion
        </h2>
        <FaqList faqData={faqData} />
      </section>
    </div>
  )
}

export default App
