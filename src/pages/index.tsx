import Auth0Links from '../components/auth0Links'
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
            <Auth0Links />
        </Main>
    )
}

export default Index
