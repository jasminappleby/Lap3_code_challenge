import React, { useState } from 'react';

function Form() {

    const [ user, setUser ] = useState("")

    const handleSubmit = async e => {
        e.preventDefault()
        const response = await fetch(`https://api.github.com/users/${user}/repos`)
        const result = await response.json()
    }

    const updateInput = e => {
        const input = e.target.value 
        setUser(input)
    }

    return (
        <form onSubmit={handleSubmit} role="form">
            <input type="text" aria-label="Username" onChange={e => updateInput(e)}/>
            <input type="submit" value="Search" />
        </form>
    );
};

export default Form;
