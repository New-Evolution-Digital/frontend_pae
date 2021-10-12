import React from 'react'
import Link from 'next/link'

const Auth0Links: React.FC = () => {
    return (
        <div className='flex justify-between w-1/4'>
					<Link href="/api/auth/login/" passHref>
            <a>Login</a>
					</Link>
					<Link href="/api/auth/logout/" passHref>
            <a>Logout</a>
					</Link>
					<Link href="/api/auth/me/" passHref>
            <a>Profile</a>
					</Link>
        </div>
    )
}
export default Auth0Links
