function FaqItem({ faq, isOpen, onSelectFaq }) {
  const { id, question, answer, category, isHot } = faq

  return (
    <div className="rounded-xl bg-white p-4 shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="mb-1 flex items-center gap-2">
            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
              {category}
            </span>
            {isHot && (
              <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs font-semibold text-white">
                Hot
              </span>
            )}
          </div>
          <h3 className="font-semibold text-gray-800">{question}</h3>
        </div>

        <button
          onClick={() => onSelectFaq(id)}
          className="shrink-0 rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
        >
          Xem chi tiết
        </button>
      </div>

      {isOpen && <p className="mt-3 text-sm text-gray-600">{answer}</p>}
    </div>
  )
}

export default FaqItem
