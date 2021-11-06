import React, { ReactElement, useState } from 'react'

import SidebarNav from '../components/dashboard/SidebarNav'
import ToggleSidebar from '../components/dashboard/ToggleSidebar'

interface IDashboardShell {
  header?: string | React.ReactNode
}

interface IDashboardHeader {
  text?: string
}

const DashboardHeader: React.FC<IDashboardHeader> = ({ text, children }) => {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      {!!text && (
        <span className="text-2xl font-semibold text-gray-900">{text}</span>
      )}
      {children}
    </div>
  )
}

const DashboardShell: React.FC<IDashboardShell> = ({ children, header }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  function HeaderSwitcher(): ReactElement | void {
    if (typeof header === 'string') {
      return <DashboardHeader text={header} />
    }
    if (React.isValidElement(header)) {
      return <DashboardHeader>{header}</DashboardHeader>
    }
  }

  return (
    <div className="h-full bg-gray-100">
      <div className="flex">
        <SidebarNav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="md:pl-64 flex flex-col flex-1">
          <ToggleSidebar setSidebarOpen={setSidebarOpen} />
          <main className="min-h-screen flex-1 py-6 flex flex-col items-stretch justify-items-stretch">
            {!!header && HeaderSwitcher()}
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

export default DashboardShell
