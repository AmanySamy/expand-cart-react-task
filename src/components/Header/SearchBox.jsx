import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import ResturantContext from '../../context/ResturantContext'
import ResturantCard from '../ResturantCard'



const Searchbox = styled.div`
    width: 600px;
`
const SearchInput = styled.div`
    background-color: #FFF;
    padding: 10px 20px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    i{
        padding: 0px 10px;
    }
    input{
        border: 0;
        flex-grow: 1;
        outline: 0;
    }
`
const SearchTitle = styled.h3`
    color: #FFF;
`
const SearchResult = styled.h3`
    color: #000;
    background-color: #FFF;
`
export default function SearchBox() {
    const Resurants = useContext(ResturantContext).Resturants
    const [SearchTerm, setSearchTerm] = useState('')

    return (
        <Searchbox>
            <SearchTitle>Find your perfect restaurant</SearchTitle>
            <SearchInput>
                <i className="pi pi-search"></i>
                <input type="text" placeholder='Search For Your Favorite Resturant' onChange={(e) => setSearchTerm(e.target.value)} />
            </SearchInput>
            <SearchResult>{
                Resurants.length > 0 &&
                Resurants
                    .filter(res => res.name.toLowerCase().includes(SearchTerm.toLowerCase()) && SearchTerm !== "")
                    .map(res => (
                        <ResturantCard Rest={res} small={true}></ResturantCard>
                    ))}
            </SearchResult>
        </Searchbox>
    )
}
