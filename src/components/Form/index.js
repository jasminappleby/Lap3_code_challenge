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
            <form onSubmit={handleSubmit} role="form">
                <input type="text" aria-label="Username" onChange={e => updateInput(e)}/>
                <input type="submit" value="Search" />
            </form>
            {/* { fetched ? renderResult() : <p>go away penguins</p> }    */}
        </div>
    );
};

export default Form;
