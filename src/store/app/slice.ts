import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpenSidebar: true,
    breadcrumd: [
        {name: 'home', url: '/home'},
        {name: 'card', url: '/card'}
    ],
    alert: {
        openStatus: false,
        type: '',
        title: '',
        body: '',
        actions: null,
        url: ''
    }
}

export default createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleCollapseSideBar: (state) => ({
            ...state,
            isOpenSidebar: !state.isOpenSidebar
        }),
        setAlertStausSuc: (state, action) => ({
            ...state,
            alert: {
                openStatus: true,
                type: action.payload.type,
                title: action.payload.title,
                body: action.payload.body,
                actions: action.payload.actions,
                url: action.payload.url
            }
        }),
        resetAlertDialog: (state) => ({
            ...state,
            alert: {
                openStatus: false,
                type: "",
                title: "",
                body: "",
                actions: null,
                url: ""
            }
        }),
        updateBrSuccess: (state, action) => ({
            ...state,
            breadcrumd: action.payload
        })
    }
});