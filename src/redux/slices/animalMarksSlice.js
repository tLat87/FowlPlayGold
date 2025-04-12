// store/animalMarksSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const animalMarksSlice = createSlice({
    name: 'animalMarks',
    initialState: [],
    reducers: {
        addAnimalMark: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(data) {
                return {
                    payload: {
                        id: nanoid(),
                        ...data,
                    },
                };
            },
        },
        removeAnimalMark: (state, action) => {
            return state.filter(mark => mark.id !== action.payload);
        },
    },
});

export const { addAnimalMark, removeAnimalMark } = animalMarksSlice.actions;
export default animalMarksSlice.reducer;
