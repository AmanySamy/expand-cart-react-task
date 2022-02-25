import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import ResturantContext from '../../context/ResturantContext'
import { Carousel } from 'primereact/carousel';
import ResturantCard from '../ResturantCard';

const TagSection = styled.section`
    padding: 50px 0px;
`

const List = styled.ul`
        display: flex;
        align-items: center;
        justify-content: center;
    `
const Item = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    margin: 0px 10px;
    transition: all .3s ease-in-out;
    &:hover{
        background: #333;
        background-blend-mode:overlay;
        border-radius: 10px;
        h3{
            color: #FFF;
        }
    }
`
const Spliter = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #333 ;
    
    h3{
        span{
            color:orange;
            font-weight: bold;
        }
    }
    button{
        border: 0;
        background: none;
        font-weight: bold;
        font-size: 20px;
    }
`
export default function Tags() {
    const resturants = useContext(ResturantContext).Resturants
    const tags = useContext(ResturantContext).UniqueTags

    const [ActiveTag, setActiveTag] = useState('')
    const [ActiveTagResturants, setActiveTagResturants] = useState([])



    function handleClick(tag) {
        setActiveTag(tag.name)

        let filteredRes = resturants.filter(res => res.tags.some(tagg => tagg.name === tag.name))
        console.log(filteredRes)
        setActiveTagResturants(filteredRes)

    }
    let tagsList = tags.map(tag => (
        <Item onClick={() => handleClick(tag)}>
            <img src={tag.image} alt="" />
            <h3>{tag.name}</h3>
        </Item>
    ))
    let itemTemplate = (tag) => (
        <Item onClick={() => handleClick(tag)}>
            <img src={tag.image} alt="" />
            <h3>{tag.name}</h3>
        </Item>
    )

    return (
        <TagSection>
            <div className='container'>

                <Carousel value={tags} itemTemplate={itemTemplate} numVisible={4} numScroll={1}></Carousel>
                <Spliter>
                    {ActiveTag
                        ? <h3> Top Resturants of <span>{ActiveTag}</span> Tag</h3>
                        : <h3>All Resturants</h3>
                    }
                    <button onClick={() => { setActiveTagResturants(resturants);setActiveTag("")}}>See all</button>
                </Spliter>
                {/* <Resturants> */}
                <div className="row">
                    {ActiveTag
                        ? ActiveTagResturants.map(res => (
                            <div className="col-12 col-md-6 ">
                                <ResturantCard Rest={res} small={false}/>
                            </div>
                        ))
                        : resturants.map(res => (
                            <div className="col-12 col-md-6 ">
                                <ResturantCard Rest={res} small={false}/>
                            </div>
                        ))                       
                    }
                </div>
            </div>
        </TagSection>
    )
}
