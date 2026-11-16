function UserProfileCard({ avatar, fullName, jobTitle, isOnline, skills }) {
  const handleContact = () => {
    alert(`Đang kết nối với ${fullName}...`)
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 rounded-xl bg-white p-6 shadow-md">
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={fullName}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{fullName}</h3>
          <p className="text-sm text-gray-500">{jobTitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span
          className={`h-2.5 w-2.5 rounded-full ${isOnline ? 'bg-green-400' : 'bg-gray-400'
            }`}
        />
        <span className="text-sm text-gray-600">
          {isOnline ? 'Online' : 'Offline'}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
          >
            {skill}
          </span>
        ))}
      </div>

      <button
        onClick={handleContact}
        className="mt-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
      >
        Liên hệ
      </button>
    </div>
  )
}

export default UserProfileCard
