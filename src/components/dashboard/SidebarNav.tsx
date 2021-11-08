import React, { Fragment } from 'react'

import { Transition, Dialog } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import { RootState } from '../../redux'

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

interface ISideBarState {
  sidebarOpen: boolean
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarNav: React.FC<ISideBarState> = ({
  setSidebarOpen,
  sidebarOpen
}) => {
  const userData = useSelector(({ user }: RootState) => user.user)
  const router = useRouter()

  const isCurrentPath = (path: string) => {
    return router.pathname === path
  }

  const handleLogout = () => {
    router.replace('/')
  }

  return (
    <>
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
                  <span className="text-gray-200 text-xl font-medium">
                    AUTOMODIV
                  </span>
                </div>
                <nav className="mt-5 flex-1 px-2 space-y-1">
                  <Link href="/dashboard" passHref>
                    <a
                      className={classNames(
                        isCurrentPath('/dashboard')
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                      )}
                    >
                      Home
                    </a>
                  </Link>
                  <Link href="/dashboard/settings" passHref>
                    <a
                      className={classNames(
                        isCurrentPath('/dashboard/settings')
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
              <Link href="/dashboard" passHref>
                <a
                  className={classNames(
                    isCurrentPath('/dashboard')
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  Home
                </a>
              </Link>
              <Link href="/dashboard/settings" passHref>
                <a
                  className={classNames(
                    isCurrentPath('/dashboard/settings')
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
                    {!!userData && userData.username}
                  </p>
                  <p
                    className="text-xs font-medium text-gray-300 group-hover:text-gray-200 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Log Out
                  </p>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default SidebarNav
