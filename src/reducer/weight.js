export const weightIncrease = 'WEIGHT/INCREASE'
export const weightDecrease = 'WEIGHT/DECREASE'

const initWeight = 100

const weight = (state = initWeight, action) => {
    switch (action.type) {
        case weightIncrease:
            return state + 1
        case weightDecrease:
            return state - 1
        default:
            return state
    }
};

export default weight