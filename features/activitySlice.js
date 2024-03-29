import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeMenu : true,
    storiesModal: false,
    view: {
        viewType: '',
        viewData: {}
    },
}


const activitySlice = createSlice({
    name: 'activity',
    initialState,
    reducers: {
        activeMenuFunc : (state, action) => {
            state.activeMenu = !state.activeMenu
        },
        hideSidebar: (state, action) => {
            state.activeMenu = action.payload
        },
        modalBtnCondition: (state, action) => {
            state.storiesModal = action.payload
        },
        viewCondition: (state, action) => {
            state.view = action.payload
        }
    }
})

export const { activeMenuFunc, hideSidebar, modalBtnCondition, viewCondition } = activitySlice.actions

export default activitySlice.reducer