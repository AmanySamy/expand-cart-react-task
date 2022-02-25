import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const NavigationBar = styled.div`
    height: 70px;
    background-color: transparent;
    color: #FFF;
    padding: 10px 30px;
    position: fixed;
    top: 0;
    width: 100%;
`
const Container = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.h1`
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 300;
    margin: 0;
`
const Menu = styled.div`
a{
    color: #fff;
    margin: 0px 10px;
    padding: 10px;
    text-decoration: none;
}
    
`



export default function NavBar() {

    return (


        <NavigationBar>
            <Container>
                <Logo>Resturant</Logo>
                <Menu>
                    <Link to="/">Home</Link>
                    {/* <Link to="/resturants">Resturants</Link> */}
                </Menu>

            </Container>
        </NavigationBar>


    )
}
