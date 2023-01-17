export const countIncrease = "COUNT/INCREASE";
export const countDecrease = 'COUNT/DECREASE';
export const countInit = 'COUNT/INIT';

const initState = {
    count: 0,
};

const counter = (state = initState, action) => {
    switch (action.type) {
        case countIncrease:
            return {
                ...state,
                count: state.count + 1
            };
        case countDecrease:
            return {
                ...state,
                count: state.count - 1
            }
        case countInit:
            return {
                count: initState.count
            }
        default:
            return state;
    }
};

export default counter