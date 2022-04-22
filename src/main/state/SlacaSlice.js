import { createSlice } from '@reduxjs/toolkit'

const SlacaSlice = createSlice({
    name: 'infoSlaca',
    initialState: {
        data: {
            menu: false,
            isOverlay: false,

        }
    },
    reducers: {
        setMenu: (state, action) => {
            state.data.menu = action.payload
        },
        setIsOverlay: (state, action) => {
            state.data.isOverlay = action.payload
        }
    }
})

export default SlacaSlice.reducer

export const {
    setMenu,
    setIsOverlay
} = SlacaSlice.actions

export const selectSlacaSliceData = state => state.infoSlaca.data
