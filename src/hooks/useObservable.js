import { useEffect, useState } from 'react'

const useObservable = (observable, initialState = null, ...params) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        const subscription$ = observable(...params)
            .subscribe((recivedData) => setData(recivedData))

        return () => subscription$.unsubscribe()
    }, [])

    return [data, setData]
}

export default useObservable