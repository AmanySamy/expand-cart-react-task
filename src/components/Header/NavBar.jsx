import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const NavigationBar = styled.div`
    height: 70px;
    background-color: ${props => props.bg == 'black' ? '#333' : 'transparent'};
    color: #FFF;
    padding: 10px 30px;
    /* position: fixed; */
    top: 0;
    width: 100%;
    a{
    color: #fff;
    margin: 0px 10px;
    padding: 10px;
    text-decoration: none;
    font-family: 'Cinzel', serif;
}
`
const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.h1`
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 300;
    margin: 0;
    font-family: 'Cinzel', serif;
    transition: all .3s ease;
    &:hover{
        color: orange;
    }
`
const Menu = styled.div`

    
`



export default function NavBar({ bg }) {
    return (
        <NavigationBar bg={bg}>
            <div className='container'>
                <Nav>
                    <Link to="/"><Logo>Resturant</Logo></Link>
                    <Menu>
                        <Link to="/">Home</Link>
                    </Menu>
                </Nav>

            </div>
        </NavigationBar>


    )
}
