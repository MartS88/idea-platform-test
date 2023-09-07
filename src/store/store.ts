import {combineReducers, configureStore} from "@reduxjs/toolkit";
import ticketsReducer from './slice/ticketsSlice'
import {fiatsApi} from "../services/fiatsApi";
import {weatherApi} from "../services/weatherApi";

const rootReducer = combineReducers({
        tickets: ticketsReducer,
        [weatherApi.reducerPath]: weatherApi.reducer,
        [fiatsApi.reducerPath]: fiatsApi.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(fiatsApi.middleware)
                .concat(weatherApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
