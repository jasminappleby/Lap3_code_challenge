import React, { useState } from 'react';

function Form({ fetchRepos }) {

    const [ user, setUser ] = useState()

    const handleSubmit = async e => {
        e.preventDefault()
        fetchRepos(user)
    }

    const updateInput = e => {
        const input = e.target.value 
        setUser(input)
    }



    return (
        <div>
            <h1>GitHub Repo Search</h1>
            <p>Use the below search bar to see that particular users repos and some information about them!</p>
            <form onSubmit={handleSubmit} role="form">
                <label for="user-search">Username: </label>
                <input type="text" aria-label="Username" id="user-search" onChange={e => updateInput(e)}/>
                <input type="submit" value="Search" />
            </form>
        </div>
    );
};

export default Form;
