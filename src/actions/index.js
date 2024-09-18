import * as  types from '../constants'
export const actChangeUserName = ( value ) =>{
    return{
        type: types.CHANGE_USERNAME,
        data: value
    }
}
export const actChangeCourseName = ( value )=>{
    return{
        type: types.CHANGE_COURSENAME,
        data: value
    }
}