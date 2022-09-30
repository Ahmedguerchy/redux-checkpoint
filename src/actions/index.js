let nextTodo = 0;
 export const addTodo = text => ({
type: "ADD_TODO",
id: nextTodo++,
text
 });
export const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'HOW_COMPLETED',
    SHOW_ACTIVE: 'HOW_ACTIVE'

}

export const toggleTodo = id => ({
    type:"TOGGLE_TODO",
    id
})
export const setVisibilityFilter = filter => ({
    type:"SET_VISIBILITY_FILTER",
    filter
})