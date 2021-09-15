import React from 'react';
import './styles.css'

export default function ({ result }) {

    const length = result.length
    let arr = new Array(length)

    for( let i = 0; i < length; i++ ) {
        arr[i] = 
        <div>
            <p className="repo">{result[i].name}</p>
            <p className="open-issues"> Open Issues: {result[i].open_issues_count}</p>
            <br></br>
        </div>
    }

    return (
        <div>{arr}</div>
    )
}