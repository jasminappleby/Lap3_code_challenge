import React from 'react';

export default function ({ result }) {

    const list = document.createElement("ul")

    result.forEach(repo => {
        const listItem = document.createElement("li")
        listItem.textContent = repo.name
        list.appendChild(listItem)
    })

    return (
        <p>list</p>
    )
}