import Auth0Links from '../components/auth0Links'
import { Meta } from '../layout/Meta'
import { Main } from '../templates/Main'

const Index = () => {
    // const router = useRouter()

    return (
        <Main
            meta={
                <Meta
                    title="Next.js Boilerplate Presentation"
                    description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
                />
            }
        >
            <Auth0Links />
        </Main>
    )
}

export default Index
