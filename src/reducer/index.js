import { ActionTypes } from "./actionTypes"


export const initialState = {
    blogs : [],
    blog: {}  
}

export const reducer = (state, {type, payload}) => {
    switch(type){

        case ActionTypes.FETCH_BLOGS : return {
            ...state,
            blogs: payload

        }
    }
}