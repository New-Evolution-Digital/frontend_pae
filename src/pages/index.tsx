import { Popover } from '@headlessui/react'
import Link from 'next/link'

import { Meta } from '../layout/Meta'
import { Main } from '../templates/Main'

const Index = () => {
    // const router = useRouter()

    return (
        <Main
            meta={
                <Meta
                    title="Project Auto Evolution"
                    description="The new car shopping experience for consumers, with dealership enhancements, and "
                />
            }
        >
            <div className="relative pt-6 pb-16 sm:pb-24">
                <Popover>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
                            <div className="flex items-center justify-between w-full md:w-auto">
                                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                                    <div className="flex items-center justify-between w-full md:w-auto">
                                        <span>AUTOMODIV</span>
                                    </div>
                                </div>
                                <div className="hidden md:flex md:space-x-10">
                                    <a
                                        href="#"
                                        className="font-medium text-gray-500 hover:text-gray-900"
                                    >
                                        Features
                                    </a>
                                </div>
                                <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                                    <span className="inline-flex rounded-md shadow">
                                        <Link href="/login" passHref>
                                            <a className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md bg-white hover:bg-gray-50">
                                                Login
                                            </a>
                                        </Link>
                                    </span>
                                    <span className="inline-flex rounded-md shadow">
                                        <Link href="/join" passHref>
                                            <a className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md bg-white hover:bg-gray-50">
                                                Sign Up
                                            </a>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </nav>
                    </div>
                </Popover>
            </div>
        </Main>
    )
}

export default Index
