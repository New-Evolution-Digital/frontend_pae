import React, { Fragment, useState } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import { MenuIcon, PlusCircleIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

const DashboardView = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="h-full bg-gray-100">
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-100"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-non focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon className="h-6 w-6 text-white" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <h1>AUTOMODIV</h1>
                  </div>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" />
          </Dialog>
        </Transition.Root>

        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          <div className="flex-1 flex flex-col min-h-0 bg-gray-800">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-hidden">
              <div className="flex items-center flex-shrink-0 px-4">
                <span className="text-gray-200 text-xl font-medium">
                  AUTOMODIV
                </span>
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                <Link href="/dashboard/settings" passHref>
                  <a
                    className={classNames(
                      false
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                    Settings
                  </a>
                </Link>
              </nav>
            </div>
            <div className="flex-shrink-0 flex bg-gray-700 p-4">
              <span className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <span className="inline-block h-9 w-9 rounded-full bg-gray-500" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">
                      Jesse Medrano
                    </p>
                    <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200 cursor-pointer">
                      Log Out
                    </p>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:p5-3 bg-gray-100">
            <button
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="min-h-screen flex-1 py-6 flex flex-col items-stretch justify-items-stretch">
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Dashboard
              </h1>
            </div>
            <div className="flex-shrink flex-grow flex-auto flex max-h-full max-w-7xl w-full mx-auto px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex-auto py-4 border-4 border-dashed flex flex-col items-center border-gray-200 rounded-lg h-full">
                <PlusCircleIcon className="w-24 h-24 text-gray-700 opacity-50" />
                <p className="font-semibold text-gray-700">Add A Door</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default DashboardView
