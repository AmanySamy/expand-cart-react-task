import React from 'react'
import NavBar from '../../components/Navbar'
import Tags from '../../components/Tags'

export default function Home({tags,resturants}) {
    return (
        <div>
            <NavBar />
            <Tags tags={tags} />
        </div>
    )
}
