import { createSlice } from "@reduxjs/toolkit";
import { TicketData } from "../../types/types";

const initialState = {
    ticketsArr: [] as TicketData[],
    updatedArr: [] as TicketData[],
    displayMode: 'ticketsArr',
};

const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        updateTicketsArr: (state, action) => {
            state.ticketsArr = action.payload;
            state.displayMode = 'ticketsArr';
        },
        updateTicketsPrice: (state, action) => {
            state.updatedArr = action.payload;
            state.displayMode = 'updatedArr';
        },
    },
});

export const { updateTicketsArr, updateTicketsPrice } = ticketsSlice.actions;

export default ticketsSlice.reducer;
