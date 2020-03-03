const optionsDate = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
};

const initItems = [{
    id: 5,
    task: `redux Vue2 in China`,
    date: new Date().toLocaleString("ru", optionsDate).toString(),
    done: true
},
{
    id: 4,
    task: `redux Vue in China`,
    date: new Date().toLocaleString("ru", optionsDate).toString(),
    done: true
},
{
    id: 3,
    task: `redux Vue3 in China`,
    date: new Date(2020, 1, 15).toLocaleString("ru", optionsDate).toString(),
    done: true
},
{
    id: 2,
    task: `redux React in Facebook`,
    date: new Date(2020, 1, 15).toLocaleString("ru", optionsDate).toString(),
    done: true
},
{
    id: 1,
    task: `Angular in Google`,
    date: new Date().toLocaleString("ru", optionsDate).toString(),
    done: false
},
];

const initialState = {
    filterText: '',
    filterDate: '',
    todos: initItems,
    task: false,
    date: false
}

function sortTodo(state, action) {
    const type = action.payload.type;
    const isSorted = state[type];
    let direction = isSorted ? 1 : -1;
    const sorted = state.todos.sort((a, b) => {
        if (a[type] === b[type]) { return 1}
        return a[type] > b[type] ? direction : direction * -1;
    });
    state[type] = !isSorted;
    return sorted
}

function todosReducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [{
                id: state.todos.length + 1,
                task: action.payload.textValue,
                date: new Date(action.payload.dateValue).toLocaleString("ru", optionsDate).toString(),
                done: true
            },
            ...state.todos];
        case 'REMOVE_TODO':
            return state.todos.filter(item => item.id !== action.payload.id);
        case 'DONE_TODO':
            return state.todos.map(item => item.id === action.payload.id ? { ...item, done: !item.done } : item);
        case 'SORT_TODO':
            return sortTodo(state, action)
        default:
            return state.todos;
    }
}

function filterTextReducer(state = '', action) {
    switch (action.type) {
        case 'FILTER_TEXT':
            return action.payload.filterText
        default:
            return state
    }
}

function filterDateReducer(state = '', action) {
    switch (action.type) {
        case 'FILTER_DATE':
            return action.payload.filterDate
        default:
            return state
    }
}

export default function rootReducer(state = initialState, action) {
    return {
        filterText: filterTextReducer(state.filterText, action),
        filterDate: filterDateReducer(state.filterDate, action),
        todos: todosReducer(state, action),
        task: state.task,
        date: state.date
    }
}