export default function reducer(state,action){
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                userIndex:action.payload
            };
        default:
            return state;
    }
}