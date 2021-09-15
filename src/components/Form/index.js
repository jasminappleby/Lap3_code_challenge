import React, { useState } from 'react';
// import { Result } from '../../components';


function Form({ fetchRepos }) {

    const [ user, setUser ] = useState()

    // const [ fetched, setFetched ] = useState(false)

    // const [ fetchedData, setFetchedData ] = useState()

    // const fetchData = async () => {
    //     const response = await fetch(`https://api.github.com/users/${user}/repos`)
    //     const result = await response.json()
    //     console.log(result)
    //     setFetched(true)
    //     setFetchedData(result)
    // }

    const handleSubmit = async e => {
        e.preventDefault()
        fetchRepos(user)
    }

    // const renderResult = () => <Result result={fetchedData}/>

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
            {/* { fetched ? renderResult() : <p>go away penguins</p> }    */}
        </div>
    );
};

export default Form;
