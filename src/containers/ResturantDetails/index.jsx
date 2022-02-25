import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import ResturantCard from '../../components/ResturantCard';
import ResturantContext from '../../context/ResturantContext';

export default function ResturantDetails() {
    let params = useParams();
    const ResturantDetails = useContext(ResturantContext).Resturants.filter(res => res.name == params.name)
    // console.log(ResturantDetails)
    return (
        <div className="container">
            <ResturantCard Rest={ResturantDetails[0]} />
        </div>
    )
}
