import React from 'react';

export default function ({ result }) {
    
    const length = result.length
    let arr = new Array(length)

    for( let i = 0; i < length; i++ ) {
        arr[i] = <p>{result[i].name}</p>
    }

    return (
        <div>{arr}</div>
    )
}