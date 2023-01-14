import {useState} from "react";
import useDebounce from "./hooks/useDebounce";
import {useGetLaunchByNameQuery} from "./utils";

export default function App(){
    const [value,setValue] = useState<string>('')
    const debouncedValue = useDebounce(value,500)

    const { data,isLoading, isSuccess } = useGetLaunchByNameQuery({
        name: debouncedValue,
    },{
        skip: debouncedValue === '',
    })

    return(
        <div>
            <p>Search launch by name</p>
            <input name={'search'} onChange={(e)=>setValue(e.target.value)} placeholder={"Ex: Starlink"}/>

            {isLoading && <p>Loading...</p>}
            {isSuccess && data?.map((launch:any)=>(
                <div key={launch.id}>
                    <p>{launch.name}</p>
                </div>
            ))}
        </div>
    )
}