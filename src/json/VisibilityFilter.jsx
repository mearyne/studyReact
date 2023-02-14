function visibilityFilter(state = 'SHOW_ALL', action) {
    if (action.type === 'SET_VISIBILITY_FILTER') {
        return action.filter
    } else {
        return state
    }
}

/**
 * 파라미터로 state와 action이 들어온다
 *
 */
function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([{text: action.text, completed: false}])
        case 'TOGGLE_TODO':
            return state.map(
                (todos, index) =>
                    action.index === index ? {text: todos.text, completed: !todos.completed} : todos
            )
        default:
            return state
    }
}

/**
 * 상단의 두개의 함수를 합친 함수이다
 * 파라미터로 들어가는 action들에는 추가하기, 완료표시하기, 필터링 세가지이다
 */
function todoApp(state = {}, action) {
    return {
        todos: todos(state.todos, action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    }
}

export default todoApp