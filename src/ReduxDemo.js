import {createStore} from 'redux'
const initialState = {
    name: "Viet Trung",
    company: "Devmaster Academy"
}
const reducer = (state = initialState, action) =>{
    //tiếp nhận action, cập nhật state
    switch(action.type){
        case "CHANGE_NAME":
            state.name = action.NameNew
            break;
        case "CHANGE_COMPANY":
            state.company = action.CompanyNew
            break;
        default:
            return state
    }
    return state;
}
const store = createStore(reducer);
console.log(store)
console.log(store.getState());

const actChangeName = () =>{
    return{
        type:"CHANGE_NAME",
        NameNew:"Khoi"
    }
}
store.dispatch(actChangeName());
console.log("Change Name");
console.log(store.getState())

const actChangeCompany = () =>{
    return{
        type:"CHANGE_COMPANY",
        CompanyNew:"146 Trung Hòa"
    }
}
store.dispatch(actChangeCompany());
console.log("Change Company");
console.log(store.getState());





export default reducer;