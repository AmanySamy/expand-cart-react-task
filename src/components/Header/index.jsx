import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ResturantContext from '../../context/ResturantContext'
import NavBar from './NavBar'
import SearchBox from './SearchBox'

const Head = styled.div`
    height: 600px;
    background-image: url('/img/header.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`




export default function Header() {

    return (
        <Head>
            <NavBar></NavBar>
            <SearchBox></SearchBox>
           
        </Head>
    )
}
