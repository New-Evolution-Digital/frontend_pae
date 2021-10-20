// Documentation: This will be a reusable component to bring in data, and then display it.

interface ContainerProps {
    testData: number
    testTitle: string
}

const DashContainerSmall: React.FC<ContainerProps> = (
    props: ContainerProps
) => {
    const { testData, testTitle } = props
    return (
        <div className="container mx-auto">
            <div>
                <p>{testData}</p>
                <p>{testTitle}</p>
            </div>
        </div>
    )
}
export default DashContainerSmall
