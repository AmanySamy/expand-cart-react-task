import React, { useState } from 'react'
import styled from 'styled-components'

export default function Tags({ tags }) {
    const [ActiveTag, setActiveTag] = useState('')
    const List = styled.ul`
        display: flex;
        align-items: center;
        justify-content: center;
    `
    const Item = styled.li`
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
        margin: 0px 10px;
    `
    function handleClick(tag) {
        setActiveTag(tag.name)
        console.log(tag.name)
    }
    let tagsList = tags.map(tag => (
        <Item onClick={() => handleClick(tag)}>
            <img src={tag.image} alt="" />
            <h3>{tag.name}</h3>
        </Item>
    ))
    
    return (
        <div>
            <List>{tagsList}</List>

        {ActiveTag}
        </div>
    )
}
