function Badge({ type, children }) {
  const styles = {
    discount: 'left-2 bg-red-500 text-white top-2',
    outOfStock: 'right-2 bg-gray-500 text-white',
  }

  return (
    <span
      className={`absolute top-2 rounded-md px-2 py-1 text-xs font-semibold ${styles[type]}`}
    >
      {children}
    </span>
  )
}

export default Badge
