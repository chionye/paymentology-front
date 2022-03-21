import Container from "./Container"

const Title = () => {
    return(
        <Container>
            <div className="md:w-5/6 mx-auto">
                <h1 className="font-medium tracking-wider text-2xl text-gray-900">Paymentology Transaction <span className="text-blue-500">Reconciliation</span> App</h1>

            </div>
        </Container>
    )
}

export default Title;