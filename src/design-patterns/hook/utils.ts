
type getLaunchPatamsType = {
    name: string
}

type getLaunchOptionsType = {
    skip: boolean
}
export const useGetLaunchByNameQuery = (params:getLaunchPatamsType,options:getLaunchOptionsType) => {
    return {
        data: [{name:"test name1", id: 1},{name:"test name2", id:2},{name:"test name3", id:3}],
        isLoading: false,
        isSuccess: true,
    }
}