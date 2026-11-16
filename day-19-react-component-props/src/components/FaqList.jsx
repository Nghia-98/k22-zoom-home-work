import { useState } from 'react'
import FaqItem from './FaqItem'

function FaqList({ faqData }) {
  const [openFaqId, setOpenFaqId] = useState(null)

  const handleSelectFaq = (id) => {
    setOpenFaqId((prevId) => (prevId === id ? null : id))
  }

  return (
    <div className="flex flex-col gap-3">
      {faqData.length > 0 &&
        faqData.map((faq) => (
          <FaqItem
            key={faq.id}
            faq={faq}
            isOpen={openFaqId === faq.id}
            onSelectFaq={handleSelectFaq}
          />
        ))}
    </div>
  )
}

export default FaqList
