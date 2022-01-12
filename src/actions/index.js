const loadRepos = { name: "penguins" }

export const fetchRepos = user => {
    return async dispatch => {
        try {
            const response = await fetch(`https://api.github.com/users/${user}/repos`)
            const result = await response.json()
            dispatch({
                type: "LOAD_REPOS",
                payload: result
            })
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        }
    }  
}
