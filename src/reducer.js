const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            if ( state === 5){
                return state;
            }
            else {
                return state + 1;
            }

        case 'DEC':
            if (state === 0) {
                return state
            }
            else {
                return state - 1;
            }

        default:
            return state;
    }
};

export default reducer;