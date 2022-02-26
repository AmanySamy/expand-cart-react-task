import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const ResturandCad = styled.div`
    display: flex;
    flex-direction: ${props => props.small ? "row" : "column"};
    border-radius: ${props => props.small ? "15px" : "0px"};
    transition: all .3s ease;
    margin-top: 20px;    
    &:hover{
        box-shadow: 0 15px 30px rgb(0 0 0 / 30%);
        cursor: pointer;
    }
`
const Details = styled.div`
    padding: ${props => props.small ? "10px" : "30px 10px"};
    text-align: ${props => props.small ? "start" : "center"};
    flex-grow: ${props => props.small ? "1" : "0"};
    background-color: rgba(127,127,127,0.075);
    border: 1px solid rgba(127,127,127,0.2);
    position: relative;
    color: orange;
    &:before{
        content: "";
        border: 1px dashed rgba(127,127,127,0.3);
        position: absolute;
        top: 5px;
        bottom: 5px;
        right: 5px;
        left: 5px;
    }
`
const Image = styled.img`
    height: ${props => props.small ? "60px" : "300px"};
    width: ${props => props.small ? "60px" : "100%"};
`
const Title = styled.h3`
    font-size:  ${props => props.small ? "18px" : "23px"};
`
const Desc = styled.p`
    font-size:  ${props => props.small ? "15px" : "18px"};;
    color: #404040;
`
const Places = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: center;
    li{
        font-size: 16px;
        border: 1px solid #333;
        border-radius: 8px;
        margin: 5px;
        padding: 5px;
        i{
            font-size: 16px;
        }
    }
`

export default function ResturantCard({ Rest, small }) {
    return (
        <Link to={`/resturants/${Rest.name}`} style={{ textDecoration: 'none' }}>
            <ResturandCad small={small}>
                <Image src={Rest.logo} alt={Rest.name} small={small} />
                <Details small={small}>
                    <Title small={small}>{Rest.name}</Title>
                    {!small && <Desc small={small}>{Rest.description}</Desc>}
                    {!small && <Places>
                        {Rest.branches.map((place,index) => (
                            <li key={`branch-${index}`}>
                                <i className="pi pi-map-marker"></i> {place.name}
                            </li>
                        ))}
                    </Places>}
                </Details>
            </ResturandCad>
        </Link>
    )
}
