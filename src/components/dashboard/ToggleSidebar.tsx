import React from 'react'

import { MenuIcon } from '@heroicons/react/outline'

interface IToggleSidebar {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ToggleSidebar: React.FC<IToggleSidebar> = ({ setSidebarOpen }) => {
  return (
    <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:p5-3 bg-gray-100">
      <button
        className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )
}

export default ToggleSidebar
