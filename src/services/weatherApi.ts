import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
    }),
    endpoints: (builder) => ({
        getWeather: builder.query({
            query: (city) => {
                // Используйте параметры запроса для передачи названия города
                return `/${city}?key=YG7A2R9FAATTBZADVQHCZRBBM`;
            },
        }),
    }),
});

export const {
    useGetWeatherQuery,
} = weatherApi;












// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=YOUR_API_KEY

