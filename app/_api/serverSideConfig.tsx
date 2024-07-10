import { cookies } from "next/headers"

export const ApiBaseURL = process.env.NEXT_PUBLIC_API





export const ssrMutate = async <T,>({ method = 'POST', path, body }: { path: string, body?: any, method?: 'POST' | 'PUT' }) => {

    try {


        const cookiesValue = cookies()

        const response = await fetch((ApiBaseURL ?? '')?.concat(path), {
            method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${cookiesValue.get('access_token')?.value ?? ''}`
            },
            body: JSON.stringify(body),

        })

        const data: T = await response.json()


        return data

    }
    catch (error) {
        return Promise.reject(error)
    }

}


export const ssrGet = async <T,>({ path, params }: { path: string, params?: any }) => {

    try {

        const response = await fetch((ApiBaseURL ?? '')?.concat(path) + '?' + (new URLSearchParams(params)).toString())

        const data: T = await response.json()


        return data

    }
    catch (error) {
        return Promise.reject(error)
    }

}
