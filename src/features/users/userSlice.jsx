import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        name: 'Kaew',
        email: 'test@gmail.com'
    },
    {
        id: '2',
        name: 'Nueng',
        email: 'test2@gmail.com'
    },
    {
        id: '3',
        name: 'Opal',
        email: 'test3@gmail.com'
    },
];

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;