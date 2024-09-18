import * as types from "../constants";

const initialState ={
    userName: "Redux-Demo",
    courseName: "Redux-ReactJs"
}
const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.CHANGE_USERNAME:
            return{
                ...state, // clone lại dữ liệu cũ
                userName: action.data,};

        case types.CHANGE_COURSENAME:
            return{
                ...state,
                courseName: action.data
            };
    
        default:
            return state;
    }
}
export default rootReducer;