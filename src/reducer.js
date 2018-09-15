const initialState = {
    number: 10,
    prevAction:'',
}

export default (state = initialState,action) => {
    switch(action.type) {
        case 'ADD':
        return {
            ...state,
            number : state.number + 1,
            prevAction:'ADD'
        }
        case 'SUB':
        return {
            ...state,
            number : state.number - 1,
            prevAction:'SUB'
        }
        //default used in two cases
        //1. when called from other actions
        //2. for update value for components
        default :
            return state
    }
}