import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const NavigationBar = styled.div`
    height: 70px;
    background-color: #CCC;
    color: #FFF;
    padding: 10px 30px;
`
const Container = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.h1`
    font-size: 60px;
    margin: 0;
`
const Menu = styled.div`
    
`
const SearchBox = styled.div`
    
`

export default function NavBar() {
    return (
        <NavigationBar>
            <Container>
                <Logo>Resturant</Logo>
                <Menu>
                    <Link to="/">Home</Link> |{" "}
                    <Link to="/resturants">Resturants</Link>
                </Menu>
                <SearchBox>
                    <input type="text" />
                </SearchBox>
            </Container>
        </NavigationBar>
    )
}
