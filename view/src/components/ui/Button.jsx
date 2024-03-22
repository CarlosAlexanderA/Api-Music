export default function Button({ children, transparent, className }) {
  return (
    <button
      className={`font-semibold border  rounded-lg text-sm px-4 py-2 ${
        transparent
          ? 'text-current bg-transparent border-black/50'
          : 'bg-blue-500 text-white border-transparent'
      } ${className} `}>
      {children}
    </button>
  )
}
