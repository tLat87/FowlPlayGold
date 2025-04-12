// store/calendarSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    events: {}, // { '2025-03-31': [{ id, title, category, description }] }
};

const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        addEvent: (state, action) => {
            const { date, event } = action.payload;
            if (!state.events[date]) state.events[date] = [];
            state.events[date].push({ id: Date.now(), ...event });
        },
        removeEvent: (state, action) => {
            const { date, id } = action.payload;
            state.events[date] = state.events[date].filter(ev => ev.id !== id);
        },
    },
});

export const { addEvent, removeEvent } = calendarSlice.actions;
export default calendarSlice.reducer;
