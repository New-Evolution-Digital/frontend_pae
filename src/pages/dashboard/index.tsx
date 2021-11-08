import React from 'react'

import { PlusCircleIcon } from '@heroicons/react/outline'

import DashboardShell from '../../templates/DashboardShell'

const DashboardView = () => {
  return (
    <DashboardShell header="Dashboard">
      <div className="flex-auto py-4 border-4 border-dashed flex flex-col items-center justify-center border-gray-200 rounded-lg h-full">
        <PlusCircleIcon className="w-24 h-24 text-gray-700 opacity-50" />
        <p className="font-semibold text-gray-700">Add A Door</p>
      </div>
    </DashboardShell>
  )
}

export default DashboardView
