import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Result } from '../../components';
import { fetchRepos } from '../../actions';

function Render(){

    const dispatch = useDispatch();
    const name = useSelector(state => state.name);

    const user = userName => dispatch(fetchRepos(userName));

    const renderResult = () => <Result result={name}/>

    return (
        <div>
            <Form fetchRepos={user}/>

            { fetched ? renderResult() : <p>go away penguins</p> }   

        </div>
    )

}