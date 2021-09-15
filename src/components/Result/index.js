import React from 'react';
import './styles.css'

export default function ({ result }) {

    const length = result.length
    let arr = new Array(length)

    for( let i = 0; i < length; i++ ) {
        arr[i] = 
        <div>
            <section className="section-border">
                <h2 className="repo">{result[i].name}</h2>
                <p className="results"> Open Issues: {result[i].open_issues_count}</p>
                <p className="results"> Stargazers: {result[i].stargazers_count}</p>
                <p className="results"> Forks: {result[i].forks_count}</p>
            </section>
        </div>
    }

    return (
        <div>{arr}</div>
    )
}