
interface DummyComponentProps {
    type: string
}

const DummyComponent = ({type}:DummyComponentProps) => {
    return <div>{type}: Dummy Component</div>
}
export default DummyComponent