export const faqData = [
  {
    id: 1,
    question: 'Props trong React dùng để làm gì?',
    answer:
      'Props giúp truyền dữ liệu từ component cha xuống component con, giúp component con hiển thị hoặc xử lý dữ liệu được truyền vào.',
    category: 'React',
    isHot: true,
  },
  {
    id: 2,
    question: 'State khác gì với Props?',
    answer:
      'State là dữ liệu nội bộ do component tự quản lý và có thể thay đổi, trong khi Props là dữ liệu được truyền từ bên ngoài vào và component con không tự thay đổi được.',
    category: 'React',
    isHot: true,
  },
  {
    id: 3,
    question: 'Khi nào nên dùng useEffect?',
    answer:
      'useEffect dùng khi cần thực hiện các side effect như gọi API, đăng ký/huỷ sự kiện, hoặc đồng bộ dữ liệu với bên ngoài sau khi component render.',
    category: 'React',
    isHot: false,
  },
  {
    id: 4,
    question: 'Tailwind CSS hoạt động như thế nào?',
    answer:
      'Tailwind CSS cung cấp các class utility có sẵn, cho phép style trực tiếp trong JSX mà không cần viết file CSS riêng.',
    category: 'CSS',
    isHot: false,
  },
  {
    id: 5,
    question: 'Tại sao cần key khi render danh sách?',
    answer:
      'Key giúp React xác định phần tử nào thay đổi, được thêm hoặc bị xoá trong danh sách, từ đó tối ưu quá trình re-render.',
    category: 'React',
    isHot: false,
  },
]
