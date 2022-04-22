import { createSlice } from '@reduxjs/toolkit'

const SlacaSlice = createSlice({
    name: 'infoSlaca',
    initialState: {
        data: {
            menu: false,

        }
    },
    reducers: {
        setMenu: (state, action) => {
            console.log(action)
            state.data.menu = action.payload
        }
    }
})

export default SlacaSlice.reducer

export const {
    setMenu
} = SlacaSlice.actions

export const selectSlacaSliceData = state => state.infoSlaca.data
