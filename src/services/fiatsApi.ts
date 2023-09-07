import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const baseUrl = 'https://api.coinstats.app/public/v1/'

export const fiatsApi = createApi({
    reducerPath: 'fiatsApi',
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: (builder) => ({

        getFiats: builder.query({
            query: () => 'fiats'
        })
    })
})


export const {
    useGetFiatsQuery

} = fiatsApi;







