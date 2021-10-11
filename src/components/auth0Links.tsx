import React from 'react'

const Auth0Links: React.FC = () => {
    /* eslint-disable no-eval */
    return (
        <div>
            <a href="/api/auth/login">Login</a>
            <a href="/api/auth/logout">Logout</a>
            <a href="/api/auth/me">User Profile</a>
        </div>
    )
}

export default Auth0Links
