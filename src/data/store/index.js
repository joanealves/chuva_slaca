import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import SlacaSlice from '../../main/state/SlacaSlice'

const store = configureStore({
    reducer: {
        infoSlaca: SlacaSlice
    },
})

export const useAppDispatch = () => useDispatch()

export default store