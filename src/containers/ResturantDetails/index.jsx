import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../../components/Header/NavBar';
import ResturantContext from '../../context/ResturantContext';


const ResturandPage = styled.div`

`
const Details = styled.div`
    padding: 30px 10px;
    text-align: start;
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
const TagTitle = styled.h3`
    border-width: 1px 0;
    border-style: solid;
    padding: 4px 15px 0;
    font-size: 32px;
    display: inline-block;
    margin: 30px auto;
`
const Image = styled.img`
    height: 300px;
    width: 100%;
`
const Title = styled.h3`
    font-size:  24px;
`
const Desc = styled.p`
    font-size:  18px;
    color: #404040;
`
const Places = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: flex-start;
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

const ItemTitle = styled.h2`
    font-size: 18px;
    line-height: 1.4;
    margin-bottom: 0;
    display: inline;
    position: relative;
    z-index: 1;
    color: #1b2024;
    background-color: #fff;
`
const Price = styled.span`
    float: right;
    padding-left: 5px;
    font-size: 18px;
    font-weight: 400;
    position: relative;
    z-index: 1;
    line-height: 20px;
    margin-top: 5px;
    background-color: #FFF;
    color: orange;
`
const Description = styled.p`
    color: #1b2024;
    
`
const Dots = styled.div`
    position: relative;
    opacity: 0.85;
    margin-top: -8px;
    padding-top: 8px;
    opacity: 0.7;
    &::before{
        content: '';
        border-top: 1px dashed;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        opacity: 0.5;
    }
`
export default function ResturantDetails({ Resturants }) {

    let params = useParams();
    const ResturantDetails = Resturants.filter(res => res.name == params.name)[0]

    return (
        <ResturandPage>
            <NavBar bg='black' />
            <div className="container my-5">
                <Image src={ResturantDetails.logo} alt={ResturantDetails.name} />
                <Details>
                    <Title>{ResturantDetails.name}</Title>
                    <Desc>{ResturantDetails.description}</Desc>
                    <Places>
                        {ResturantDetails.branches.map((place, index) => (
                            <li key={`${index}`}> <i className="pi pi-map-marker"></i> {place.name}</li>
                        ))}
                    </Places>
                </Details>
                
                <TagTitle>From Menu</TagTitle>
                <div className='row'>
                    {ResturantDetails.items.map((item, index) => (
                        <div class="col-md-6 col-12 text-start my-3" key={`${index}`}>
                            <Price>{item.price}</Price>
                            <ItemTitle>{item.name}</ItemTitle>
                            <Dots>
                                <Description>{item.description}</Description>
                            </Dots>

                        </div>

                    ))}
                </div>
            </div>
        </ResturandPage>
    )
}
