import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import ResturantContext from '../../context/ResturantContext'
import ResturantCard from '../ResturantCard'



const Searchbox = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 600px;
    @media (max-width: 768px) {
        width: 90%;
    }
`
const SearchInput = styled.div`
    background-color: #FFF;
    padding: 10px 20px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        padding: 10px 5px;
    }
    i{
        padding: 0px 10px;
    }
    input{
        border: 0;
        flex-grow: 1;
        outline: 0;
        max-width: 100%;
        @media (max-width: 768px) {
        font-size: 18px;
    }
    }
`
const SearchTitle = styled.h3`
    color: #FFF;
    margin-bottom: 30px;
    font-size: 35px;
    text-shadow: rgb(0 0 0) 0px 0px 1px ;
    @media (max-width: 768px) {
        font-size: 20px;
    }
`
const SearchResult = styled.div`
    color: #000;
    background-color: #fff;
    position: absolute;
    z-index: 222000;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 10px;
    max-width: 600px;
    padding: 10px;
    border-radius: 30px;
    box-shadow: 0px 10px 10px #ccc ;
    width: 600px;
    @media (max-width: 768px) {
        width: 90%;
    }
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
