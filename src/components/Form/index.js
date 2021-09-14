import React, { useState } from 'react';

function Form() {

    const [ user, setUser ] = useState()

    const [fetched, setFetched] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault()
        const response = await fetch(`https://api.github.com/users/${user}/repos`)
        const result = await response.json()
        setFetched(true)
    }

    // const renderResult = () => <Result result={result}/>

    const updateInput = e => {
        const input = e.target.value 
        setUser(input)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} role="form">
                <input type="text" aria-label="Username" onChange={e => updateInput(e)}/>
                <input type="submit" value="Search" />
            </form>
            { fetched ? <p>penguins</p> : <p>go away penguins</p> }   
        </div>
    );
};

export default Form;
