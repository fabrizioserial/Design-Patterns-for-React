import Card from "./components/Card";

const App = ( ) => {
    return(
        <>
            <Card>
                <Card.Image src={''} alt={'header image'} />
                <Card.Header title={"Card title"}/>
                <Card.Body content={"Lorem ipsum"}/>
            </Card>
            <Card>
                <Card.Header title={"Card without image"}/>
                <Card.Body content={"Awesome!"}/>
            </Card>
        </>
    )
}

export default App