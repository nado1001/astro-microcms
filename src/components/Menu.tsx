import { useState } from 'react'

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="relative">
      <button className="" onClick={handleClick}>
        Menu
      </button>
      {isOpen && (
        <ul className="border absolute left-[-80px] top-[40px] bg-gray-300 rounded-lg flex flex-col items-center justify-center w-[200px] min-h-[150px]">
          <li>
            <a href="/" className="text-white font-bold">
              Home
            </a>
          </li>
        </ul>
      )}
    </div>
  )
}
