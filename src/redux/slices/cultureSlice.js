import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

const cultureSlice = createSlice({
    name: 'cultures',
    initialState,
    reducers: {
        addCulture: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare({ title, sort, date, stage, note, stateText, marks }) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        sort,
                        date,
                        stage,
                        note,
                        state: stateText,
                        marks,
                    }
                }
            }
        },
        removeCulture: (state, action) => {
            return state.filter(culture => culture.id !== action.payload);
        },
    }
});

export const { addCulture, removeCulture } = cultureSlice.actions;
export default cultureSlice.reducer;
