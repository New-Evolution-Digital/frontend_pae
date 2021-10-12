import React from 'react'

import DealerProfileForm from '../components/dealerProfileForm'
// TODO: Add Apollo client to obtain the dealer information from the server. For now for demonstration, and testing purposes it is hardcoded.
// TODO: This needs to be on a private route authenticated, and likely use some of the information from the Auth0 me page (the object sent back from auth0)

const DealerProfile = () => {
    return (
        <div>
            <div className="flex justify-center flex-col">
                <div className="bg-blue-100 place-self-center p-6 rounded-lg shadow-lg justify-center max-w-xl">
                    <p>Name:Dealership Name Here</p>
                    <p>Address: 555 Dealership Way, Salem, Oregon 97302</p>
                    <p>Phone: 503-555-5555</p>
                    <p>Email: sales@randomdealership.com</p>
                    <p>Dealer Number: DA0000</p>
                </div>
                <div>
                    <DealerProfileForm />
                </div>
            </div>
        </div>
    )
}

export default DealerProfile
