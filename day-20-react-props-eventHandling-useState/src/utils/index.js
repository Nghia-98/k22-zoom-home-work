export function formatPrice(value) {

  if (isNaN(value)) {
    return '-'
  }

  return value.toLocaleString('vi-VN') + 'đ'
}