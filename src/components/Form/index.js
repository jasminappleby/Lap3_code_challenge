import React from 'react';

function Form({ getResult }) {

    const [ location, setLocation ] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        getResult(location);
    }

    const updateInput = e => {
        const input = e.target.value 
        setLocation(input)
    }

    return (
        <form onSubmit={handleSubmit} role="form">
            <input type="text" aria-label="Location" onChange={e => updateInput(e)} />
            <input type="submit" value="Search" />
        </form>
    );
};

export default Form;
